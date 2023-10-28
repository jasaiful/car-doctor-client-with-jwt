import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import MainRouter from './router/MainRouter.jsx';
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={MainRouter} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
