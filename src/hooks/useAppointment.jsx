import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSceure from './useAxiosSceure';

const useAppointment = () => {
  const { user } = useContext(AuthContext);
  const axiosSciure = useAxiosSceure();
  const { data: appointments = [], refetch } = useQuery({
    queryKey: ['appointments', user?.email],
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/appointments?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem('Ac-Token')}`,
    //       },
    //     }
    //   );
    //   const data = res.json();
    //   if (data.error) {
    //     return [];
    //   }

    //   return data;
    // },
    queryFn: async () => {
      const data = await axiosSciure.get(`/appointments?email=${user?.email}`);
      if (!data.error) {
        return data.data;
      }
      return [];
    },
  });
  return [appointments, refetch];
};

export default useAppointment;
