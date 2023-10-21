import React, { useState } from 'react'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faContactCard, faHome, faPhone, 
  faQuestion, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import phoneLogo from '../icon/pngwing.com (1).png'
import koseuntiLogo from '../images/koseuntiLogo.jpg'
import amburger from '../icon/menu.png'
import cancel from '../icon/cancel.png'

const Nav = () => {

      const location = useLocation();
      const pathname  = location.pathname
      console.log(location);


      const [menuBtn, setMenuBtn] = useState(cancel)
      const [bgNavlink, setBgNavlink  ] = useState(`md:w-[20%] none h-[6vh] flex 
       text-[white] items-center  `)
       const [activeLink, setActive  ] = useState(`md:w-[20%] none h-[6vh] flex 
       text-[white] items-center `)
       const [sgNavlink, setSgNavlink  ] = useState(`w-full md:hidden bg-opacity-20 h-[6vh] text-[black] flex justify-center 
       items-center text-center z-100 items-center bg-[#ccc] `)
       const [gNavlink, setGNavlink  ] = useState(`w-full md:hidden  h-[6vh] text-[white] flex justify-center 
       items-center text-center items-center`)

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
    <>
    <div className='w-full md:fixed top-0 md:min-h-[10vh] z-100 md:mb-[20vh] bg-[black] bg-opacity-40 max-h-[26vh] flex justify-center md:flex-row flex-col items-center  '>
       <section className=" md:hidden md:w-0  h-[4vh] mt-4 flex justify-end items-center my-auto w-full" id='top-nav'>
    
    <input id="menu-toggle" type="checkbox" className='h-full md:hidden'/>
    <label className='menu-button-container md:hidden w-1/5  ml-auto' for="menu-toggle">
    <div class='menu-button md:hidden'></div>
  </label>  
   <ul className='z-100 menu md:hidden w-full m-auto mt-[5vh]  text-md'>
    <li className=' w-full h-[7vh] cursor-pointer'>
        <NavLink className={pathname ==='/'? gNavlink:sgNavlink} to="">
              <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0 '>Home</h1>
              </NavLink>
             </li>
             <li className='z-100 w-full h-[7vh] cursor-pointer'>
              <NavLink className={pathname ==='/contact'? gNavlink:sgNavlink} to="contact">
               <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> Contact</h1>
              </NavLink>
             </li>
             <li>
              <NavLink className={pathname ==='/about'? gNavlink:sgNavlink} to="/about">
              <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> About</h1>
              </NavLink>
              </li>
              <li>
              <NavLink className={pathname ==='/product'? gNavlink:sgNavlink} to="/product">
              <h1 className=' w-full md:w-0 md:none md:h-0'> Expectation</h1>
                </NavLink>
              </li>
              <li>
              <NavLink className={pathname ==='/service'? gNavlink:sgNavlink} to="/service" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Testimony</h1>
                </NavLink>
              </li>
              <li>
                <NavLink className={pathname ==='/gallary'? gNavlink:sgNavlink} to="/gallary" >
               <h1 className=' w-full '> Gallary</h1>
                </NavLink>
              </li>
   </ul>
  </section>
  
        
        <div className="md:min-w-[60%] z-0 w-full md:mb-0  relative h-full md:gap-0 gap-2 flex flex-col justify-evenly">
          
          <div className="md:w-full h-[11vh]  hidden md:flex items-center  justify-center">
          <div className="w-1/2 flex justify-start items-center ">
              <h1 className='text-[white] text-3xl'>Ori Oke Kosunti</h1>
              </div>
            <div className=" md:w-full  h-full flex justify-center items-center"> 
             
              <NavLink className={pathname =='/'? activeLink:bgNavlink} to="/">
              <h1 className='ml-[3vw] w-full '>Home</h1>
              <FontAwesomeIcon icon={faHome} className='w-1/2 h-3 mr-2'/>
              </NavLink>
             
              <NavLink className={pathname ==='/contact'? activeLink:bgNavlink} to="/contact">
               <h1 className='ml-[3vw] w-full '> Contact</h1>
              <FontAwesomeIcon icon={faPhone} className='w-1/2 h-3  mr-2'/>
              </NavLink>
             
              <NavLink className={pathname ==='/about'? activeLink:bgNavlink} to="/about">
              <h1 className='ml-[3vw] w-full '> About</h1>
              <FontAwesomeIcon icon={faQuestion}  className='w-1/2 h-3 mr-2'/>
              </NavLink>
              <NavLink className={pathname ==='/product'? activeLink:bgNavlink} to="/product">
              <h1 className='ml-[3vw] w-full '> Expectation</h1>
                </NavLink>
              <NavLink className={pathname ==='/service'? activeLink:bgNavlink} to="/service" >
              <h1 className=' w-full '> Testimony</h1>
              </NavLink>
              
                <NavLink className={pathname ==='/gallary'? activeLink:bgNavlink} to="/gallary" >
               <h1 className=' w-full '> Gallary</h1>
                </NavLink>

            </div>
            <div className="w-1/4 mr-[5vw] flex justify-end items-center ">
              <img src={koseuntiLogo} className='w-1/2 h-[9vh] transparent bg-opacity-40' alt="" />
              </div>
          </div>
        </div>
    </div></>
  )
}

export default Nav 