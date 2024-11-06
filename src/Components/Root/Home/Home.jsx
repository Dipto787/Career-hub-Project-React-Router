import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from '../../Banner/Banner';
import Category from '../../JobCategory/Category';
import FeturedJob from '../../Featured/FeturedJob';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <div>
        <div className='mt-16'>
        <Category></Category>
        </div>
        <div className='mt-24'>
            <FeturedJob></FeturedJob>
        </div>
          </div>
        </div>
    );
};

export default Home;