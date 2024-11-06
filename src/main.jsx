import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx' 
import Root from './Components/Root/Root.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Footer from './Components/Root/Home/Footer.jsx';
import Home from './Components/Root/Home/Home.jsx';

let router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        loader:()=>fetch('/src/assets/categories.json'),
        element: <Home></Home>
      },
      {
        path:'/tom',
        element:<Footer></Footer>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
