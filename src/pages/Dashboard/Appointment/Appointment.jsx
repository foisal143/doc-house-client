import moment from 'moment';
import useAppointment from '../../../hooks/useAppointment';
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Appointment = () => {
  const { user } = useContext(AuthContext);
  const [appointments] = useAppointment();
  const [startDate, setStartDate] = useState(new Date());
  const [service, setService] = useState({});

  const date = moment(startDate).format('MMMM D YYYY ');
  // TODO:  filter by date
  const filterByDate = appointments.filter(item => item.date === date);

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  return (
    <div className="w-full h-full bg-slate-100 p-10">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-semibold flex-1">My Appointment</h3>
        <DatePicker
          className="w-full p-3 bg-transparent border border-black box-border rounded-md"
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
      </div>
      <div className="overflow-x-auto mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-green-950 text-white">
              <th>#</th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item, i) => (
              <tr key={item._id} className="bg-base-200">
                <th>{i + 1} </th>
                <td>{item.name}</td>
                <td>{item.serviceName}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
                <td>
                  {item.status === 'paid' ? (
                    <>
                      <p className="text-red-500">paid</p>
                      <span className="text-green-400">
                        Tx Id: {item?.tranjactionId}
                      </span>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setService(item);
                        document.getElementById('my_modal_2').showModal();
                      }}
                      className="btn text-white bg-green-950"
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* payment modal here */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-red-400 text-lg">
            Hello,{user?.displayName}
          </h3>
          <h4 className="text-3xl font-semibold">
            Please pay for {service.serviceName}
          </h4>
          <p className="py-4">
            Your Appointment:{' '}
            <span className="text-orange-400">{service.date}</span>,{' '}
            {service.time}
          </p>
          <h4 className="text-3xl pb-3 font-semibold">
            Please Pay: ${service.price}
          </h4>
          <hr />
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm price={service.price} id={service._id} />
            </Elements>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Appointment;
