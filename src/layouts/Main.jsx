import { Outlet } from 'react-router-dom';
import Header from '../pages/sharedpages/Header/Header';
import Footer from '../pages/sharedpages/Footer/Footer';

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
