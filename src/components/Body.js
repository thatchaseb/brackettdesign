
import Landing from './Pages/Landing';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import React, { useState, useEffect } from 'react';

const Body = () => {
  const [backgroundChange, setBackgroundChange] = useState(false);
  
  useEffect(() => {
    if (backgroundChange == false) {
      setTimeout(() => {
        setBackgroundChange(true)
      }, 3000);
    }
  })

  return (
    <div className='relative text-white'>
      <div class=" p-4 z-10" >
        <div className='py-4 animate-fade-load'>
          <Landing/>
        </div>
        <div className='py-4'>
          <Experience/>
        </div>
        <div className='py-4'>
          <Projects/>
        </div>
        <div className='py-4'>
          <Contact/>
        </div>
      </div>
      <div className='fixed z-[-20] top-[0rem] h-[200rem] w-full animate-falling-down'>
        <div className='h-[100rem] w-full bg-slate-800'></div>
        <div className='bg-gradient-to-b from-slate-800 h-[100rem]'></div>
      </div>
    </div>
  );
};

export default Body;
