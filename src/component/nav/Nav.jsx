import React, { useState } from 'react'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faContactCard, faHome, faPhone, 
  faQuestion, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import companyLogo from '../images/companyLogo.jpg'
import phoneLogo from '../icon/pngwing.com (1).png'
import amburger from '../icon/menu.png'
import cancel from '../icon/cancel.png'

const Nav = () => {

      const location = useLocation();
      const pathname  = location.pathname


      const [menuBtn, setMenuBtn] = useState(cancel)
      const [bgNavlink, setBgNavlink  ] = useState(`md:w-[20%] none h-[6vh] flex border-r-2 border-[white]
       text-[white] items-center bg-[#ccc] `)
       const [activeLink, setActive  ] = useState(`md:w-[20%] none h-[6vh] flex border-r-2 border-[white]
       text-[white] items-center bg-[#8c92a9] `)
      const [sgNavlink, setSgNavlink  ] = useState(`w-full md:hidden bg-opacity-20 h-[6vh] text-[black] flex justify-center 
      items-center text-center z-100 items-center bg-[#ccc] `)
      const [gNavlink, setGNavlink  ] = useState(`w-full md:hidden  h-[6vh] text-[white] flex justify-center 
      items-center text-center  items-center  `)

     const andleMenu = () =>{
      console.log('object');
        if(menuBtn===amburger){
          setMenuBtn(cancel)  

        }
        else{
          setMenuBtn(amburger)
        }
     }

  return (<>
    <div className='w-full md:min-h-[25vh]  max-h-[26vh] flex justify-center md:flex-row flex-col items-center  '>
       <section className=" md:hidden md:w-0  h-[4vh] mt-4 flex justify-end items-center my-auto w-full" id='top-nav'>
    
    <input id="menu-toggle" type="checkbox" className='h-full md:hidden'/>
    <label className='menu-button-container md:hidden w-1/5  ml-auto' for="menu-toggle">
    <div class='menu-button md:hidden'></div>
  </label>
   <ul className='menu md:hidden w-full m-auto mt-[21vh] bg-[#8c92a9] bg-opacity-60 text-md'>
    <li className='z-100 w-full h-[7vh] cursor-pointer '>
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
              <h1 className=' w-full md:w-0 md:none md:h-0'> Our Product</h1>
                </NavLink>
              </li>
              <li>
              <NavLink className={pathname ==='/service'? gNavlink:sgNavlink} to="/service" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Our Service</h1>
                </NavLink>
              </li>
              <li>
                <NavLink className={pathname ==='/gallary'? gNavlink:sgNavlink} to="/gallary" >
               <h1 className=' w-full '> Gallery</h1>
                </NavLink>
              </li>
   </ul>
  </section>

        <div className="md:w-[20%] z-0 w-[0%] flex justify-center items-center">
          <img className='md:h-[22vh] h-0 w-0 md:w-[24vw]' src={companyLogo} alt="" />
          </div>
        <div className="md:min-w-[60%] z-0 w-full md:mb-0  relative h-full md:gap-0 gap-2 flex flex-col justify-evenly">
          <div className="w-full flex z-0 md:flex-col flex-row md:items-end justify-evenly md:justify-end ">
          <div className="md:w-[0%] z-0  w-[40%] flex justify-center">
            <img className='h-[15vh] z-0 md:h-0 md:w-0 mb-3 w-[20vw] ' src={companyLogo} alt="" />
          </div>
            <div className="xl:w-[25%] z-0 md:w-[40%] md:mb-0 mb-3 w-3/4 flex flex-col gap-2 justify-end">
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
             
              <NavLink className={pathname ==='/'? activeLink:bgNavlink} to="/">
              <h1 className='ml-[3vw] w-full '>Home</h1>
              <FontAwesomeIcon icon={faHome} className='w-1/4 h-3 mr-9'/>
              </NavLink>
             
              <NavLink className={pathname ==='/contact'? activeLink:bgNavlink} to="/contact">
               <h1 className='ml-[3vw] w-full '> Contact</h1>
              <FontAwesomeIcon icon={faPhone} className='w-1/4 h-3 mr-9'/>
              </NavLink>
             
              <NavLink className={pathname ==='/about'? activeLink:bgNavlink} to="/about">
              <h1 className='ml-[3vw] w-full '> About</h1>
              <FontAwesomeIcon icon={faQuestion}  className='w-1/4 h-3 mr-9'/>
              </NavLink>
               
              <NavLink className={pathname ==='/product'? activeLink:bgNavlink} to="/product">
              <h1 className=' w-full '> Our Product</h1>
                </NavLink>
              
              <NavLink className={pathname ==='/service'? activeLink:bgNavlink} to="/service">
              <h1 className=' w-full '> Our Service</h1>
              </NavLink>
              
                <NavLink className={pathname ==='/gallary'? activeLink:bgNavlink} to="/gallary">
               <h1 className=' w-full '> Gallery</h1>
                </NavLink>

            </div></div>
          
        </div>
    </div><div className="h-[4vh] flex justify-center items-center"><marquee class="css" behavior="scroll" direction="left"> 
    Nuvie Drywall & Installation Enterprise was founded in early 2023. As a registered installers of 
    drywall partition and ceiling materials, we do installation of top quality products for residential
     and commercial buildings. We stock most various sizes of drywall and ceiling materials that would
      be needed in the residential or commercial applications, wall angles, omega channels, gypsum boards,
       metal ceiling, plaster compounds, adhesive, fasten and fixings. NDWEI has a fully trained and 
       experienced team of operatives that are capable of executing turn-key jobs, from interior design
        to finishing of ceiling and drywall partition.We are familiar with all options that are currently
         available, but if there is nothing off the shelf that suits your need, we can work with our 
         suppliers to develop a bespoke solution. We win contracts based on the quality of our work, 
         our customer focused approach, correct specification compliance, and our competitive prices. 
         By going the extra mile, our honesty and hard work always prevail. Wouldn't you rather contact
          us today let's talk business.
      </marquee> </div></>
  )
}

export default Nav 