import React from 'react'
// import companyLogo from '../images/companyLogo.jpg'
import './home.css'
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'
const Home = () => {
  
  
  return (
    <div className='md:min-h-[67vh] min-h-[40vh] w-full flex items-center justify-center '>
      <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="h-full w-full flex items-center justify-center ">
                  
                <div id='bg' className="md:h-[110vh] h-[55vh] w-full flex items-center justify-center" >
                  <div className="md:h-3/5 h-3/5 md:w-1/4 w-1/2  flex flex-col gap-[7vh] items-center justify-center "> 
                  
                  {/* <img src={companyLogo} className=' bg-opacity-100  h-[14vh] w-full' alt="" /> */}
                  {/* <div className="w-full h-full  rounded flex justify-center items-center flex-col gap-2 font-bold text-center bg-opacity-40 ">
                    <h1 className='text-[white] md:text-3xl text-md text-center '>Mountain</h1>
                     <h1 className='text-center text-[white] md:text-3xl text-md '> Of </h1>
                     <h1 className='text-[white] md:text-3xl text-md '>Possibilities</h1>
                     <h1 className='text-[white] md:text-3xl text-md '></h1> <h1 className='text-[white] md:text-5xl text-xl '> </h1></div> */}
                   <div className="  md:w-[20vw] w-[30vw] bg-opacity-60 h-[5vh] flex items-center justify-center rounded-xl bg-base-100"><Link to='/contact' className='w-full'> Welcome</Link>
                  </div> 
                  </div>
                  
                 
                 
                </div>
                
                
            </div>
            <div className="md:w-3/4 w-full md:m-[50px] py-[20px] text-[grey] md:bg-[white] bg-[black] flex justify-center items-center"><div className="md:w-full w-[85%]">
              <h1 className='md:text-2xl text-lg tracking-wide md:text-[#8c92ac] text-[white] my-3' >Welcome to Mountain of Possibility.</h1>
              <h1 className='text-justify md:text-xl text-md md:mb-0 mb-3 leading-loose md:text-[#8c92ac] text-[white]'>Mountain of Possibility, situated at the heart of Osun, Erinmo Ijesha to be precise, is the home of answered
              prayers, God has been seen, heard and witnessed in our midst, whatever the challenge is the God of this covenant will settle it.
               Reffered to as the Jerusalem Hub of Africa, Ori Oke Kosunti, with it Artifact, Caves, and Stone are Quite unique that proves and validate the hand of God in our midst. 
               </h1>
            </div></div>
        </div>
        </div>
  )
}

export default Home