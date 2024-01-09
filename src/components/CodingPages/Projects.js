import React from 'react'
import { Element } from 'react-scroll'
import { sites } from '../../data'

const Projects = () => {
  const rerenderedProjects = sites.map((item, index) => {


    const rerenderedLang = item.languages.map((lang, index) => {
      return(
        <React.Fragment key={index}>
          <span className='text-green-300 p-1 px-2 mr-1 rounded bg-slate-900 text-lg'>{lang}</span>
        </React.Fragment>
      )
    })
    
    return(
      <React.Fragment key={index}>
        
        {/*         Project            */}
        <div className='group text-gray-300 px-3 my-12 grid grid-cols-4 '>
          
          {/*         Project Picture           */}
          <a style={{animationDelay:'400ms'}} href={item.link} target='_blank' rel='noreferrer' className='object-cover md:group-hover:animate-hflip mt-2
          '>
            <div className='md:group-hover:animate-fasthflip'>
              <img src={item.thumbnail} alt="Site Preview" className='border-solid border-8 rounded-lg border-green-400 group-hover:border-blue-400'/>
            </div>
          </a>

          {/*         Project Data          */}
          <div className='col-span-3 ml-4 '>

            {/*         Project Header            */}
            <a href={item.link} target='_blank' rel='noreferrer' className='text-2xl pb-2 text-green-300  cursor-pointer group-hover:text-blue-400'>
              {item.header} 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="md:group-hover:animate-hover-top-left w-6 h-6 ml-2 inline-block"> 
                <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clip-rule="evenodd" />
              </svg>

            </a>

            <ul class="group-hover:text-yellow-400 text-green-300">
              {item.log}
            </ul>

            {/*         Project Descriptions            */}
            <ul>
              {item.description}
            </ul>

            {/*         Project Languages            */}
            <div className='mt-4 pb-2 text-sm'>
              <div className='m-2'>{rerenderedLang}</div>
            </div>
          </div>

         
        </div>
      </React.Fragment>
    );
  });


  return (
    <Element name="Projects" class="text-slate-900 text-lg lg:mx-16 xl:mx-32">
       {/*         Title            */}
      <div className='ml-4 md:ml-12 my-12 text-4xl text-green-400'>
        Recent Projects
      </div>

     {/*         Body             */}
     <div className='md:mx-8'>
        
        {rerenderedProjects}

      </div>

    </Element>

  );
};

export default Projects;

