import React, { useState } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { logo } from '../../assets';
import './navbar.css'

const Menu = () =>{
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is PT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
          {/*----- Logo -----*/}
          <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt="" />
          </div>

          {/*----- List Links -----*/}
          <div className='gpt3__navbar-links_container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is PT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
        </div>

        {/*----- Button -----*/}
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>

        {/*----- Burger -----*/}
        <div className='gpt3__navbar-menu'>
          {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          { toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is PT?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
 
                {/*----- Button -----*/}
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>

    </div>
  )
}

export default Navbar