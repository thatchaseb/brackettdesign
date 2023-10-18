import React from 'react'
import {Jobs} from '../../data'
import { Element } from 'react-scroll'

const Experience = () => {
  const rerenderedJobs = Jobs.map((item, index) => {

    const rerenderedDesc = item.descriptions.map((desc, index) => {
      return(
        <React.Fragment key={index}>
          <li className='text-blue-100'><span className='text-xl font-bold'>·</span> {desc}</li>
        </React.Fragment>
      )
    })

    const rerenderedLang = item.languages.map((lang, index) => {
      return(
        <React.Fragment key={index}>
          <span className='bg-slate-800 p-1 px-2 mr-2 rounded text-green-300 text-lg'>{lang}</span>
        </React.Fragment>
      )
    })
    
    return(
      <React.Fragment key={index}>
        
        {/*         Job            */}
        <div className='bg-slate-900 text-green-300 p-3 my-4 rounded group'>
          {/*         Job Date            */}
          <a href={item.link} target='_blank' rel='noreferrer' className='group-hover:text-blue-400'>
            {item.date}
          </a>
          <br/>
          {/*         Job Header            */}
          <a href={item.link} target='_blank' rel='noreferrer' className='text-2xl py-2  cursor-pointer group-hover:text-blue-400 '>
            {item.header}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" group-hover:animate-hover-top-left w-6 h-6 ml-2 inline-block"> 
                <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clip-rule="evenodd" />
              </svg>
          </a>

          {/*         Job Descriptions            */}
          <ul>
            {rerenderedDesc}
          </ul>

          {/*         Job Languages            */}
          <div className='mt-4 text-sm'>
            {rerenderedLang}
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <Element name="Experience" class="lg:mx-16 xl:mx-32">
      {/*         Title            */}
      <div className='ml-4 md:ml-12 my-12 text-4xl text-green-400'>
        Work Experience
      </div>

      {/*         Body             */}
      <div className='md:mx-8'>
        
        {rerenderedJobs}

      </div>


    </Element>

  );
};

export default Experience;

