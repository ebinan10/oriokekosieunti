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


      const [menuBtn, setMenuBtn] = useState(cancel)
      const [bgNavlink, setBgNavlink  ] = useState(`md:w-[20%] none h-[6vh] flex 
       text-[white] items-center  `)
       const [activeLink, setActive  ] = useState(`md:w-[20%] none h-[6vh] flex bg-[white]
       text-[black] rounded-md bg-opacity-40 items-center `)
       const [sgNavlink, setSgNavlink  ] = useState(`w-full md:hidden bg-opacity-20 h-[6vh] text-[orange] flex justify-center 
       items-center text-center z-100 items-center bg-[#ccc] rounded-lg`)
       const [gNavlink, setGNavlink  ] = useState(`w-full md:hidden  h-[6vh] text-[white] flex justify-center 
       items-center text-center items-center rounded-md`)

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
    <div className='w-full md:fixed top-0 md:min-h-[10vh] z-100 md:mb-[20vh] bg-[black] 
    md:bg-opacity-40 bg-opacity-80 max-h-[26vh] flex justify-end md:flex-row flex-col items-end'>
       <section className=" md:hidden md:w-0  h-[6vh] mt-0 flex justify-end items-center mx-auto my-auto w-full" 
       id='top-nav'>

    <input id="menu-toggle" type="checkbox" className='h-full md:hidden'/>
    <label className='menu-button-container md:hidden w-1/5  ml-auto' for="menu-toggle">
    <div class='menu-button md:hidden'></div>
    </label>
  
   <ul className='z-100 menu md:hidden w-1/2 flex justify-end items-end text-sm'>
              {/* <div className="w-1/2"> */}
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
              <NavLink className={pathname ==='/expectation'? gNavlink:sgNavlink} to="/expectation">
              <h1 className=' w-full md:w-0 md:none md:h-0'> Expectation</h1>
                </NavLink>
              </li>
              <li>
              <NavLink className={pathname ==='/service'? gNavlink:sgNavlink} to="/testimony" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Testimony</h1>
                </NavLink>
              </li>
              <li>
              <NavLink className={pathname ==='/give'? gNavlink:sgNavlink} to="/give" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Give</h1>
                </NavLink>
              </li>
              <li>
              <NavLink className={pathname ==='/program'? gNavlink:sgNavlink} to="/program" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Programs</h1>
                </NavLink>
              </li>
              <li>
                <NavLink className={pathname ==='/gallary'? gNavlink:sgNavlink} to="/gallary" >
               <h1 className=' w-full '> Gallary</h1>
                </NavLink>
              </li>
              {/* </div> */}
   </ul>
  </section>
  
        
        <div className="md:min-w-[60%] z-0 w-full md:mb-0  relative h-full md:gap-0 gap-2 flex flex-col justify-evenly">
          
          <div className="md:w-full h-[11vh]  hidden md:flex items-center  justify-center">
          <div className="w-[110px] h-[60px] mr-8  bg-[black] rounded-full flex justify-center items-center ">
              <img src={koseuntiLogo} className='w-[70px] h-[40px] transparent bg-opacity-40' alt="" />
              </div>
            <div className=" md:w-full text-sm h-full flex justify-center items-center"> 
              
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
              <NavLink className={pathname ==='/expectation'? activeLink:bgNavlink} to="/expectation">
              <h1 className='ml-[3vw] w-full '> Expectation</h1>
                </NavLink>
              <NavLink className={pathname ==='/testimony'? activeLink:bgNavlink} to="/testimony" >
              <h1 className=' w-full '> Testimony</h1>
              </NavLink>
              <NavLink className={pathname ==='/give'? activeLink:bgNavlink} to="/give" >
              <h1 className=' w-full '>Give</h1>
              </NavLink>
              <NavLink className={pathname ==='/program'? activeLink:bgNavlink} to="/program" >
              <h1 className=' w-full '> Programs</h1>
              </NavLink>
              <NavLink className={pathname ==='/gallary'? activeLink:bgNavlink} to="/gallary" >
               <h1 className=' w-full '> Gallary</h1>
                </NavLink>

            </div>
            
          </div>
        </div>
    </div></>
  )
}

export default Nav 