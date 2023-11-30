import React from 'react'
import { Data } from './Data'

const Founder = () => {
  return (
    <div className='bg-[black] min-h-[10vh] md:min-h-[50vh]'>
        <div className="w-full h-full bg-[black]">
            <div className="w-full md:h-[60vh] h-[45vh]"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8913526224424!2d4.867254491865328!3d7.636812280619829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b7ff26eda99%3A0x9ae7a63c09815528!2sMountain%20Of%20Possibilities!5e1!3m2!1sen!2sng!4v1696585156175!5m2!1sen!2sng"    
                width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" className='flex h-full justify-center items-center text-[white]'><h1>Contact US</h1></iframe>
            </div>
            <div className="w-full flex justify-center items-center bg-[black] md:h-[25vh] h-[16vh]">
               <h1 className='text-sm md:h-1/2 h-full md:pb-0 pt-[4vh] text-justify w-4/5 md:w-[88%] md:text-md text-[white]'> 
                The founder Evangelist Prophet Abraham Olubiyo Ojo is a seasoned Minister 
                of God that Loves Jesus and passionate to see men saved and come into the 
                fullness of what God has for them, his simplicity towards other shows his love
                 for men, foundly called Baba-OriOke has been a major blessing to his family, 
                 the church in Nigeria, Erinmo community as a whole and both states of Osun 
                 and Ekiti respectively. </h1>  
            </div>
        <div className="w-full md:mt-0 mt-[3vh] h-full bg-[black] pb-6 gap-2 flex flex-wrap justify-evenly items-center">
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
                      className="md:w-full md:pb-[5vh] my-auto w-[90%] h-[35vh] rounded-lg md:h-[40vh] "
                    /></div>
               
             </div>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Founder