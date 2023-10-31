import React from 'react'
import { Data } from './Data'
import logo from '../images/koseuntiLogo.jpg'

const Gallary = () => {
  return (
    <div>
      <div className="w-full h-min-content mx-auto"></div>
        <div className='w-full bg-[black] flex justify-center h-full  items-center'>
          <div className="w-full  h-full max-w-[1024px] flex  flex-col justify-center items-center">
            <div className="w-4/5 m-auto mt-[10vh] md:mt-[20vh]">
              <img src={logo} alt="" className='w-full h-[25vh] mt-[3vh] md:w-[40vw] md:h-[40vh]' />
              <h1 className="text-justify text-[#ccc] text-lg md:text-xl mt-[4vh]">
                As a commision we have captured beautiful moment in which you can see us as an entity that is to be recond with, 
                how God has used us, his servant "Prophet Evang Abraham Olubiyo Ojo" to be a blessing to multitudes and nations.
              </h1>
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
      </div>
    </div>
  )
}

export default Gallary