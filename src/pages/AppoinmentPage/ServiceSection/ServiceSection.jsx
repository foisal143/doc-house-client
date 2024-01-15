import moment from 'moment';
import { useEffect, useState } from 'react';
const ServiceSection = ({ value }) => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState(null);
  const [time, setTime] = useState('');
  const slot = service?.slot;
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  const handlerChoseService = id => {
    const singleService = services.find(item => item._id === id);
    setService(singleService);
    console.log(slot);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:');
  };
  return (
    <section className="my-20">
      <div className="text-center">
        <h4 className="text-red-300">
          Available Services on {moment(value).format('MMMM D YYYY, ')}
        </h4>
        <h2 className="text-4xl font-semibold ">Please select a service.</h2>
      </div>

      <div className="mt-12 grid px-5 lg:px-12 grid-cols-2 gap-5  md:grid-cols-3">
        {services.map(item => (
          <div
            onClick={() => handlerChoseService(item._id)}
            className="flex md:w-2/3 rounded-md cursor-pointer border p-3 mx-auto gap-2"
            key={item._id}
          >
            <img
              className=" w-16 h-16 md:w-20 md:h-20 rounded-md"
              src={item.image}
              alt=""
            />
            <h3 className="font-semibold text-xl ">{item.name}</h3>
          </div>
        ))}
      </div>

      {service ? (
        <div className="my-12">
          <h3 className="text-center text-4xl font-semibold">
            Available slots for Teeth{' '}
            <span className="text-red-300">{service.name}</span>.{' '}
          </h3>

          <div className="my-12 px-5 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {slot.map(item => (
              <div
                key={item.time}
                className="p-5  shadow-md text-center  rounded-md space-y-4"
              >
                <img
                  className="w-32 rounded-md h-32 mx-auto"
                  src={service.image}
                  alt=""
                />
                <h3 className="text-xl font-semibold ">{service.name}</h3>
                <p>{item.time}</p>
                <button
                  onClick={() => {
                    document.getElementById('my_modal_3').showModal();
                    setTime(item.time);
                  }}
                  className="btn bg-red-300 btn-error"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}

      {/* modal section */}
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-success absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">{service?.name}</h3>
            <div className="py-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Date:
                  </label>
                  <input
                    type="text"
                    id="date"
                    value={moment(value).format('MMMM D YYYY ')}
                    name="date"
                    readOnly
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 block w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Time:
                  </label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    value={time}
                    readOnly
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 block w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 block w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="phone number"
                    name="phoneNumber"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 block w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 block w-full"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full focus:outline-none focus:ring focus:border-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default ServiceSection;
