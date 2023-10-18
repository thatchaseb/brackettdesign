import React, { useState, useEffect } from 'react';
import Landing from './ViolinPages/Landing';
import Contact from './ViolinPages/Contact';
import Videos from './ViolinPages/Videos'
import ViolinHeader from './ViolinHeader'
import Pricing from './ViolinPages/Pricing';
import Testamonials from './ViolinPages/Testamonials';

const ViolinBody = () => {
  
  return (
    <div>
      <ViolinHeader/>
    <div className='relative slate-900'>
      <div class=" py-4 z-10" >
        <div className='pt-4 animate-falling-down-fast pb-24'>
          <Landing/>
        </div>
        <div className='pt-4 animate-fade-in bg-sky-300 pb-8'>
          <Pricing/>
          <Videos/>
        </div>
        
        <div className='px-4 animate-fade-in'>
          <Testamonials/>
        </div>

        <div className='px-4 animate-fade-in'>
          <Contact/>
        </div>
      </div>
      <div className='fixed z-[-20] top-[0rem] h-[200rem] w-full animate-fade-in'>
        <div className='h-[100rem] w-full bg-amber-100'></div>
      </div>
    </div>
    </div>
      

  );
};

export default ViolinBody;