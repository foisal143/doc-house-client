import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Icon from '../../../components/Icon/Icon';
const PateintsReview = () => {
  const [pateints, setPateints] = useState([]);

  useEffect(() => {
    fetch('patients.json')
      .then(res => res.json())
      .then(data => setPateints(data));
  }, []);

  return (
    <section className="mb-20 space-y-5">
      <h3 className="text-3xl font-semibold text-center">
        What Our Patients Says
      </h3>
      <p className="w-10/12 mb-12 mx-auto text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="px-5 pt-12 md:px-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          injectStyles={[
            `.swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }
          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }`,
          ]}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {pateints.map(pateint => (
            <SwiperSlide className="px-12" key={pateint.name}>
              <div className=" border w-full p-5 md:h-[200px]">
                <div className="flex gap-2 justify-between items-center">
                  <img
                    src={pateint.image}
                    className="w-20 h-20 rounded-full"
                    alt=""
                  />
                  <div className="flex-grow">
                    <h3 className=" md:text-2xl font-semibold">
                      {pateint.name}
                    </h3>
                    <p>{pateint.profession}</p>
                  </div>
                  <span className="hidden md:block">
                    <Icon></Icon>
                  </span>
                </div>
                <p>{pateint.description}</p>
                <span className="block md:hidden">
                  <Icon></Icon>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PateintsReview;
