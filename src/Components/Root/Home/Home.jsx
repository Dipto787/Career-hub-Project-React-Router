import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from '../../Banner/Banner';
import Category from '../../JobCategory/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <div>
        <div className='mt-16'>
        <Category></Category>
        </div>
          </div>
        </div>
    );
};

export default Home;