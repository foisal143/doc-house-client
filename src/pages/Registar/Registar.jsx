import { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import toast from 'react-hot-toast';

const Registar = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        updateUserProfile(loggedUser, name, image)
          .then(() => {
            toast.success('Sign Up Success');
            navigate('/login');
          })
          .catch(er => toast.error(er.message));
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
            Sign Up To Doc House
          </h2>
          <form onSubmit={handlerFormSubmit} className="flex flex-col gap-4">
            <div className="form-group">
              <label htmlFor="name" className="block mb-1 label-text">
                Name:
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image" className="block mb-1 label-text">
                URL:
              </label>
              <input
                type="url"
                id="image"
                name="image"
                placeholder="Enter your image url"
                className="p-2 border rounded w-full"
              />
            </div>
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
              Sign Up
            </button>
            <label htmlFor="" className="text-center label-text">
              Already have an account.{' '}
              <Link to="/login" className="text-blue-500 ">
                Go to SIGN IN
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registar;
