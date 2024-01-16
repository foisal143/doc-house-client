import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';

const IsAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isadmin, isLoading } = useQuery({
    queryKey: ['admin', user?.emial],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      const data = res.json();
      if (data) {
        return data;
      }
      return {};
    },
  });

  return [isadmin, isLoading];
};

export default IsAdmin;
