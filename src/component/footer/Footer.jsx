import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Twitter from './twitter (1).svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
// import { Link } from 'react-router-dom'
import  { useState } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center m-auto '>
      <div className="w-full pr-[7vw] bg-[#ccc] w-full flex flex justify-center items-center">
        <div className="w-3/5  text-[black] flex justify-evenly">
          <div className='mt-[50px] flex flex-col'>
            <h3 className='m-[20px] text-lg font-bold'>Quick Links</h3>
            <Link  to="/contact" className='h-[6vh] m-[4px]  bg-transparent'> Contact</Link>
            <Link to="/" className='h-[6vh] m-[3px] bg-transparent'>Home</Link>
            <Link to="/" className='h-[6vh] m-[3px] bg-transparent'>Contact</Link>
            <Link to="/" className='h-[6vh] m-[3px] bg-transparent'>About</Link>
            <Link to="/" className='h-[6vh] m-[3px] bg-transparent'>Our Product</Link>
            <Link to="/" className='h-[6vh] m-[3px] bg-transparent'>Our Services</Link>
        </div> 
        
        <div className='mt-[50px] '>
          <h3 className='m-[20px] text-lg font-bold'>Product Category</h3>
          <li className='m-[20px]'>first</li>
          <li className='m-[20px]'>second</li>
          <li className='m-[20px]'>third</li>
        </div>
        <div className='mt-[50px] '>
        <h3 className='m-[20px] text-lg font-bold'>Content</h3>
          <li className='m-[20px]'>Email Address</li>
          <li className='m-[20px]'>Phone Number</li>
          <li className='m-[20px]'>Physical Address</li>
          <li className='m-[20px]'>Content Page</li>
        </div>
        </div>
        <div className="w-1/4  h-[90px] flex flex-col gap-5 justify-center items-center bg-transparent">
        <div className="w-full flex justify-center items-center "><a  className='bg-transparent' href="www.twitter.com/ebinan10"><img className='ml-6 w-[3vw] h-[4vh]' src={Twitter} alt="" to></img></a>
        <a className='bg-transparent' href="www.facebook.com/ebinan10"><img className='ml-6 w-[3vw] h-[4vh]' src={Facebook} alt="" ></img></a>
        <a className='bg-transparent' href="www.youtube.com/ebinan10"><img className='ml-6 w-[3vw] h-[4vh]' src={Youtube} alt="" ></img></a>
        <a className='bg-transparent' href="www.linkedin.com/ebinan10"><img className='ml-6 w-[3vw] h-[4vh]' src={Linkedin} alt=""></img></a>
         </div>   <div><span className='text-xl mr-[7px] font-black'>&copy;</span>2023 Nuvie Dry Walls. All rights reserved.</div> 
        </div>
        </div>
        <div className="w-1/2 h-[10vh] items-center flex m-auto justify-center gap-5 ">
          <img className='h-[8vh] w-[7vw]' src="https://static.wixstatic.com/media/80b77e_f1aa6cb82957404aa2ca5b96ca9753f3~mv2.jpg/v1/fill/w_69,h_41,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80b77e_f1aa6cb82957404aa2ca5b96ca9753f3~mv2.jpg" alt="" />
          <img className='h-[8vh] w-[7vw]' src="https://static.wixstatic.com/media/80b77e_db545c5db7544ebfa0090999e4efd590~mv2.png/v1/fill/w_93,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/80b77e_db545c5db7544ebfa0090999e4efd590~mv2.png" alt="" />
          <img className='h-[8vh] w-[7vw]' src="https://static.wixstatic.com/media/80b77e_5092a0e36230457ab8b112b4f3b43826~mv2.jpg/v1/fill/w_96,h_41,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80b77e_5092a0e36230457ab8b112b4f3b43826~mv2.jpg" alt="" />
          <img className='h-[8vh] w-[7vw]' src="https://static.wixstatic.com/media/80b77e_33d64fdf194d4d8b8f7b42d0acf53c65~mv2.png/v1/fill/w_98,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/80b77e_33d64fdf194d4d8b8f7b42d0acf53c65~mv2.png" alt="" />
          <img className='h-[8vh] w-[7vw]' src="https://static.wixstatic.com/media/80b77e_1c70260bb61b419fb772cf1ec1fac78c~mv2.png/v1/fill/w_99,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/80b77e_1c70260bb61b419fb772cf1ec1fac78c~mv2.png" alt="" />
          <img className='h-[8vh] w-[7vw]' src="https://static.wixstatic.com/media/80b77e_1f2b299d46444a348665c6912a2382b8~mv2.jpg/v1/fill/w_99,h_49,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80b77e_1f2b299d46444a348665c6912a2382b8~mv2.jpg" alt="" />
        </div>
        </div>
  )
}

export default Footer