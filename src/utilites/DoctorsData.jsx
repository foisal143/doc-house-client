import { useEffect, useState } from 'react';

const DoctorsData = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:5000/doctors')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setLoading(false);
      });
  }, []);
  return [doctors, loading];
};

export default DoctorsData;
