import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import DoctorProfile from '../pages/DoctorProfile/DoctoreProfile/DoctorProfile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
    ],
  },
]);

export default router;
