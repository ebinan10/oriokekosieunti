import React from 'react'
import companyLogo from '../images/companyLogo.jpg'

const Home = () => {
  return (
    <div className='md:min-h-[67vh] min-h-[40vh] w-full flex items-center justify-center color-[rgb(12, 48, 80)]'>
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="h-full w-full flex items-center justify-center ">
                {/* <div className="h-full w-full">
                  <img className='h-[75vh] w-full' src="https://img.staticmb.com/mbcontent/images/uploads/2023/1/Low-Cost-Simple-POP-Design_1673522026025.jpg" alt="" />
                </div> */}
                {/* <div className="h-full w-full">
                  <img className='h-[75vh] w-full' src="https://i0.wp.com/cocolapinedesign.com/wp-content/uploads/Brown-kitchen-cabinets-in-a-spacious-turn-of-the-century-home14.jpg?resize=1024%2C768&ssl=1" alt="" />
                </div> */}
                {/* <div className="h-full w-full">
                  <img className='h-[75vh] w-full' src="https://www.decorpot.com/images/1449605336lighting-and-false-ceiling-ideas-for-your-living-room%20(1).jpg" alt="" />
                </div> */}
                <div className="md:h-[85vh] h-[55vh] w-full flex items-center justify-center" style={{backgroundImage: `url("https://static.wixstatic.com/media/e5590e78cb3c4a4aa2bd66fce4787a0c.jpg/v1/fill/w_1349,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e5590e78cb3c4a4aa2bd66fce4787a0c.jpg")`,
                  backgroundSize: 'cover', backgroundPosition:'center'}}>
                  <div className="h-1/5 md:ml-[35vh] ml-[20vh]">
                  <img src={companyLogo} className=' h-[14vh] w-[10vw]' alt="" />
                  </div>
                  
                  {/* <img className='md:h-[85vh] h-[55vh] w-full' src="https://static.wixstatic.com/media/e5590e78cb3c4a4aa2bd66fce4787a0c.jpg/v1/fill/w_1349,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e5590e78cb3c4a4aa2bd66fce4787a0c.jpg" alt="" /> */}
                </div>
                {/* <div className="h-full w-full">
                  <img className='h-[75vh] w-full' src="https://www.home-designing.com/wp-content/uploads/2014/02/24-White-yellow-kitchen.jpg" alt="" />
                </div> */}
            </div>
            <div className="md:w-3/4 w-full md:m-[50px] py-[20px] text-[grey] md:bg-[white] bg-[#8c92a9] flex justify-center items-center"><div className="md:w-full w-[85%]">
              <h1 className='md:text-2xl text-lg tracking-wide md:text-[#8c92ac] text-[white] my-3' >Welcome to Nuvie Dry Wall Enterprise.</h1>
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