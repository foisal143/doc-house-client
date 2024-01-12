import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Group 1.png';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handlerLogout = () => {
    logout().then().catch();
  };
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      {user ? (
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
          <button
            onClick={handlerLogout}
            className="btn btn-outline border text-white btn-neutral"
          >
            Logout
          </button>
        </div>
      ) : (
        <li>
          <Link to="/login">login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar z-10 py-5 md:px-12 bg-black/25 flex text-white justify-between fixed w-full xl:w-[1200px] ">
      <div className="navbar-start flex items-center gap-2">
        <img className="w-16 h-16" src={logo} alt="logo" />
        <span className="text-[#F7A582]">Doc </span> <span> House</span>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn  btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black/50 rounded-box w-52 absolute right-0"
        >
          {navLink}
        </ul>
      </div>
    </div>
  );
};

export default Header;
