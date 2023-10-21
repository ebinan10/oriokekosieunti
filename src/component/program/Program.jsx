import React from 'react'
import { Data } from './Data'

const Program = () => {
  return (
    <div className='w-full '>
      <div className="w-full h-[2vh] bg-[#ccc] mx-auto"></div>
       <div className='w-full flex flex-col justify-center h-full bg-base-100 items-center'>
        <div className="w-full bg-[#8c92a9] flex flex-col justify-center items-center">
       <div className=" w-[80%] flex flex-col justify-center items-center my-[6vh] gap-3 " >
       <p className='text-justify text-base-100 md:text-2xl text-2xl font-bold mt-4'> At Nuvie dry Wall and Installations, we offer Programs not limited to the following </p> <br />
         <h1 className='text-justify text-base-100 md:text-xl text-lg'> 1. Ceiling Installation : For your different kinds of ceiling applications, including but not limited to Plasterboard,
           Insitu POP Ceiling, or the Acoustic T-Grid Systems.
          These are fast and lightweight materials and metal frame construction that can be utilized in different
           areas of a building by using a range of different tiles including metal and mineral fibre which come in 
           many different finishes and colors. Specialist tiles and plasterboard can 
          increase fire resistance, enhance sound absorption and even be used in areas of high humidity. <br />
         </h1> 
         <h1 className='text-justify text-base-100 md:text-xl text-lg'>
         2.Framed Partitioning :  Partition walls are usually not load-bearing.
          The use of light weight internal partitions allows flexibility to the client and architect when designing the 
          internal layout of a building. We prioritize on Partition walls constructed of many materials, such as Plasterboards, fibre cement boards, 
          and Magnesium Oxide “MgO” boards. The different systems available can provide the fire, moisture resistant, and acoustic ratings that are required, 
          whilst allowing freedom of decorative design. <br /></h1>
          <h1 className='text-justify text-base-100 md:text-xl text-lg'>
          3.Procurement and Supplies : Whether you're simply looking to insulate that cavity, clad the wall, cover up visible ducts or you're working on a conversion project, here at 
          Nuvie dry wall Enterprise and installation we can supply you with everything you need. We have all the options currently available, but if there is nothing off 
          the shelf to serve your purpose, we can work with our over sea suppliers to develop a bespoke solution.Give us your site location and material
          bill of quantity and our logistics team there in a considerable time, no matter your location gice ue a call. <br />
          </h1>
          <h1 className='text-justify text-base-100 md:text-xl text-lg'>
          4. Finishing : For the beautiful finishing of your homes and offices contact us and you would be glad you did.


           </h1>
        </div></div>
          <div className="w-full h-full max-w-[1024px] flex  justify-center items-center">
            <div className="w-full h-full my-6 pb-6 gap-2 flex flex-wrap justify-evenly items-center">
               { Data.map((data,i )=>(
               <div
               key={i}
               className="md:w-[40%] lg:w-[30%] md:h-[40vh] bg-[#ccc]  w-[85%] h-[30vh] md:m-0 m-4 flex justify-evenly flex-col items-center md:mt-5 md:mb-0 h-full rounded"
             >
              <div className="w-full h-[30vh] flex m-auto justify-center items-center">
               <img
                      src={data.img}
                      alt="event"
                      className="md:w-[24vw] lg:w-[18vw]  my-auto w-[90%] max-h-[25vh]  md:h-[22vh] "
                    /></div>
               <div
                 className="flex md:w-[22vw] w-full m-auto  md:h-[14vh] 
                  h-[10vh] items-center justify-center text-md  gap-3 rounded-b-lg "
                > 
                 
                 <div className="w-full h-[full] flex flex-col justify-center items-center text-xs ">
                   <h1 className="w-3/4 h-full font-bold text-[#8c92a9] md:text-lg text-xl">{data.title}</h1>
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

export default Program