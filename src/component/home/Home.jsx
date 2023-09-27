import React from 'react'
import companyLogo from '../images/companyLogo.jpg'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  
  
  return (
    <div className='md:min-h-[67vh] min-h-[40vh] w-full flex items-center justify-center '>
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="h-full w-full flex items-center justify-center ">
               
                <div id='bg' className="md:h-[85vh] h-[55vh] w-full flex items-center justify-center" >
                <div className="md:h-3/5 h-3/5 md:w-1/4 w-1/2  flex flex-col gap-[7vh] items-center justify-center "> 
                  {/* <img src={companyLogo} className=' bg-opacity-100  h-[14vh] w-full' alt="" /> */}
                  <div className="w-full h-full rounded flex flex-col justify-center items-center gap-2 font-bold text-center bg-opacity-40 bg-[black]">
                    <h1 className='text-[white] md:text-3xl text-md text-center '>NUVIE</h1>
                     <h1 className='text-center text-[white] md:text-3xl text-md '> DRYWALL</h1>
                     <h1 className='text-[white] md:text-3xl text-md '>&</h1>
                     <h1 className='text-[white] md:text-3xl text-md '>INSTALLATION</h1> <h1 className='text-[white] md:text-5xl text-xl '> ENTREPRISE</h1></div>
                   <div className="  md:w-[20vw] w-[30vw] bg-opacity-60 h-[5vh] flex items-center justify-center rounded-xl bg-base-100"><Link to='/contact' className='w-full'> Welcome</Link>
                  </div> 
                  </div>
                  
                 
                </div>
                
            </div>
            <div className="md:w-3/4 w-full md:m-[50px] py-[20px] text-[grey] md:bg-[white] bg-[#8c92a9] flex justify-center items-center"><div className="md:w-full w-[85%]">
              <h1 className='md:text-2xl text-lg tracking-wide md:text-[#8c92ac] text-[white] my-3' >Welcome to Nieve Dry Walls  Ltd.</h1>
              <h1 className='text-justify md:text-xl text-md md:mb-0 mb-3 leading-loose md:text-[#8c92ac] text-[white]'>Nuvie Drywall & Installation Enterprise, situated at Lagos, is a quality brand behind high 
              ceiling and drywall partition products, from wholesale supply to expert installation.  Our products are of affordable prices, aesthetic values, energy efficiency, 
              fire & moisture resistance, fast installation time, and low maintenance cost.<br />As the need for distinctive and extraordinary interior systems are ever growing, NDIE is constantly on the lookout for new products, 
              innovative ideas, eco-friendly solutions to meet our customers demand.<br /> We at NDWEI have dedicated & well trained staff who can address your queries and assist you with your requirement, assuring you of our
               finest products and services at all times. We do deliveries and installations locally and nationally at minimal fees.</h1>
            </div></div>
        </div>
        </div>
  )
}

export default Home