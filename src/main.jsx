import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AuthProvaider from './AuthProvaider/AuthProvaider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvaider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </AuthProvaider>
    </QueryClientProvider>
  </React.StrictMode>
);
