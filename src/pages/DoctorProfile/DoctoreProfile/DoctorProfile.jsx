import { useLoaderData } from 'react-router-dom';

import BannarPorfile from '../BannarPorfile/BannarPorfile';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import DetailsTab from '../DetailsTab/DetailsTab';

const DoctorProfile = () => {
  const loaddedData = useLoaderData();

  return (
    <section className="bg-slate-100 min-h-screen pb-12">
      <BannarPorfile></BannarPorfile>
      <DoctorDetails loaddedData={loaddedData}></DoctorDetails>
      <DetailsTab loaddedData={loaddedData}></DetailsTab>
    </section>
  );
};

export default DoctorProfile;
