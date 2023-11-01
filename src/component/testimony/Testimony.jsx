import React from 'react'
import {Data} from './Data'
const Testimony = () => {
  return (
    <div>
     <div className="w-full h-min-content mx-auto"></div>
        <div className='w-full flex justify-center h-full bg-base-100 items-center'>
          <div className="w-full h-full max-w-[1024px] flex flex-col justify-center items-center">
            <div className="w-full md:h-[60vh] h-[45vh]"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8913526224424!2d4.867254491865328!3d7.636812280619829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b7ff26eda99%3A0x9ae7a63c09815528!2sMountain%20Of%20Possibilities!5e1!3m2!1sen!2sng!4v1696585156175!5m2!1sen!2sng"    
                width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" 
                className='flex h-full justify-center items-center text-[white]'>
                    <h1>Contact US</h1>
                </iframe> 
            </div> 
            <div className="w-full h-full  my-6 pb-6 gap-2 flex flex-wrap justify-evenly items-center">
                  { Data.map((data, i )=>(
                  <div
                  key={i}
                  className="md:w-1/4 md:max-h-[40vh] w-full  w-squared   md:m-0 m-4 flex
                    justify-evenly flex-col items-center md:mt-5 md:mb-0 h-full rounded"
                >
                  <div className="w-full h-full flex m-auto justify-center items-center">
                  <img
                          src={data.img}
                          alt="event"
                          className="md:w-full md:pb-[5vh] my-auto w-[90%] h-[30vh] rounded-lg md:h-[40vh] "
                        /></div>
                  
                </div>
                  ))}
                </div> 
      </div>
    </div></div>
  )
}

export default Testimony