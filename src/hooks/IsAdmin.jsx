import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';

const IsAdmin = () => {
  const { user, loader } = useContext(AuthContext);
  const { data: isadmin, isLoading } = useQuery({
    queryKey: ['admin', user?.emial],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      const data = await res.json();
      if (data) {
        return data.admin;
      }
      return {};
    },
  });

  return [isadmin, isLoading];
};

export default IsAdmin;
