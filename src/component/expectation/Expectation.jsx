import React from 'react'
import { Data } from './Data'
import priase from '../images/praiseSession.jpeg'
const Expectation = () => {
  return (
    <div>
      <div className="w-full h-[40vh] md:h-[85vh] bg-[black] bg-blend-[lighten] mx-auto"
      style={{
        backgroundImage:`url(${priase})`
      }}
      ></div>
      <div className="w-full h-min-content mx-auto"></div>
        <div className='w-full flex justify-center h-full bg-[black] items-center'>
          <div className="w-full h-[27vh] md:h-[0vh] md:mt-[-80vh] max-w-[1024px] flex  justify-center items-center">
               <h1 className='md:text-[black] text-[white] text-lg md:text-xl'>
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