import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import image from '../../../assets/img/chair 1.png';
import ServiceSection from '../ServiceSection/ServiceSection';

const HeroSection = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section className="my-20">
      <div className="px-5 md:px-12 lg:flex  space-y-10 items-center justify-evenly">
        <div className="w-fit mx-auto">
          <Calendar
            className="border border-red-500"
            onChange={onChange}
            value={value}
          />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <ServiceSection value={value} />
    </section>
  );
};

export default HeroSection;
