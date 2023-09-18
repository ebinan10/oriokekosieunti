import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faContactCard, faHome, faPhone, 
  faQuestion, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import companyLogo from '../images/companyLogo.jpg'
import phoneLogo from '../icon/pngwing.com (1).png'
import amburger from '../icon/menu.png'
import cancel from '../icon/cancel.png'

const Nav = () => {
      const [menuBtn, setMenuBtn] = useState(cancel)
      const [bglink, setBglink  ] = useState(`md:w-[20%] none h-[6vh] flex border-r-2 border-[white]
       text-[white] items-center bg-[#ccc] `)
      const [sglink, setSglink  ] = useState(`w-full md:hidden h-[6vh] text-[white] flex justify-center 
      items-center text-center z-100 items-center bg-[#ccc] `)

     const andleMenu = () =>{
      console.log('object');
        if(menuBtn===amburger){
          setMenuBtn(cancel)

        }
        else{
          setMenuBtn(amburger)
        }
     }

  return (
    <div className='w-full md:min-h-[25vh] relative max-h-[26vh] flex justify-center md:flex-row flex-col items-center  '>
       <section className=" md:hidden md:w-0  h-[4vh] mt-4 flex justify-end items-center my-auto w-full" id='top-nav'>
    
    <input id="menu-toggle" type="checkbox" className='h-full md:hidden'/>
    <label className='menu-button-container md:hidden w-1/5  ml-auto' for="menu-toggle">
    <div class='menu-button md:hidden'></div>
  </label>
   <ul className='menu md:hidden w-full mt-[27vh] text-md'>
    <li className='z-100  h-[7vh] cursor-pointer'>
   <Link className={sglink} to="/">
              <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0 '>Home</h1>
              </Link>
             </li>
             <li>
              <Link className={sglink} to="/contact">
               <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> Contact</h1>
              </Link>
             </li>
             <li>
              <Link className={sglink} to="/about">
              <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> About</h1>
              </Link>
              </li>
              <li>
              <Link className={sglink} to="/product">
              <h1 className=' w-full md:w-0 md:none md:h-0'> Our Product</h1>
                </Link>
              </li>
              <li>
              <Link className={sglink} to="/service" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Our Service</h1>
                </Link>
              </li>
              <li>
                <Link className={sglink} to="/gallary" >
               <h1 className=' w-full '> Gallary</h1>
                </Link>
              </li>
   </ul>
  </section>

        <div className="md:w-[20%] z-0 w-[0%] flex justify-center items-center">
          <img className='md:h-[22vh] h-0 w-0 md:w-[24vw]' src={companyLogo} alt="" />
          </div>
        <div className="md:min-w-[60%] z-0 w-full relative h-full md:gap-0 gap-2 flex flex-col justify-evenly">
          <div className="w-full flex z-0 md:flex-col flex-row md:items-end justify-evenly md:justify-end ">
          <div className="md:w-[0%] z-0 w-[40%] flex justify-center">
            <img className='h-[15vh] z-0 md:h-0 md:w-0 w-[20vw] ' src={companyLogo} alt="" />
          </div>
            <div className="xl:w-[25%] z-0 md:w-[40%] w-3/4 flex flex-col gap-2 justify-end">
          <div className="w-full z-0 flex items-center  ">
          <img className='z-0' src={phoneLogo} alt="" />
          <div className="md:w-3/4 z-0 w-1/2 flex flex-col ">
            <h3 className='w-full z-0 text-lg font-bold flex justify-center items-center'>Call us now</h3>
            <h4 className='text-lg z-0'>+2348135853802</h4>
          </div>
          </div>
          <div className="w-full flex ">
            <h4 className=' font-[italics] text-xl mb-2'>nuviedrywalls@gmail.com</h4>
            </div></div>
          </div>
          <div className="md:w-full hidden md:flex   justify-center">
            
            <div className="min-w-full  h-full flex"> 
             
              <Link className={bglink} to="/">
              <h1 className='ml-[3vw] w-full '>Home</h1>
              <FontAwesomeIcon icon={faHome} className='w-1/4 h-3 mr-9'/>
              </Link>
             
              <Link className={bglink} to="/contact">
               <h1 className='ml-[3vw] w-full '> Contact</h1>
              <FontAwesomeIcon icon={faPhone} className='w-1/4 h-3 mr-9'/>
              </Link>
             
              <Link className={bglink} to="/about">
              <h1 className='ml-[3vw] w-full '> About</h1>
              <FontAwesomeIcon icon={faQuestion}  className='w-1/4 h-3 mr-9'/>
              </Link>
               
              <Link className={bglink} to="/product">
              <h1 className=' w-full '> Our Product</h1>
                </Link>
              
              <Link className={bglink} to="/service" >
              <h1 className=' w-full '> Our Service</h1>
              </Link>
              
                <Link className={bglink} to="/gallary" >
               <h1 className=' w-full '> Gallary</h1>
                </Link>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav 