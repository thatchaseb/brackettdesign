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
    <Element name="contact" class="text-slate-300 md:ml-4 lg:ml-12 text-2xl">
      <div className='relative'>
        <div className='text-slate-800'>23</div>
        <div className='text-slate-700'>24</div>
        <div className='text-slate-600'>25 </div>
        <div className='text-slate-500'>26</div>
        <div className='text-slate-400'>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div className='md:text-slate-400'>43</div>
        <div className='md:text-slate-500'>44</div>
        <div className='md:text-slate-600'>45</div>
        <div className='md:text-slate-700'>46</div>
        <div className='md:text-slate-800'>47</div>
        <div class='md:hidden' >48</div> 
        <div className='text-slate-400 md:hidden'>49</div>
        <div className='text-slate-500 md:hidden'>50</div>
        <div className='text-slate-600 md:hidden'>51</div>
        <div className='text-slate-700 md:hidden'>52 </div>
        <div className='text-slate-800 md:hidden'>53</div>

        <form id="contact-form" ref={form} onSubmit={handleSubmit} class="container mx-auto my-4 px-4 lg:px-20 absolute top-[92px] sm:left-16">
          <div class="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto ">
            <div class="flex">
              <h1 class="font-bold uppercase text-4xl">Contact Me</h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" id="first-name" name="first-name" placeholder="First Name*" />
              <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" id="last-name" name="last-name" placeholder="Last Name*" />
              <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"  id="email" name="email" placeholder="Email*" />
              <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number" id="phone" name="phone" placeholder="Phone*" />
            </div>
            <div class="my-4">
               <textarea id="message" name="message" placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button type='submit' class="uppercase text-sm font-bold tracking-wide bg-blue-500 text-slate-800 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      

    </Element>

  );
};

export default Contact;

