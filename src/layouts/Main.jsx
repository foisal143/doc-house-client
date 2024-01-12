import { Outlet, useLocation } from 'react-router-dom';
import Header from '../pages/sharedpages/Header/Header';
import Footer from '../pages/sharedpages/Footer/Footer';

const Main = () => {
  const location = useLocation();
  const isShow =
    location.pathname.includes('login') ||
    location.pathname.includes('registar');
  return (
    <>
      {isShow || <Header></Header>}
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      {isShow || <Footer></Footer>}
    </>
  );
};

export default Main;
