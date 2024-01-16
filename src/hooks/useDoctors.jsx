import { useQuery } from '@tanstack/react-query';
import useAxiosSceure from './useAxiosSceure';

const useDoctors = () => {
  const axiosSceure = useAxiosSceure();
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await axiosSceure.get('/all-doctors');
      return res.data;
    },
  });
  return [doctors, refetch];
};

export default useDoctors;
