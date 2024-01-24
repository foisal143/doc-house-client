import { useQuery } from '@tanstack/react-query';
import useAxiosSceure from './useAxiosSceure';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';

const useDoctors = () => {
  const { loader } = useContext(AuthContext);
  const axiosSceure = useAxiosSceure();
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ['doctors'],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSceure.get('/all-doctors');
      return res.data;
    },
  });
  return [doctors, refetch];
};

export default useDoctors;
