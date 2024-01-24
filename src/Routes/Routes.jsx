import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import DoctorProfile from '../pages/DoctorProfile/DoctoreProfile/DoctorProfile';
import Login from '../pages/Login/Login';
import Registar from '../pages/Registar/Registar';
import Erropage from '../Errorpage/Erropage';
import AppoinmentPage from '../pages/AppoinmentPage/AppoinmentPage/AppoinmentPage';
import DashboardLayout from '../layouts/DashboardLayout';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AllUser from '../pages/Dashboard/AllUser/AllUser';
import AddDoctor from '../pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from '../pages/Dashboard/ManageDoctor/ManageDoctor';
import AddminHome from '../pages/Dashboard/AdminHome/AddminHome';
import Appointment from '../pages/Dashboard/Appointment/Appointment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Erropage></Erropage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/doctor/:id',
        element: <DoctorProfile></DoctorProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctors/${params.id}`),
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'registar',
        element: <Registar></Registar>,
      },
      {
        path: 'appointment',
        element: (
          <PrivateRoute>
            <AppoinmentPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Appointment />,
      },
      {
        path: 'admin-home',
        element: <AddminHome />,
      },
      {
        path: 'all-user',
        element: <AllUser />,
      },
      {
        path: 'add-doctor',
        element: <AddDoctor />,
      },
      {
        path: 'manage-doctor',
        element: <ManageDoctor />,
      },
    ],
  },
]);

export default router;
