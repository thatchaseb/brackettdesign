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
        <div className='bg-slate-900 text-green-300 p-3 my-4 rounded'>
          {/*         Job Date            */}
          <div className=''>
            {item.date}
          </div>

          {/*         Job Header            */}
          <div className='text-2xl py-2 '>
            {item.header}
          </div>

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
    <Element name="Experience" class="">
      {/*         Title            */}
      <div>
          Experience
      </div>

      {/*         Body             */}
      <div>
        
        {rerenderedJobs}

      </div>


    </Element>

  );
};

export default Experience;

