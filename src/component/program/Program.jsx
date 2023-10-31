import React from 'react'
import { Data } from './Data'
import priase from '../images/praiseSession.jpeg'

const Program = () => {
  return (
    <div className='w-full mb-0'>
      <div className="w-full  bg-[#ccc] mx-auto"></div>
       <div className='w-full min-h-[35vh] flex flex-col justify-center h-full bg-base-100 items-center'>
        <div className="w-full h-[45vh] md:h-[80vh] shadow-xl" style={{
            backgroundImage: `url(${priase})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          </div>
        <div className="w-full bg-[black] flex flex-col justify-center items-center">
       <div className=" w-[80%] flex flex-col justify-center items-center my-6 gap-1 " >
       <p className='text-justify text-base-100 md:text-2xl text-2xl font-bold mt-2'>  Daily Programs at Mountain:</p>
         <p className='text-[white]'> The Daily Programs in the mountain includes the following:
        </p><br />
         <parent className='text-justify text-base-100 md:text-xl text-xl'> 
           1. My Sorrow is over, Wednesday 9am - 12pm.
          <br />
         </parent> 
         <p className='text-justify text-base-100 md:text-xl text-xl'>
         2. Change my life for better, Friday 9am - 12pm.
           <br /></p>
        </div>
        <div className=" w-[80%] flex flex-col justify-center items-center my-6 gap-1 " >
       <p className='text-justify text-base-100 md:text-2xl text-2xl font-bold mt-2'>  Weekly Programs at Mountain:</p>
       <p className='text-[white]'> The Weekly Programs in the mountain includes the following:
        </p> <br />
         <p className='text-justify text-base-100 md:text-xl text-xl'> 
           1. Possibility Day, Every last Thursday 12pm.
          <br />
         </p> 
         <h1 className='text-justify text-base-100 md:text-xl text-xl'>
           2. Power House Encounter, Night Session  1pm - 6am.
           <br /></h1>
           <p className='text-justify text-base-100 md:text-xl text-xl'>
          3. Possibility Prophetic Night Session.
           <br /></p>
        </div>   
        <div className=" w-[80%] flex flex-col justify-center items-center my-6 gap-1 " >
       <p className='text-justify text-base-100 md:text-2xl text-2xl font-bold mt-2'>  Monthly Programs at Mountain:</p>
       <p className='text-[white]'> The Monthly Programs in the mountain includes the following:
        </p><br />
         <p className='text-justify text-base-100 md:text-xl text-lg'> 
           1. Anoint Me with the Power of Success, First Thursday in every Three Month 9am - 12pm.
          <br />
         </p> 
        </div> 
        <div className=" w-[80%] flex flex-col justify-center items-center my-6 gap-1 " >
       <p className='text-justify text-base-100 md:text-2xl text-2xl font-bold mt-2'>Ministries Renewal Summit:</p>
       <p className='text-[white]'> Renew my Power At Power House: </p>
        <br />
         <p className='text-justify text-base-100 md:text-xl text-xl'> 
           1. First Thursday of Every Month - 9am.
          <br />
          </p>
          <p className='text-justify text-base-100 md:text-xl text-xl'> 
          2. Every First Day of The Month - 10pm. 
          <br />
         </p> 
        </div>    
        </div>
          
        
      </div>
    </div>
  )
}

export default Program