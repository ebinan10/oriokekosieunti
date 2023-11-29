import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Twitter from './twitter (1).svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import instagram from './instagram-icon.svg'
import koseuntiLogo from '../images/koseuntiLogo.jpg'
// import { Link } from 'react-router-dom'
import  { useState } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center '>
      <div className="w-full md:max-h-[90vh] max-h-[130vh]  bg-[#ccc] w-full flex md:flex-row flex-col justify-center items-center">
        <div className="md:w-3/5 w-[92%] mb-4 h-[80%] md:ml-0 ml-[5vw] text-[black] flex justify-evenly item-center">
          <div className='mt-[10px] h-full md:text-md gap-2 text-sm flex flex-col'>
            <h3 className='md:m-[10px] text-lg h-[10vh] md:mb-0 mb-1 flex justify-center items-center font-bold'>Quick Links</h3>
            <Link  to="/contact" className=' md:m-[15px]  bg-transparent'> Contact</Link>
            <Link to="/about" className=' md:m-[15px] m-2 bg-transparent'>About</Link>
            <Link to="/product" className=' md:m-[15px] m-2 bg-transparent'>Expectation</Link>
            <Link to="/service" className=' md:m-[15px] m-2 bg-transparent'>Testimony</Link>
            <Link to="/gallary" className=' md:m-[15px] m-2 bg-transparent'>Gallary</Link>
        </div> 
        
        <div className='mt-[10px] h-full md:text-md gap-2 text-sm flex flex-col'>
          <h3 className='md:m-[10px] text-lg h-[10vh] flex justify-center items-center font-bold'>Program</h3>
          <li className='md:m-[10px] m-2 list-none'>Anniversary</li>
          <li className='md:m-[10px] m-2 list-none'>Weekly Program</li>
          <li className='md:m-[10px] m-2 list-none'>Monthly Program</li>
          <li className='md:m-[10px] m-2 list-none'>Sunday Service</li>
        </div>
        <div className='mt-[10px] md:text-md h-full md:mr-0 mrmd gap-2 text-sm flex flex-col'>
        <h3 className='md:m-[10px] text-lg h-[10vh] flex justify-center items-center font-bold'>Content</h3>
          <li className='md:m-[10px] m-2 list-none'>Email Address</li>
          <li className='md:m-[10px] m-2 list-none'>Phone Number</li>
          <li className='md:m-[10px] m-2 list-none'>Physical Address</li>
          <li className='md:m-[10px] m-2 list-none'>Information</li>
          <li className='md:m-[10px] m-2 list-none'>Program Details</li>
          <li className='md:m-[10px] m-2 list-none'>Location Details</li>
          <Link to="/founder" className=' md:m-[10px] m-2 bg-transparent'>
            <li className='md:m-[10px] m-2 list-none'>Meet Founder</li>
            </Link>
        </div>
        </div>
        <div className="md:w-1/4 w-4/5 h-[90px] my-[20px] flex flex-col gap-5 justify-center items-center bg-transparent">
        <div className="w-full flex justify-center items-center ">
       <Link className='bg-transparent' to="https://www.instagram.com/nuvie_drywall_enterprise/"><img className='ml-6 md:h-[4vh] w-[6vw] md:w-[4vw] h-[7vh]' src={instagram} alt=""></img></Link>
       <Link className='bg-transparent' to="https://www.facebook.com/erinmopossibiltymountain/?_rdc=2&_rdr"><img className='ml-6 md:h-[4vh] w-[6vw] md:w-[4vw] h-[7vh]' src={Facebook} alt=""></img></Link>
       
         </div>   <div><span className='text-xl mr-[7px]  font-black'>&copy;</span>2023 Mountain of Possibility. All rights reserved.</div> 
        </div>
        </div>
        <div className="w-full bg-[black]">
        <div className="md:w-1/2 w-3/5 h-[10vh] items-center flex m-auto justify-center md:gap-5 gap-2">
          <img className='md:h-[8vh] md:w-[7vw]' src="https://cachouseofpraise.org/wp-content/uploads/2013/09/CAC-Logo.png" alt="" />
          <img className='md:h-[8vh] md:w-[7vw]' src={koseuntiLogo} alt="" />
           </div>
        </div>
        </div>
  )
}

export default Footer