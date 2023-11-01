import React from 'react'
import { Data } from './Data'
import priase from '../images/praiseSession.jpeg'
import logo from '../images/koseuntiLogo.jpg'
const Expectation = () => {
  return (
    <div>
        <div className="w-full md:h-[60vh] h-[45vh]"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8913526224424!2d4.867254491865328!3d7.636812280619829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b7ff26eda99%3A0x9ae7a63c09815528!2sMountain%20Of%20Possibilities!5e1!3m2!1sen!2sng!4v1696585156175!5m2!1sen!2sng"    
                width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" className='flex h-full justify-center items-center text-[white]'><h1>Contact US</h1></iframe>
            </div>
      
        <div className='w-full flex flex-col md:flex-row justify-center h-full bg-[black] items-center'>
          <div className="w-full flex flex-col gap-2 mt-[5vh] justify-center items-center">
        <h1 className='text-[white]'>EXPECTATION</h1>
        <img src={logo} alt="" className='w-1/2 h-[25vh] mt-[3vh] md:w-[40vw] md:h-[40vh]' />
          </div>
          <div className="w-full h-[27vh] md:h-[50vh] bg-[black] max-w-[1024px] flex  justify-center items-center">
               <h1 className=' text-[white] text-lg md:text-xl text-justify'>
                  What are you believing the Lord for, <br /> is it Fruit of the womb ? <br />
                  Marriage ? <br /> Job ? <br /> Business Breakthrough ? <br /> Healing? <br />
                  whatever the challenge is just know that <br />
                   We await your arrival, <br />
                   as your prayers will be answered!!!!
               </h1>
        </div>
      </div>
    </div>
  )
}

export default Expectation