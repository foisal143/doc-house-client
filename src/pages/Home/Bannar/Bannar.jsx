import vector from '../../../assets/img/Vector.png';
import img2 from '../../../assets/img/Group 34830.png';
import img3 from '../../../assets/img/Group 6.png';
import doctor1 from '../../../assets/img/Rectangle 20075.png';
import doctor2 from '../../../assets/img/Rectangle 20076.png';
import doctor3 from '../../../assets/img/Rectangle 20077.png';
import circle from '../../../assets/img/Ellipse 1.png';
const Bannar = () => {
  return (
    <div className="min-h-[700px] relative  bg-[#07332F]">
      <img className="w-[110px] h-[120px]" src={vector} alt="" />

      <img
        className="absolute bottom-5 transform left-[40%]"
        src={img3}
        alt=""
      />
      <img
        className="absolute w-[90px]  bottom-5 transform rotate-45 top-[25%] left-[40%]"
        src={img3}
        alt=""
      />
      <div className="w-full mt-24 lg:mt-0 z-[5] px-5 md:px-16 text-white lg:flex justify-between absolute space-y-8 top-0 items-center min-h-[700px]">
        <div className="lg:w-1/2 text-center lg:text-left font-[Source Sans 3] space-y-5">
          <h2 className="text-4xl  lg:text-6xl font-semibold">
            Your Best Medical <br /> Help Center
          </h2>
          <p className="text-white">
            Lorem Ipsum is simply dummy text they are printing typesetting has
            been the industry’s stardard.
          </p>
          <button className="bg-[#F7A582]  btn">All Service</button>
        </div>
        <div className=" flex  relative lg:ms-0 lg:w-1/2">
          <img
            className="absolute hidden lg:block w-[300px] -top-24 left-40"
            src={circle}
            alt=""
          />
          <img
            className=" relative z-[1] w-[120px] h-[120px] md:w-[200px] md:h-[200px] left-12 md:left-20 top-5"
            src={doctor3}
            alt=""
          />
          <img
            className="absolute w-[100px] md:w-fit top-[58%] lg:left-0"
            src={img2}
            alt=""
          />
          <img
            className=" w-[120px] h-[120px] md:w-[200px] md:h-[200px] z-[2]  relative top-12 md:top-24"
            src={doctor2}
            alt=""
          />
          <img
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] md:right-24 right-12 z-[3] relative top-0 md:-top-6"
            src={doctor1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Bannar;
