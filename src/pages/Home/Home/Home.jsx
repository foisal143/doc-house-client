import Bannar from '../Bannar/Bannar';
import ContactDetails from '../ContactDetails/ContactDetails';
import ContactUs from '../ContactUs/ContactUs';
import ExpartDoctor from '../ExpartDoctor/ExpartDoctor';
import PateintsReview from '../PateintsReview/PateintsReview';
import Service from '../Service/Service';

const Home = () => {
  return (
    <>
      <Bannar></Bannar>
      <Service></Service>
      <ContactDetails></ContactDetails>
      <PateintsReview></PateintsReview>
      <ExpartDoctor></ExpartDoctor>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
