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
      const [bglink, setBglink  ] = useState(`md:max-w-[20%] none h-[6vh] flex border-r-2 border-[white]
       text-[white] items-center bg-[#ccc] `)
      const [sglink, setSglink  ] = useState(`w-[100%] h-[6vh] text-[white] flex justify-center 
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
    <div className='w-full md:min-h-[25vh]  h-[24vh] flex justify-center md:flex-row flex-col items-center  '>
      <div className="md:w-0 md:h-0 w-full h-[7vh] cursor-pointer  flex justify-center items-center">
        <Link to="#" className='cursor-pointer' onClick={andleMenu}>
        <img src={menuBtn}  className='md:w-0 w-[8vw] absolute hover:cursor-pointer right-7
         mr-[3vh] top-8 h-[5vh] md:h-0' alt="" />
        </Link>
        </div>
        <div className="md:w-[20%] w-[0%] flex justify-center items-center">
          <img className='md:h-[22vh] h-0 w-0 md:w-[24vw]' src={companyLogo} alt="" />
          </div>
        <div className="md:min-w-[60%] w-full relative h-full md:gap-0 gap-2 flex flex-col justify-evenly">
          <div className="w-full flex md:flex-col flex-row md:items-end justify-evenly md:justify-end ">
          <div className="md:w-[0%] w-[40%] flex justify-center">
            <img className='h-[22vh] md:h-0 md:w-0 w-[20vw] ' src={companyLogo} alt="" />
          </div>
            <div className="xl:w-[25%] md:w-[40%] w-3/4 flex flex-col gap-2 justify-end">
          <div className="w-full flex items-center  ">
          <img className='' src={phoneLogo} alt="" />
          <div className="md:w-3/4 w-1/2 flex flex-col ">
            <h3 className='w-full text-lg font-bold flex justify-center items-center'>Call us now</h3>
            <h4 className='text-lg'>+2348135853802</h4>
          </div>
          </div>
          <div className="w-full flex ">
            <h4 className=' font-[italics] text-xl mb-2'>nuviedrywalls@gmail.com</h4>
            </div></div>
          </div>
          <div className="md:w-full  md:flex none items-end justify-center">
            
            <div className="w-full  h-full flex"> 
             
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

          <div className="md:w-0 md:none md:h-0 w-full 
          h-[60vh] z-100 absolute top-0 right-0 flex-col items-end justify-center">
            
            <div className=" w-full flex h-[60vh] md:w-0 md:none md:h-0  flex-col items-center justify-center"> 
              <div className="w-full md:w-0 md:none md:h-0"><img src="" alt="" /></div>
              <Link className={sglink} to="/">
              <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0 '>Home</h1>
              </Link>
             
              <Link className={sglink} to="/contact">
               <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> Contact</h1>
              </Link>
             
              <Link className={sglink} to="/about">
              <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> About</h1>
              </Link>
             
              <Link className={sglink} to="/product">
              <h1 className=' w-full md:w-0 md:none md:h-0'> Our Product</h1>
                </Link>
              
              <Link className={sglink} to="/services" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Our Service</h1>
                </Link>
              
            </div>
             
        </div>
        </div>
    </div>
  )
}

export default Nav 