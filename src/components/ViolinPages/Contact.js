import React, { useRef } from 'react';
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6gjy9nh', 'template_ysc79f8', form.current, 'ypFH9YwL6pVm9fLq1')
    .then((result) => {
        console.log(result.text);
        }, (error) => {console.log(error.text)}
    );
    form.current.reset();
  }

  const form = useRef();


  return (
    <Element name="contact" class="text-slate-900 text-2xl">
      <div className='relative pb-24'>
        
        <div class="flex justify-center">
        
        <form id="contact-form" ref={form} onSubmit={handleSubmit} class="container my-4 top-[92px]">
          <div class="w-full py-8 my-4 lg:pl-20">
            <div class="flex">
              <h1 class="font-bold uppercase text-4xl">Contact Me</h1>
            </div>
            <div class="py-2 md:w-2/3 xl:w-1/2">
              <h2>Be sure to include what days of the week you have available and duration of lesson wanted</h2>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input class="border-2 border-orange-500 w-full bg-gray-50 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" id="first-name" name="first-name" placeholder="First Name*" />
              <input class="border-2 border-orange-500 w-full bg-gray-50 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" id="last-name" name="last-name" placeholder="Last Name*" />
              <input class="border-2 border-orange-500 w-full bg-gray-50 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"  id="email" name="email" placeholder="Email*" />
              <input class="border-2 border-orange-500 w-full bg-gray-50 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number" id="phone" name="phone" placeholder="Phone*" />
            </div>
            <div class="my-4">
               <textarea id="message" name="message" placeholder="Message*" class="border-2 border-orange-500 w-full h-32 bg-gray-50 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button type='submit' class="uppercase text-md font-bold tracking-wide bg-orange-500 text-amber-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
      

    </Element>

  );
};

export default Contact;

