import { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import toast from 'react-hot-toast';
import postUserToDB from '../../utilites/PostUserToDB';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.pathname || '/';
  const nvaigate = useNavigate();

  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        toast.success('Sign In Success');
        nvaigate(from, { replace: true });
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        postUserToDB(userInfo);
      })
      .catch(er => toast.error(er.message));
  };

  return (
    <div className="min-h-[100vh] lg:flex justify-evenly items-center">
      <img
        className="lg:w-1/2 min-h-[100vh]"
        src="https://assets-v2.lottiefiles.com/a/7ed64552-1180-11ee-a916-ab928951c9e0/9hpvPHxVw1.png"
        alt=""
      />

      <div className="flex items-center border justify-center ">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl text-center mb-5 font-bold ">
            Sign In To Doc House
          </h2>
          <form onSubmit={handlerFormSubmit} className="flex flex-col gap-4">
            <div className="form-group">
              <label htmlFor="email" className="block mb-1 label-text">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="form-group relative">
              <label htmlFor="password" className="block label-text mb-1">
                Password:
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="p-2 border rounded w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 cursor-pointer"
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#F7A582] text-white p-2 rounded w-full"
            >
              Sign In
            </button>
            <label htmlFor="" className="text-center label-text">
              Please register at first.{' '}
              <Link to="/registar" className="text-blue-500 ">
                Go to SIGN UP
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
