
import coverPic from '../media/Headshot.jpg'

import { ChaseViolinBio } from '../../data';
import { Element } from 'react-scroll'

const Landing = () => {

  return (
    <Element name="home" class="">
      <div class="pt-24 select-none lg:grid lg:grid-cols-2">
        
        <div className='lg:mt-32 p-4 px-8 max-w-[41rem] mx-auto'>
          <div className='text-3xl '>
          Hi I'm Chase B and I'm a professional <span className='text-orange-600 text text-3xl'>Actor</span>, <span className='text-orange-600 text text-3xl'>Singer</span> and <span className='text-orange-600 text text-3xl'>Violinist</span>! I've been playing Violin for <span className='text-orange-600 text text-3xl'>over 20 years</span> now and have played for numerous Orchestras, Weddings, Musicals, Operas, and Concerts.
         
          </div>
          <div className='text-slate-800 text-xl mt-4'>
           
          My violin students can expect to learn solid technique, how to read music, how to play by ear, how to practice effectively and most of all have fun!
          We will be using a mix of classical violin pieces and contemporary music so learning stays challenging but engaging! Whether you have played violin for years or you are picking up the instrument for the first time I can help you reach new heights with violin!
          <br/>
          <br/>
          I also have student violins available for rental!
          </div>
				</div>
        
        <div className='relative overflow-hidden ' >
          <div class="mx-3"><img className='mx-auto lg:mx-0 max-w-[20rem] lg:max-w-[40rem] rounded-2xl shadow-lg rounded-2xl shadow-gray-600' src={coverPic} alt='Thinking Chase'></img></div>
        </div>
      </div>
    
    </Element>

  );
};

export default Landing;

