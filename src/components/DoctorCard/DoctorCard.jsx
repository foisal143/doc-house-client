import { FaCalendar, FaDollarSign, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { CiLocationOn } from 'react-icons/ci';
const DoctorCard = ({ doctor }) => {
  const { name, image, price, location, category, availableTime, ratings } =
    doctor;
  return (
    <div className="card mt-5 h-[559px] border p-3 card-compact w-full bg-base-100 shadow-xl">
      <figure className="h-1/2">
        <img className="w-full h-full" src={image} alt={name} />
      </figure>
      <div className="py-5 px-1">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p className="my-5">
          <Rating
            fullSymbol={<FaStar className="text-[#F2871D] text-xl" />}
            emptySymbol={<FaRegStar className="text-xl" />}
            placeholderRating={ratings}
            placeholderSymbol={<FaStar className="text-[#F2871D] text-xl" />}
          />
        </p>
        <div>
          <p className="flex items-center gap-2 mt-3">
            <CiLocationOn></CiLocationOn> {location}
          </p>
          <p className="flex items-center gap-2 mt-3">
            <FaCalendar /> {availableTime}
          </p>
          <p className="flex items-center gap-2 mt-3">
            <FaDollarSign /> {price}
          </p>
        </div>
        <div className="card-actions mt-5">
          <button className="btn w-full btn-outline  btn-error">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
