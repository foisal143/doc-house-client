import { FaClock, FaPhone } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
const ContactDetails = () => {
  return (
    <section className=" mb-20 space-y-5 md:flex px-5 md:px-12 gap-10 justify-between items-center">
      <div className="flex md:w-1/3 h-[200px] justify-center text-white px-5 py-8 items-center gap-2 bg-[#07332F] rounded-md">
        <span className="text-xl mb-11">
          <FaClock></FaClock>
        </span>
        <div>
          <h4 className="text-xl font-semibold">Opening Hours</h4>
          <p>
            Open 9.00 am to 5.00pm <br /> Everyday
          </p>
        </div>
      </div>
      <div className="  md:w-1/3 flex h-[200px] justify-center text-white px-5 py-8 items-center gap-2 bg-[#F7A582] rounded-md">
        <span className="text-xl mb-11">
          <CiLocationOn />
        </span>
        <div>
          <h4 className="text-xl font-semibold">Our Locations</h4>
          <p>
            Dhanmondi 17, Dhaka <br /> -1200, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex md:w-1/3 h-[200px] justify-center text-white px-5 py-8 items-center gap-2 bg-[#07332F] rounded-md">
        <span className="text-xl mb-11">
          <FaPhone></FaPhone>
        </span>
        <div>
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p>
            +88 01750 00 00 00 <br /> +88 01750 00 00 00
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
