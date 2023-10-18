import React from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'

import { NavLink } from "react-router-dom";
import { SocialLinks } from '../data';


class ViolinHeader extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);

    this.state = {
      message: "Chase Brackett",
      messageDisplayed: "",
      cursorShow: 'animate-pulse',
      menuOpen: false,
  };
  }

  componentDidMount() {

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
      <div class="relative">
        
        <div class="select-none fixed w-screen z-20">
          <div class="p-4 bg-orange-400 text-white">
            <div className='animate-fade-in flex justify-between'>
              <div class="">
                <Link className="text-mid hover:text-amber-900 text-white shadow-amber-950 drop-shadow-md cursor-pointer lg:ml-2 text-3xl font-Merriweather lg:text-4xl font-bold drop-shadow-2xl"  offset={-30}  to="home" smooth={true} duration={800}>
                  <span >Chase Brackett</span>
                </Link>
              </div>
              <div className="hidden delay-75 lg:flex font-Merriweather text-mid justify-evenly text-lg cursor-pointer">
                
                <Link className=" drop-shadow-md font-bold delay-75 mx-2 mt-1 px-2  hover:text-rose-950 cursor-pointer transition ease-out duration-300" to="home" offset={-30} smooth={true} duration={800} >Home</Link>
                <Link className="drop-shadow-md font-bold delay-75 mx-2 mt-1 px-2  hover:text-rose-950 cursor-pointer transition ease-out duration-300" to="pricing"  offset={-85} smooth={true} duration={800} >Pricing</Link>
                <Link className="drop-shadow-md font-bold delay-75 mx-2 mt-1 px-2  hover:text-rose-950 cursor-pointer transition ease-out duration-300" to="testimonials"  offset={-100} smooth={true} duration={800} >Testimonials</Link>
                <NavLink className="drop-shadow-md font-bold delay-75 mx-2 mt-1 px-2  hover:text-rose-950 cursor-pointer transition ease-out duration-300" to="/"  >Other Talents</NavLink>
                <Link className="mx-2 drop-shadow-md font-bold delay-75 mt-1 pl-2 pr-2 cursor-pointer hover:text-rose-950 transition ease-out duration-300" to="contact"  offset={0} smooth={true} duration={800} >Contact</Link>
                <a  
                    href={SocialLinks.Facebook} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mb-2 inline-block rounded mx-2 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    style={{backgroundColor:"#1877f2"}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                </a>
                <a  
                  href={SocialLinks.Instagram} 
                  style={{color:"#458eff"}} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mb-2 inline-block rounded mx-2 px-3 mr-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    style={{backgroundColor: "#458eff"}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </a>
              </div>

              <div className="block lg:hidden mr-6 " onClick={this.handleMenuClick.bind()}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        <div style={{display: `${this.state.menuOpen ? 'block' : 'none'}`}} class="fixed w-64 z-20 bg-orange-400 border-slate-900 border-4 rounded-lg right-4 top-28 ">
          <div class=" mx-auto my-1">
            <div class="text-lg font-bold text-center mb-4 text-white hover:text-gray-200 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-200 px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4" to="home" offset={-30} smooth={true} duration={800} >Home</Link>
            </div>
            <div class="text-lg font-bold text-center mb-4 text-white hover:text-gray-200 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-200 px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4" to="pricing"  offset={-85} smooth={true} duration={800} >Pricing</Link>
            </div>
            <div class="text-lg font-bold text-center mb-4 text-white hover:text-gray-200 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-200 px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4" to="testimonials" offset={-130} smooth={true} duration={800} >Testimonials</Link>
            </div>
            <div class="text-lg font-bold text-center mb-4 text-white hover:text-gray-200 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300 whitespace-nowrap">
              <NavLink onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-200 px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4" to="/" offset={-130} smooth={true} duration={800} >Other Talents</NavLink>
            </div>
            <div class="text-lg font-bold text-center mb-4 text-white hover:text-gray-200 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-200 px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4" to="contact"  offset={15} smooth={true} duration={800} >Contact</Link>
            </div>
            <div class="flex justify-evenly text-lg font-bold text-center text-white hover:text-gray-200 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <a  
                    href={SocialLinks.Facebook} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mb-2 inline-block rounded mx-2 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    style={{backgroundColor:"#1877f2"}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                </a>
                <a  
                  href={SocialLinks.Instagram} 
                  style={{color:"#458eff"}} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mb-2 inline-block rounded mx-2 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    style={{backgroundColor: "#458eff"}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default ViolinHeader;
