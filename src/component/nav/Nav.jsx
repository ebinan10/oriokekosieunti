import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faContactCard, faHome, faPhone, 
  faQuestion, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import companyLogo from '../images/companyLogo.jpg'
import phoneLogo from '../icon/pngwing.com (1).png'
import amburger from '../icon/menu.png'

const Nav = () => {

      const [bglink, setBglink  ] = useState('max-w-[20%]  h-[6vh] flex border-r-2 border-[white]  text-[white] items-center bg-[#ccc] ')

  return (
    <div className='w-full md:min-h-[25vh] relative h-[30vh] flex justify-center md:flex-row flex-col items-center  '>
      <div className="md:w-0 md:h-0 w-full h-[7vh]  flex justify-center items-center">
      {/* <FontAwesomeIcon icon={faHan} className='w-1/4 h-3 mr-9'/> */}
              
        <img src={amburger} className='md:w-0 w-[8vw] absolute right-4 top-3 h-[5vh] md:h-0' alt="" /></div>
        <div className="md:w-[20%] w-[0%]">
          <img className='md:h-[22vh] h-0 w-0 md:w-[24vw]' src={companyLogo} alt="" />
          </div>
        <div className="md:min-w-[60%] w-full  h-full flex flex-col justify-evenly">
          <div className="w-full flex md:flex-col flex-row items-end justify-end ">
          <div className="md:w-[0%] w-[25%] flex justify-center">
            <img className='h-[22vh] md:h-0 md:w-0 w-[20vw]' src={companyLogo} alt="" />
          </div>
            <div className="xl:w-[25%] md:w-[40%] w-3/4 flex flex-col gap-2 justify-end">
          <div className="w-full flex items-center  ">
          <img className='' src={phoneLogo} alt="" />
          <div className="w-3/4 flex flex-col ">
            <h3 className='w-full text-md font-bold flex justify-center items-center'>Call us now</h3>
            <h4>+2348135853802</h4>
          </div>
          </div>
          <div className="w-full flex ">
            <h4 className=' font-[italics] text-lg'>nuviedrywalls@gmail.com</h4>
            </div></div>
          </div>
          <div className="md:w-full w-0 flex items-end justify-center">
            
            <div className="w-full  h-full flex"> 
             
              <Link className={bglink} to="/">
              <h1 className='ml-[3vw] w-full '>Home</h1>
              <FontAwesomeIcon icon={faHome} className='w-1/4 h-3 mr-9'/>
              </Link>
             
              <Link className={bglink} to="/contact">
               <h1 className='ml-[3vw] w-full '> Contact</h1>
              <FontAwesomeIcon icon={faPhone} className='w-3 h-3 mr-[7vw]'/>
              </Link>
             
              <Link className={bglink} to="/about">
              <h1 className='ml-[3vw] w-full '> About</h1>
              <FontAwesomeIcon icon={faQuestion}  className='w-3  h-3 mr-[7vw]'/>
              </Link>
             
              <Link className={bglink} to="/product">
              <h1 className=' w-full '> Our Product</h1>
                </Link>
              
             
              <Link className={bglink} to="/services" >
               <h1 className=' w-full '> Our Service</h1>
                </Link>
              
            </div>
             
        </div>
        </div>
    </div>
  )
}

export default Nav 