import React, { useRef } from 'react';
import { Element, Link } from 'react-scroll'

const Pricing = () => {
  return(
<Element name='pricing' class="w-full mx-auto  px-5 py-10 text-sky-900">
<div class="text-center max-w-xl mx-auto">
    <h1 class="text-5xl md:text-6xl font-bold mb-5 text-orange-500 "></h1>
    <h3 class="text-2xl text-sky-900 font-medium mb-10">Affordable Prices To Fit Your Needs And Schedule!</h3>
</div>
<div class="max-w-4xl mx-auto md:flex">
    <div class="w-full md:w-1/3 md:flex hidden md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-sky-800 md:flex md:flex-col">
        <div class="w-full flex-grow">
            <h2 class="text-center font-bold uppercase mb-4">Provided at no cost!</h2>
            <h3 class="text-center font-bold text-4xl mb-5">Materials</h3>
            <div class="place-content-center font-bold flex uppercase ">
              <h2>All you need is a Violin!</h2>
            </div>
            <div class="place-content-center font-bold flex uppercase">
              <h2>We'll provided the rest!</h2>
            </div>
            <ul class="text-sm px-5 mb-8">
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Violin Sheet Music</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Bow Rosin</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Suzuki Violin Books</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Wolfhardt Etudes</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Practicing Handouts</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>And More!</li>
            </ul>
        </div>
    </div>
    <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-6 md:py-8 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-sky-800 md:relative md:z-50 md:flex md:flex-col">
        <div class="w-full flex-grow">
        <h2 class="text-center font-bold uppercase mb-4">All Ages!</h2>
            
            <h3 class="text-center font-bold text-4xl md:text-5xl mb-5">Violin Lessons</h3>
            <div class="text-md px-5 mb-8">
              <div class="place-content-around font-bold flex uppercase mb-4">
                <h2>$30</h2><h2>30 min</h2>
              </div>
              <div class="place-content-around font-bold flex uppercase mb-4">
                <h2>$50</h2><h2>60 min</h2>
              </div>
              <div class="place-content-around font-bold flex uppercase mb-6">
                <h2>$65</h2><h2>90 min</h2>
              </div>
              <div class="place-content-center font-bold flex uppercase text-sm">
                <h2>New Student Special</h2>
              </div>
              <div class="place-content-center font-bold flex text-sm">First 30 min lesson is free!</div>
              
              <div class="place-content-center font-bold flex text-sm py-8 text-center uppercase">Purchase 4 lessons at once to receive<br/>$20 OFF</div>
            </div>
        </div>
        <Link to="contact" class="w-full"> 
            <button class="font-bold bg-sky-600 hover:bg-sky-700 text-white rounded-md px-10 py-2 transition-colors w-full">Get Started!</button>
        </Link>
    </div>
    <div class="w-full md:w-1/3 flex md:hidden md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-sky-800 md:flex md:flex-col">
    <div class="w-full flex-grow">
            <h2 class="text-center font-bold uppercase mb-4">Provided at no cost!</h2>
            <h3 class="text-center font-bold text-4xl mb-5">Materials</h3>
            <div class="place-content-center font-bold flex uppercase text-center">
              <h2>All you need is a Violin &</h2>
            </div>
            <div class="place-content-center font-bold flex uppercase text-center">
              <h2>We'll provided the rest</h2>
            </div>
            <ul class="text-sm px-5 mb-8">
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Violin Sheet Music</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Bow Rosin</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Suzuki Violin Books</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Wolfhardt Etudes</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>*Free* Practicing Handouts</li>
                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>And More!</li>
            </ul>
        </div>
    </div>
    <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-sky-800 md:flex md:flex-col">
        <div class="w-full flex-grow">
            <h2 class="text-center font-bold uppercase mb-4">No Violin? No Problem!</h2>
            <h3 class="text-center font-bold text-4xl mb-5">Violin Rentals</h3>
            <div class="place-content-around flex mb-4">
              <h2>
                <span class="font-bold">$10</span><br/>
                per month
              </h2>
              <h2 class="text-center">
                <span class="font-bold">1/8 size</span><br/>
                (3-5 years)</h2>
            </div>
            <div class="place-content-around flex mb-4">
              <h2>
                <span class="font-bold">$20</span><br/>
                per month
              </h2>
              <h2 class="text-center">
                <span class="font-bold">1/4 size</span><br/>
                (5-7 years)</h2>
            </div>
            <div class="place-content-around flex mb-4">
              <h2>
                <span class="font-bold">$25</span><br/>
                per month
              </h2>
              <h2 class="text-center">
                <span class="font-bold">1/2 size</span><br/>
                (7-9 years)</h2>
            </div>
          <div class="place-content-around flex mb-4">
            <h2>
              <span class="font-bold">$30</span><br/>
              per month
            </h2>
            <h2 class="text-center">
                <span class="font-bold">3/4 size</span><br/>
                (9-11 years)</h2>
            </div>
        </div>
    </div>
</div>
</Element>
  )}

  export default Pricing;