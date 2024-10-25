'use server';
import React from 'react';
// import { Component } from '@/components/Chart/Chart';
import { Component } from './components/Section1/components/Chart';
import FullscreenButton from './components/Fullscreen/FullscreenButton';

import Dashbord from './components/Dashboards/Dashboard'
import Dashboard from './components/Dashboards/Dashboard';





const Home = () => {
  return (
    <div className='sd:mx-0 mt-4 overflow-hidden sd:mt-0'>
     
      <div className='flex flex-row w-full  sd:flex-col'>
        
        {/* <FullscreenButton /> */}

        
<Dashboard/>



       

      </div>
    </div>
  );
};

export default Home;
