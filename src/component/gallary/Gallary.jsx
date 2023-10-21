import React from 'react'
import { Data } from './Data'

const Gallary = () => {
  return (
    <div>
      <div className="w-full h-[2vh] bg-[#ccc] mx-auto"></div>
      <div className="w-full h-min-content mx-auto"></div>
        <div className='w-full bg-[#ccc] flex justify-center h-full  items-center'>
          <div className="w-full  h-full max-w-[1024px] flex  justify-center items-center">
            <div className="w-full h-full  my-6 pb-6 gap-2 flex flex-wrap justify-evenly items-center">
               {/* { Data.map((data, i )=>(
               <div
               key={i}
               className="md:w-[40%] md:h-[40vh] bg-[#8c92a9] w-4/5 h-[30vh] md:m-0 m-4 flex
                justify-evenly flex-col items-center md:mt-5 md:mb-0 h-full rounded"
             >
              <div className="w-full h-full flex m-auto justify-center items-center">
               <img
                      src={data.img}
                      alt="event"
                      className="md:w-full  my-auto w-full h-full  md:h-full "
                    /></div>
               
             </div>
               ))} */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallary