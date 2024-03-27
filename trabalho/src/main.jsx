import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tecnologias } from './Tecnologias.jsx';
import { Media} from './Media.jsx';
import { Mapa} from './Mapa.jsx';
import { RickAndMorty} from './RickAndMorty.jsx';

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
  {
    path: "/rick",
    element:<RickAndMorty />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

    
