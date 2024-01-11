import { useState } from 'react';
import seviceImage from '../../../assets/img/service.png';
import cavatyimage from '../../../assets/img/teeth.png';
const Service = () => {
  const [tab, setTab] = useState('cavity');
  return (
    <section className="my-20">
      <div className="md:flex px-12 justify-between items-center gap-5">
        <div className="md:w-1/2">
          <img className="h-[920px] w-full" src={seviceImage} alt="" />
        </div>
        <div className="space-y-5 md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold">Our Services</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="w-full border overflow-hidden flex justify-evenly items-center h-[80px]">
            <button
              onClick={() => setTab('cavity')}
              className={`p-5 w-1/3 h-full ${
                tab === 'cavity' && 'bg-[#F7A582]'
              }`}
            >
              Cavity Protection
            </button>
            <button
              onClick={() => setTab('cosmetic')}
              className={`p-5 w-1/3 h-full ${
                tab === 'cosmetic' && 'bg-[#F7A582]'
              }`}
            >
              Cosmetic Dentisty
            </button>
            <button
              onClick={() => setTab('oral')}
              className={`p-5 w-1/3  h-full ${
                tab === 'oral' && 'bg-[#F7A582]'
              }`}
            >
              Oral Surgery
            </button>
          </div>

          <div className="space-y-5">
            <img src={cavatyimage} alt="" />
            <h3 className="text-3xl font-semibold">
              Electro Gastrology Therapy
            </h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error{' '}
            </p>
            <p>
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className="btn btn-outline btn-error">More Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
