import React from 'react'
import { Data } from './Data'

const Service = () => {
  return (
    <div className='w-full '>
      <div className="w-full h-[2vh] bg-[#ccc] mx-auto"></div>
       <div className='w-full  flex justify-center h-full bg-base-100 items-center'>
          <div className="w-full h-full max-w-[1024px] flex  justify-center items-center">
            <div className="w-full h-full my-6 pb-6 gap-2 flex flex-wrap justify-evenly items-center">
               { Data.map((data,i )=>(
               <div
               key={i}
               className="md:w-[30%] md:h-[40vh] bg-[#ccc]  w-4/5 h-[30vh] md:m-0 m-4 flex justify-evenly flex-col items-center md:mt-5 md:mb-0 h-full rounded"
             >
              <div className="w-full h-[30vh] flex m-auto justify-center items-center">
               <img
                      src={data.img}
                      alt="event"
                      className="md:w-[17vw]  my-auto w-[90%] max-h-[25vh]  md:h-[22vh] "
                    /></div>
               <div
                 className="flex md:w-[22vw] w-full m-auto  md:h-[14vh] 
                  h-[10vh] items-center justify-center text-xs  gap-3 rounded-b-lg "
                > 
                 
                 <div className="w-full h-[full] flex flex-col justify-center items-center text-xs ">
                   <p className="w-3/4 h-full font-bold text-[#8c92a9] md:text-lg text-md">{data.title}</p>
                 </div>
               </div>
             </div>
               ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service