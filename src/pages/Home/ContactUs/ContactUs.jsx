import { CiLocationOn } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className=" lg:h-[500px] py-8  mx-5 md:mx-12 mb-12 bg-[#07332F] text-white">
      <div className="lg:flex h-full px-10 justify-between items-center gap-5">
        <div className="lg:w-1/2 space-y-8">
          <h3 className="text-4xl font-semibold ">Contact With Us</h3>
          <p className="text-white">
            Sed ut perspiciatis unde omnis iste natus error sit <br />{' '}
            voluptatem accusantium doloremque laudantium, <br /> totam rem
            aperiam, eaque ipsa quae ab illo inve ntore <br /> veritatis et
            quasi.
          </p>
          <div>
            <p className="flex items-center text-white gap-2">
              <FaPhone></FaPhone> +88 01750 14 14 14
            </p>
            <p className="flex items-center text-white gap-2">
              <CiLocationOn></CiLocationOn> Dhanmondi, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form className="lg:space-y-4 mt-8">
            {/* Group 1: Name and Email */}
            <div className="flex space-y-5 flex-col md:flex-row md:justify-between">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-5 p-4  rounded-md  bg-white/5 w-full shadow-xl me-2"
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className=" p-4 mt-5 rounded-md bg-white/5 w-full shadow-xl"
              />
            </div>

            {/* Group 2: Mobile Number and Doctor Name */}
            <div className="flex  lg:mt-1 space-y-5 flex-col md:flex-row md:justify-between">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                className="mt-5 p-4   rounded-md bg-white/5 w-full shadow-xl "
              />

              <input
                type="text"
                id="doctorName"
                name="doctorName"
                placeholder="Doctor Name"
                className="mt-5 p-4 rounded-md bg-white/5 w-full  shadow-xl  ml-0 md:ml-2"
              />
            </div>

            {/* Group 3: Time and Date */}
            <div className="flex  space-y-5 flex-col md:flex-row md:justify-between">
              <input
                type="time"
                id="time"
                name="time"
                placeholder="Time"
                className="mt-5 p-4 rounded-md bg-white/5 w-full  shadow-xl "
              />

              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                className="mt-1 p-4 rounded-md bg-white/5 w-full  shadow-xl  ml-0 md:ml-2"
              />
            </div>

            {/* Submit Button */}
            <div className="flex mt-5  ">
              <button
                type="submit"
                className="bg-[#F7A582] lg:mt-5 py-3 w-full text-white p-2 rounded-md hover:bg-[#ed8e65]"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
