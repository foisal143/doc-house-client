import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import axios from 'axios';
const useAxiosSceure = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const axiosSciure = axios.create({
    baseURL: 'http://localhost:5000',
  });

  // Add an interceptor for handling requests
  axiosSciure.interceptors.request.use(
    config => {
      // Add the access token to the headers if available in localStorage
      const accessToken = localStorage.getItem('Ac-Token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // Add an interceptor for handling errors
  axiosSciure.interceptors.response.use(
    response => response,
    error => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        return logout().then(() => {
          navigate('/');
        });
      }
      // Handle error response, if needed
      return Promise.reject(error);
    }
  );

  return axiosSciure;
};

export default useAxiosSceure;
