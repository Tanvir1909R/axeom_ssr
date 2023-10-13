import { useEffect, useRef } from "react";
import {FaBars} from 'react-icons/fa'
import "./navbar.scss";
import logo from '../../public/logo.png'


const Navbar = () => {
  const NavBar = useRef(null)
  useEffect(() => {
    let lastScrollTop = 0
    const nav = document.querySelector('#nav')
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if(scrollTop > lastScrollTop){
        nav.style.top = '-100px'
      }else{
        nav.style.top = '0px'
      }
      lastScrollTop = scrollTop
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = ()=>{
    NavBar.current.classList.toggle('nav_active')
  }
  return (
    <div className="container" id="nav">
      <div className="navbar_wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <nav ref={NavBar}>
            <a href="/aboutus" className="link">
              About Us
            </a>
            <a href="/" className="link">
              Projects
            </a>
            <div className="dot"></div>
          </nav>
          <div>
            <a href="#Book">
            <button>
              WORK WITH US  
            </button>
            </a>
          </div>
          <div className="bar" onClick={handleNav}>
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
