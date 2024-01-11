import { CiLocationOn } from 'react-icons/ci';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const DoctorDetails = ({ loaddedData }) => {
  const {
    name,
    image,

    location,
    category,

    ratings,
  } = loaddedData;
  return (
    <section className="px-5 lg:px-12 my-20 ">
      <div className="hero  bg-white">
        <div className=" flex w-full p-5 justify-between gap-5 flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="flex-grow">
            <h1 className="text-4xl font-bold">{name}</h1>
            <p>{category}</p>
            <p className="mt-5">
              <Rating
                fullSymbol={<FaStar className="text-[#F2871D] text-xl" />}
                emptySymbol={<FaRegStar className="text-xl" />}
                placeholderRating={ratings}
                placeholderSymbol={
                  <FaStar className="text-[#F2871D] text-xl" />
                }
              />
            </p>
            <p className="flex items-center gap-2 mt-3">
              <CiLocationOn></CiLocationOn> {location}
            </p>

            <div className="mt-5 flex gap-3">
              <button className="btn btn-secondary btn-outline">
                Dental Filling
              </button>
              <button className="btn btn-secondary btn-outline">
                Teeth Whitneing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
