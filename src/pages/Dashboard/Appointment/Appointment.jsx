import moment from 'moment';
import useAppointment from '../../../hooks/useAppointment';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
const Appointment = () => {
  const [appointments] = useAppointment();
  const [startDate, setStartDate] = useState(new Date());
  const date = moment(startDate).format('MMMM D YYYY ');
  const filterByDate = appointments.filter(item => item.date === date);

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
            {filterByDate.map((item, i) => (
              <tr key={item._id} className="bg-base-200">
                <th>{i + 1} </th>
                <td>{item.name}</td>
                <td>{item.serviceName}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
                <td>
                  <button className="btn text-white bg-green-950">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
