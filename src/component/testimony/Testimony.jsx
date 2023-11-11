import React from 'react'
import {Data} from './Data'
const Testimony = () => {
  return (
    <div>
     <div className="w-full mx-auto"></div>
        <div className='w-full flex justify-center h-full bg-base-100 items-center'>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full md:h-[70vh] h-[45vh]"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8913526224424!2d4.867254491865328!3d7.636812280619829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b7ff26eda99%3A0x9ae7a63c09815528!2sMountain%20Of%20Possibilities!5e1!3m2!1sen!2sng!4v1696585156175!5m2!1sen!2sng"    
                width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" 
                className='flex h-full justify-center items-center text-[white]'>
                </iframe> 
            </div> 
            <div className="w-full min-h-[50vh] pb-6 bg-[black] gap-2 flex flex-wrap justify-evenly items-center">
                  { Data.map((data, i )=>(
                  <div
                  key={i}
                  className="md:w-full md:max-h-[40vh] w-full   w-squared   md:m-0 m-4 flex
                    justify-evenly flex-col items-center md:mt-5 md:mb-0 h-full rounded"
                >
                  <div className="w-[90%] mt-4 h-full flex flex-col bg-[white] m-auto h-[40vh] md:h-[100vh] justify-center items-center">
                  <p className="md:w-[95%] md:pb-[5vh] pt-5 text-[black] text-xl md:text-xl my-auto w-[90%]  rounded-lg  "
                        >{data.testimony}<h1 className="md:w-full  text-[black] text-xl md:text-2xl my-auto w-[90%] h-[5vh] rounded-lg md:h-[7vh] ">
                            {data.testifier}
                        </h1></p>
                   </div>
                </div>
                  ))}
                </div> 
      </div>
    </div></div>
  )
}

export default Testimony