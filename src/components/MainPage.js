import React, { useState, useEffect } from 'react';
import codePic from "./media/Headshot.jpg"
import violinPic from "./media/RenFairViolin.jpg"
import { NavLink } from "react-router-dom";

const ViolinBody = () => {
  
  return (
    <div  className='p-8 animate-fade-in bg-slate-50 h-screen'>
      <div class="w-full text-center text-4xl text-slate-600 font-bold">
        <h1 class="p-4">Welcome To Chase Brackett's Website</h1>
        <h2 class="p-4 mb-24">Pick your Destination</h2>
      </div>
      
      <div class="lg:flex w-full lg:place-content-around p-4">

        <div class="rounded-2xl bg-slate-700 p-4 border-b-4 border-r-4 border-slate-600 drop-shadow-2xl ">
          <div class="drop-shadow-md"><img className='mx-auto lg:mx-0 max-w-[10rem] lg:max-w-[20rem] rounded-2xl border-4 border-green-500' src={codePic} alt='Coding Chase'></img></div>
          <NavLink to="/coding">
            <div class="drop-shadow-md bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer text-2xl text-center mt-4">Coding +<br/>Website Development</div>
          </NavLink>
        </div>

        <div class="rounded-2xl bg-orange-500 p-4 border-b-4 border-r-4 border-amber-500 drop-shadow-2xl lg:mt-0 mt-8">
          <div class="drop-shadow-md"><img className='mx-auto lg:mx-0 max-w-[10rem] lg:max-w-[20rem] rounded-2xl border-4 border-amber-100' src={violinPic} alt='Coding Chase'></img></div>
          <NavLink to="/violin">
            <div class="drop-shadow-md bg-amber-200 hover:bg-amber-300 text-slate-800 font-bold py-2 px-4 rounded cursor-pointer text-2xl text-center mt-4">Violin<br/>Lessons</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViolinBody;