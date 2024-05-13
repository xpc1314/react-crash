import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ErrorPage } from './ErrorPage.jsx';

import Home from './page/Home/Home.jsx'
import Aboult from './page/Aboult/Aboult.jsx'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/aboult',
                element:<Aboult/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
