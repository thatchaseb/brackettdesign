import React from 'react'
import {Jobs} from '../../data'
import { Element } from 'react-scroll'

const Experience = () => {
  const rerenderedJobs = Jobs.map((item, index) => {
    
    const rerenderedLang = item.languages.map((lang, index) => {
      return(
        <React.Fragment key={index}>
          <span>{lang}</span>
        </React.Fragment>
      )
    })
    
    return(
      <React.Fragment key={index}>
        
        {/*         Job            */}
        <div>
          {/*         Job Date            */}
          <div>
            {item.date}
          </div>

          {/*         Job Header            */}
          <div>
            {item.header}
          </div>

          {/*         Job Description            */}
          <div>
            {item.description}
          </div>

          {/*         Job Languages            */}
          <div>
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

