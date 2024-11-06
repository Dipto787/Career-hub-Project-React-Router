import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from '../../Banner/Banner';

const Home = () => {
    return (
        <div>
           <div className=' bg-[#F9F9FF] '>
           <div className="  ">
          <Navbar></Navbar>  
          </div>
           </div>
          <Outlet></Outlet>
        </div>
    );
};

export default Home;