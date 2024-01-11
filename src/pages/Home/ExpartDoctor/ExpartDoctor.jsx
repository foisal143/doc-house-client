import DoctorCard from '../../../components/DoctorCard/DoctorCard';
import DoctorsData from '../../../utilites/doctorsData';

const ExpartDoctor = () => {
  const [doctors] = DoctorsData();

  return (
    <section className="mb-20 space-y-5">
      <div className="text-center">
        <h3 className="text-3xl font-semibold">Our Expert Doctors</h3>
        <p className="w-10/12 mx-auto my-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="my-12 px-5 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {doctors.map(doctor => (
          <DoctorCard doctor={doctor} key={doctor._id}></DoctorCard>
        ))}
      </div>
    </section>
  );
};

export default ExpartDoctor;
