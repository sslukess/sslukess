import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Pages 
import Home from '@/pages/Home.page';
import KwikMaffs from '@/pages/KwikMaffs.page';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// CSS Imports
import './index.css'

// Define our routes 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/kwikmaffs',
        element: <KwikMaffs/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
