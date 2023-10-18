import React from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'
import { NavLink } from "react-router-dom";

class CodingHeader extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);

    this.state = {
        message: "Chase Brackett",
        messageDisplayed: "",
        cursorShow: 'animate-pulse',
        menuOpen: false,
        ZoomClass:"absolute fixed w-screen h-[73px] z-30 animate-zoom-left",
        navigateViolin: false,
    };
  }

  componentDidMount() {

   
    setTimeout(() => {
      this.setState({ cursorShow: 'animate-fadeout' })
    }, 4000)
    this.type()
    

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  type() {

    var doSomething = (doSomething, loop) => {
      if (this.state.messageDisplayed.length <= this.state.message.length) {
        this.setState({ messageDisplayed: this.state.messageDisplayed + this.state.message.charAt(this.state.messageDisplayed.length)})
        loop(doSomething, loop);
      }
    }
    var loop = (doSomething, loop) => {
      var rand = Math.round(Math.random() * 100) * 3;
      setTimeout(function() {
        doSomething(doSomething, loop);
      }, rand);
    };
    loop(doSomething, loop)
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
      <div className='relative'>
        <div style={{background: "#f59549" }} class="">
          
        </div>
        <div class="select-none fixed w-screen z-20">
          <div class="p-4 bg-white flex justify-between">
            <div>
              <Link className="text-mid hover:text-gray-600 cursor-pointer lg:ml-2 text-3xl font-Merriweather lg:text-4xl font-bold"  offset={-30}  to="home" smooth={true} duration={800}>
                <span>{this.state.messageDisplayed}</span>
                <span className={this.state.cursorShow} >|</span>
              </Link>
            </div>
            <div className="hidden delay-75 md:flex font-Merriweather text-mid justify-evenly text-lg cursor-pointer">
              <Link className=" delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="home" offset={-30} smooth={true} duration={800} >Home</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="Projects"  offset={-135} smooth={true} duration={800} >Portfolio</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="Experience"  offset={-100} smooth={true} duration={800} >Experience</Link>
              <NavLink className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="/"  >Other Talents</NavLink>
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

export default CodingHeader;
