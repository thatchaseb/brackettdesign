import React from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'



class Header extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);

    this.state = {
        menuOpen: false,
        letter1: false,
        letter2: false,
        letter3: false,
        letter4: false,
        letter5: false,
        letter6: false,
        letter7: false,
        letter8: false,
        letter9: false,
        letter10: false,
        letter11: false,
        letter12: false,
        letter13: false,
        letter14: false,
        letter15: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ letter1: true })
    }, 300)
    setTimeout(() => {
      this.setState({ letter2: true })
    }, 400)
    setTimeout(() => {
      this.setState({ letter3: true })
    }, 450)
    setTimeout(() => {
      this.setState({ letter4: true })
    }, 500)
    setTimeout(() => {
      this.setState({ letter5: true })
    }, 600)
    setTimeout(() => {
      this.setState({ letter6: true })
    }, 700)
    setTimeout(() => {
      this.setState({ letter7: true })
    }, 900)
    setTimeout(() => {
      this.setState({ letter8: true })
    }, 1000)
    setTimeout(() => {
      this.setState({ letter9: true })
    }, 1050)
    setTimeout(() => {
      this.setState({ letter10: true })
    }, 1100)
    setTimeout(() => {
      this.setState({ letter11: true })
    }, 1200)
    setTimeout(() => {
      this.setState({ letter12: true })
    }, 1350)
    setTimeout(() => {
      this.setState({ letter13: true })
    }, 1400)
    setTimeout(() => {
      this.setState({ letter14: true })
    }, 1450)
    setTimeout(() => {
      this.setState({ letter15: false })
    }, 2000)
  

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToTopM() {
    if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })}
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 2000,

      smooth: 'easeInOutQuart',
      offset: 500
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleMenuClick = () => {
     if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })} 
  }


  render() {
    return (
      <div>
        <div class="select-none fixed w-screen z-20">
          <div class="p-4 bg-white flex justify-between">
            <div class="lg:grid grid-cols-2">
              <Link className="text-mid hover:text-gray-600 cursor-pointer lg:ml-2 text-3xl font-Merriweather lg:text-4xl font-bold"  offset={-30}  to="home" smooth={true} duration={800}>
                <span style={{  display: `${this.state.letter1 ? 'inline' : 'none'} `}}>C</span>
                <span style={{  display: `${this.state.letter2 ? 'inline' : 'none'} `}}>h</span>
                <span style={{  display: `${this.state.letter3 ? 'inline' : 'none'} `}}>a</span>
                <span style={{  display: `${this.state.letter4 ? 'inline' : 'none'} `}}>s</span>
                <span style={{  display: `${this.state.letter5 ? 'inline' : 'none'} `}}>e</span>
                <span style={{  display: `${this.state.letter6 ? 'inline' : 'none'} `}}> </span>
                <span style={{  display: `${this.state.letter7 ? 'inline' : 'none'} `}}>B</span>
                <span style={{  display: `${this.state.letter8 ? 'inline' : 'none'} `}}>r</span>
                <span style={{  display: `${this.state.letter9 ? 'inline' : 'none'} `}}>a</span>
                <span style={{  display: `${this.state.letter10 ? 'inline' : 'none'} `}}>c</span>
                <span style={{  display: `${this.state.letter11 ? 'inline' : 'none'} `}}>k</span>
                <span style={{  display: `${this.state.letter12 ? 'inline' : 'none'} `}}>e</span>
                <span style={{  display: `${this.state.letter13 ? 'inline' : 'none'} `}}>t</span>
                <span style={{  display: `${this.state.letter14 ? 'inline' : 'none'} `}}>t</span>
                <span style={{  display: `${this.state.letter15 ? 'inline' : 'none'} `}} className='animate-pulse'>|</span>
              </Link>
            </div>
            <div className="hidden delay-75 md:flex font-Merriweather text-mid justify-evenly text-lg cursor-pointer">
              <Link className=" delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="home" offset={-30} smooth={true} duration={800} >Home</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="Projects"  offset={-135} smooth={true} duration={800} >Portfolio</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="Experience"  offset={-100} smooth={true} duration={800} >Experience</Link>
              <Link className="mx-2 delay-75 mt-1 px-2 cursor-pointer hover:text-gray-600 transition ease-out duration-300" to="contact"  offset={0} smooth={true} duration={800} >Contact</Link>
            </div>

            <div className="block md:hidden mr-6 " onClick={this.handleMenuClick.bind()}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>


          </div>
        </div>

        <div style={{display: `${this.state.menuOpen ? 'block' : 'none'}`}} class="fixed w-48 z-20 bg-gray-100  border-2 rounded-lg right-4 top-28 ">
          <div class=" mx-1 my-1">
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="home" offset={-30} smooth={true} duration={800} >Home</Link>
            </div>
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="Projects" offset={-115} smooth={true} duration={800} >Portfolio</Link>
            </div>
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="Experience" offset={-130} smooth={true} duration={800} >Experience</Link>
            </div>
              <div class="text-center text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="px-8 hover:text-gray-100 w-full mx-2 lg:mt-3 mt-4" to="contact"  offset={15} smooth={true} duration={800} >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;
