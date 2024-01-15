import Lottie from 'lottie-react';
import erropage from './errorpage.json';
import { Link } from 'react-router-dom';
const Erropage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <Lottie
        className="lg:w-1/2 mx-auto"
        animationData={erropage}
        loop={true}
      />
      <Link to="/">
        {' '}
        <button className="btn btn-ghost">Back To Home</button>
      </Link>
    </div>
  );
};

export default Erropage;
