import React from 'react';
import ReactPlayer from 'react-player';

import { Element } from 'react-scroll'

const Videos = () => {
  return(
    <Element name='Videos'>
      <div class='shadow-lg rounded-2xl shadow-sky-800 xl:h-[30rem] xl:w-[60rem] lg:h-[25rem] lg:w-[50rem] md:h-[18rem] md:w-[36rem] sm:h-[14rem] sm:w-[28rem] h-[10rem] w-[20rem] mx-auto'>
        <iframe 
        height="100%"
        width="100%" 

        className='StyledVideo rounded-2xl'
        src="https://www.youtube.com/embed/wLP-AzSlzLA?autoplay=1&mute=1&loop=1&rel=0&showinfo=0&modestbranding=1&" 
        title="YouTube video player" 
        frameborder="0"  
        allowfullscreen
        />

      </div>
   
    </Element>
  )
}

export default Videos;
