import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ReviewCard = ({ review }) => {
  const { clientName, clientImage, details, clientRating } = review;
  return (
    <div className="card h-[500px] bg-base-100 shadow-xl">
      <figure className="px-10 h-1/2 pt-10">
        <img
          src={clientImage}
          alt={clientName}
          className="rounded-xl h-full w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{clientName}</h2>
        <p>{details}</p>
        <p className="my-5">
          <Rating
            fullSymbol={<FaStar className="text-[#F2871D] text-xl" />}
            emptySymbol={<FaRegStar className="text-xl" />}
            placeholderRating={clientRating}
            placeholderSymbol={<FaStar className="text-[#F2871D] text-xl" />}
          />
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
