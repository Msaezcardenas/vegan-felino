import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
import slides from '../data/carouselData.json';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Carousel data={slides} />
      <Outlet />
    </div>
  );
}

export default Home;
