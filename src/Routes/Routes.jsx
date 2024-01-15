import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import DoctorProfile from '../pages/DoctorProfile/DoctoreProfile/DoctorProfile';
import Login from '../pages/Login/Login';
import Registar from '../pages/Registar/Registar';
import Erropage from '../Errorpage/Erropage';
import AppoinmentPage from '../pages/AppoinmentPage/AppoinmentPage/AppoinmentPage';
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
        element: <AppoinmentPage />,
      },
    ],
  },
]);

export default router;
