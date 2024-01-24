import { useQuery } from '@tanstack/react-query';
import useAxiosSceure from './useAxiosSceure';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';

const useUsers = () => {
  const axiosSceure = useAxiosSceure();
  const { loader } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSceure.get('/users');
      if (res.error) {
        return [];
      }
      return res.data;
    },
  });
  return [users, refetch];
};

export default useUsers;
