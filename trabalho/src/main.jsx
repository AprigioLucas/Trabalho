import React from 'react'
import ReactDOM from 'react-dom/client'

import { Tecnologias } from './Tecnologias.jsx';
import { Mapa, Media } from './Media.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Tecnologias />,
  },
  {
    path: "/media",
    element:<Media />,
  },
  {
    path: "/mapa",
    element:<Mapa />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

    
