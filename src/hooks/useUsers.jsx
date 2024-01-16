import { useQuery } from '@tanstack/react-query';
import useAxiosSceure from './useAxiosSceure';

const useUsers = () => {
  const axiosSceure = useAxiosSceure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
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
