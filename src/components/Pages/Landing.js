import React, {useEffect, useState} from 'react'
import coverPic from '../media/cover.webp'
import tailwindPic from '../media/Tailwind.webp'
import cssPic from '../media/Css.webp'
import htmlPic from '../media/Html.webp'
import vuePic from '../media/Vue.webp'
import jsPic from '../media/js.webp'
import reactPic from '../media/React.webp'
import { ChaseBio } from '../../data';
import { Element } from 'react-scroll'

//<div class="xl:left-[10rem] lg:top-[45%] lg:text-[5rem] md:top-[45%] md:text-[3.5rem] sm:top-[40%] sm:text-[3rem] top-[30%] left-[4rem] text-[2rem] absolute">Jonah Harmon</div>
//<div class="xl:left-[10rem] lg:top-[58%] lg:text-[3rem] md:top-[55%] md:text-[2.5rem] sm:top-[48%] sm:text-[2rem] top-[37%] left-[4rem] text-[1rem] absolute">Actor - Singer</div>


const Landing = () => {
  
 
  const [logo1, setLogo1] = useState(false);
  const [logo2, setLogo2] = useState(false);
  const [logo3, setLogo3] = useState(false);
  const [logo4, setLogo4] = useState(false);
  const [logo5, setLogo5] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogo1(true)
    }, 1500)
    setTimeout(() => {
      setLogo2(true)
    }, 3000)
    setTimeout(() => {
      setLogo3(true)
    }, 4500)
    setTimeout(() => {
      setLogo4(true)
    }, 6000)
    setTimeout(() => {
      setLogo5(true)
    }, 7500)
    console.log("I Triggered")
  }, [])
    

  return (
    <Element name="home" class="">
      <div class="pt-16 select-none lg:grid lg:grid-cols-2">
        
        <div className='lg:mt-32 p-4 px-8 max-w-[41rem] mx-auto'>
          <div className='text-2xl '>
          A highly skilled <span className='text-green-300 text text-3xl'>Full Stack Web Developer</span> with a passion for creating <span className='text-green-300 text text-3xl'>Innovative</span> and <span className='text-green-300 text text-3xl'>User-Friendly</span> web applications.
          </div>
          <div className='text-slate-300 text-lg mt-4'>
            {ChaseBio}
          </div>
        </div>
        <div className='relative overflow-hidden' >
          <div><img className='mx-auto lg:mx-0 max-w-[20rem] lg:max-w-[40rem]' src={coverPic} alt='Thinking Chase'></img></div>
          <img className='h-14 object-cover lg:invisible animate-orbit absolute top-[40%] left-[50%]' src={reactPic} alt='reactPic'/>
          <img style={{ display: `${logo1 ? 'inline' : 'none'} `}} className={`h-12 object-cover lg:invisible animate-orbit absolute top-[40%] left-[50%]`} src={tailwindPic} alt='tailwindPic'/>
          <img style={{ display: `${logo2 ? 'inline' : 'none'} `}} className={`h-14 object-cover lg:invisible animate-orbit absolute top-[40%] left-[50%]`} src={jsPic} alt='jsPic'/>
          <img style={{ display: `${logo3 ? 'inline' : 'none'} `}} className={`h-12 object-cover lg:invisible animate-orbit absolute top-[40%] left-[50%]`} src={vuePic} alt='vuePic'/>
          <img style={{ display: `${logo4 ? 'inline' : 'none'} `}} className={`h-16 object-cover lg:invisible animate-orbit absolute top-[40%] left-[50%]`} src={htmlPic} alt='htmlPic'/>
          <img style={{ display: `${logo5 ? 'inline' : 'none'} `}} className={`h-16 object-cover lg:invisible animate-orbit absolute top-[40%] left-[50%]`} src={cssPic} alt='cssPic'/>

          <img className='h-24 object-cover lg:visible invisible animate-large-orbit absolute top-[45%] lg:left-[17rem] left-[50%]' src={reactPic} alt='reactPic'/>
          <img style={{ display: `${logo1 ? 'inline' : 'none'} `}} className={`h-16 object-cover lg:visible invisible animate-large-orbit absolute lg:left-[17rem] top-[47%] left-[50%]`} src={tailwindPic} alt='tailwindPic'/>
          <img style={{ display: `${logo2 ? 'inline' : 'none'} `}} className={`h-24 object-cover lg:visible invisible animate-large-orbit absolute top-[45%] lg:left-[17rem] left-[50%]`} src={jsPic} alt='jsPic'/>
          <img style={{ display: `${logo3 ? 'inline' : 'none'} `}} className={`h-20 object-cover lg:visible invisible animate-large-orbit absolute top-[46%] lg:left-[17rem] left-[50%]`} src={vuePic} alt='vuePic'/>
          <img style={{ display: `${logo4 ? 'inline' : 'none'} `}} className={`h-24 object-cover lg:visible invisible animate-large-orbit absolute top-[45%] lg:left-[17rem] left-[50%]`} src={htmlPic} alt='htmlPic'/>
          <img style={{ display: `${logo5 ? 'inline' : 'none'} `}} className={`h-24 object-cover lg:visible invisible animate-large-orbit absolute top-[45%] lg:left-[17rem] left-[50%]`} src={cssPic} alt='cssPic'/>
        </div>
        
      </div>
    
    </Element>

  );
};

export default Landing;

