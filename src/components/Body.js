
import Landing from './Pages/Landing';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const Body = () => {
  return (
    <div class="bg-blue-100 p-4">
      <div className='py-4'>
        <Landing/>
      </div>
      <div className='py-4'>
        <Experience/>
      </div>
      <div className='py-4'>
        <Projects/>
      </div>
      <div className='py-4'>
        <Contact/>
      </div>
    </div>

  );
};

export default Body;
