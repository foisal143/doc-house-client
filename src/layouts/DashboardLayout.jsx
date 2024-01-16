import { Link, Outlet } from 'react-router-dom';
import Header from '../pages/sharedpages/Header/Header';
import IsAdmin from '../hooks/IsAdmin';

const DashboardLayout = () => {
  // todo: admin create
  const [isadmin] = IsAdmin();
  const admin = isadmin?.admin;
  return (
    <>
      <div className=" lg:w-[1080px] w-full xl:w-[1200px] h-[108px] z-10 fixed bg-green-950">
        <Header />
      </div>
      <div className="drawer pt-28  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-success drawer-button lg:hidden"
          >
            Open Menu
          </label>
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
            {admin ? (
              <>
                <li>
                  <Link to="/dashboard"> Admin Home </Link>
                </li>
                <li>
                  <Link to="all-user">All Users</Link>
                </li>
                <li>
                  <Link to="add-doctor">Add A Doctor</Link>
                </li>
                <li>
                  <Link to="manage-doctor">Manage Doctors</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard">My Appointments</Link>
                </li>
                <li>
                  <Link to="my-reviews">My Reviews</Link>
                </li>
                <li>
                  <Link to="my-history">My History</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
