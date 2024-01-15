import vector from '../../../assets/img/Vector.png';

import img3 from '../../../assets/img/Group 6.png';

const Bannar = () => {
  return (
    <div className="min-h-[500px] relative flex items-center bg-[#07332F]">
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

      <div className="text-white">
        <h5 className="font-semibold ">Home / Appointment</h5>
        <h3 className="text-5xl font-bold ">Appointment</h3>
      </div>
    </div>
  );
};

export default Bannar;
