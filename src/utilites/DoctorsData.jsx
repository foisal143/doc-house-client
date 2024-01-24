import { useEffect, useState } from 'react';
import useAxiosSceure from '../hooks/useAxiosSceure';

const DoctorsData = () => {
  const [doctors, setDoctors] = useState([]);
  const axiosSciure = useAxiosSceure();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSciure
      .get('http://localhost:5000/doctors')

      .then(res => {
        setDoctors(res.data);
        setLoading(false);
      });
  }, [axiosSciure]);
  return [doctors, loading];
};

export default DoctorsData;
