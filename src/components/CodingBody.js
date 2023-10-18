
import Landing from './CodingPages/Landing';
import Experience from './CodingPages/Experience';
import Projects from './CodingPages/Projects';
import Contact from './CodingPages/Contact';
import CodingHeader from './CodingHeader';

import React, { useState, useEffect } from 'react';

const CodingBody = () => {
  const [backgroundChange, setBackgroundChange] = useState(false);
  
  useEffect(() => {
    if (backgroundChange === false) {
      setTimeout(() => {
        setBackgroundChange(true)
      }, 3000);
    }
  })

  return (
    <div>
      <CodingHeader/>
      <div className='relative text-white'>
        <div class=" py-4 z-10" >
          <div className='pt-4 animate-fade-load'>
            <Landing/>
          </div>
          <div className='p-4 animate-fade-load bg-slate-950'>
            <Projects/>
          </div>
          <div className='pt-4 px-4 animate-fade-load'>
            <Experience/>
          </div>
          
          <div className='px-4 animate-fade-load'>
            <Contact/>
          </div>
        </div>
        <div className='fixed z-[-20] top-[0rem] h-[200rem] w-full animate-falling-down'>
          <div className='h-[100rem] w-full bg-slate-900'></div>
          <div className='bg-gradient-to-b from-slate-900 h-[100rem]'></div>
        </div>
      </div>
    </div>
  );
};

export default CodingBody;
