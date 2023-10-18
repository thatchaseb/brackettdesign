import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Tests, ViolinJobs } from "../../data"



const Testamonials = () => {

  const [count, setCount] = useState(0);
  
  

  const jobs = [
    {

    },
  ]

  const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(updateCount, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  let testCount = Math.floor((count % (Tests.length * 5)) / 5) 
  const JobCount = Math.floor(((count + 1) % (ViolinJobs.length * 2)) / 2)
  
  return (
    <Element name="testimonials">
      <div className="lg:pt-24 lg:px-32 pt-20 grid grid-cols-1 md:grid-cols-2 sm:p-8 min-h-[45rem]">
        <div className="col">
          <div className="text-3xl flex place-content-center font-bold text-orange-700">Testamonials</div>
          <div className="p-4 flex place-content-center">
            <img className=' mx-4 w-48 h-48 rounded-full border-4 border-amber-100 object-cover' src={Tests[testCount].picture} alt='Testamonial Giver'></img>
          </div>
          <div className="p-4 px-8 flex place-content-center">
            <div className="w-96 block text-slate-800 text-xl"><span className="font-bold mr-4">{Tests[testCount].name}</span>{Tests[testCount].testimony}</div>
          </div>
          
        </div>
        <div className="col">
          <div className="pt-16 md:pt-0 text-3xl flex place-content-center font-bold text-orange-700">Places I've Worked</div>
          <div className="flex place-content-center md:py-16 py-8 p-4">
            <img className='mx-4 w-64 h-64 rounded-2xl border-4 bg-black border-amber-100 object-contain p-4' src={ViolinJobs[JobCount].picture} alt='Testamonial Giver'></img>
          
          </div>
          <div className="text-3xl text-slate-800 flex place-content-center">{ViolinJobs[JobCount].name}</div>
        </div>
      </div>
    </Element>
  )
}

export default Testamonials