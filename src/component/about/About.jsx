import React from 'react'
import companyLogo from '../images/companyLogo.jpg'

const About = () => {
  return (
    <div className=' '>
      <div className="w-full h-[2vh] bg-[#ccc]"></div>
        <div className="w-full  mx-auto bg-[#8c92a9] color-[#ccc] min-w-[95%] max-w-[1024px] flex flex-col justify-center items-center">
            <div className="md:m-[50px] m-[20px] w-[90%]  justify-center items-center">
               <div className="w-full min-h-[70vh] flex md:flex-row flex-col-reverse flex justify-center">
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
                    <div className="w-full">
                    <h1 className='w-full text-start text-[white] text-start md:text-3xl text-xl p-3'>HSE</h1>
                    <h4 className='bg-[white] md:text-lg text-md  p-5 text-justify'>Nuvie Drywall & 
                      Installation Enterprise was founded in early 2023. As a registered installers of drywall 
                       partition and ceiling materials,  we do installation of 
                      top quality products for residential and commercial 
                      buildings. We stock most various sizes of drywall and ceiling
                     materials that would be needed in the residential or commercial
                      applications, 
                      wall angles, omega channels, gypsum boards, metal ceiling,
                       plaster compounds, adhesive, fasten and fixings.
                      NDWEI has a fully trained and experienced team of operatives
                       that are capable of executing turn-key jobs, from interior
                        design to finishing of ceiling and drywall partition.We 
                        are familiar with all options that are currently available,
                         but if there is nothing off the shelf that suits your need,
                          we can work with our suppliers to develop a bespoke solution.
                        We win contracts based on the quality of our work, our customer
                         focused approach, correct specification compliance, and our competitive
                          prices. By going the extra mile, our honesty and hard work always 
                          prevail. Wouldn't you rather contact us today let's talk
                           business.</h4>
                    </div>
                    <div className="w-full mt-[5vh]">
                    <h1 className='w-full text-[white] text-start md:text-3xl text-xl p-3'>Our Mission/ Vision</h1>
                      <h4 className='bg-[white] md:text-lg text-md p-5 text-justify'>
                      Our Vision at Nuvie Drywall & Installation Enterprise, is to become a premier solution provider
                       company providing world leadership in the wall and ceiling industry.
                        Our Mission is to form a long-term relationship of value with our clients 
                        and partners, using quality execution, safely, and timely delivery of 
                        projects and employing the best resources and latest techniques.
                      </h4>
                    </div>
                    <div className="w-full mt-[5vh]">
                    <h1 className='w-full text-[white] text-start md:text-3xl text-xl p-3'>Health Safety and Environment</h1>
                      <h4 className='bg-[white] md:text-lg text-md p-5 text-justify'>
                      The manpower of NDWEI is one of our most valuable resources. We ensure a safe workplace
                       for our staff and also to protect clients' investment and facilities, 
                       our company has evolved a strong health and safety culture driven by a 
                       goal to achieve "zero accidents" and "zero man-hours lost".
                       The safety culture has been instilled in KKG employees with the conviction
                       that every accident is preventable. The company fully acknowledges that
                       by complying with stringent Health, Safety and Environment (HSE) 
                       procedures, zero accidents can be accomplished.
                        </h4>
                    </div>
                </div>
                <div className="md:w-1/2 w-full h-[40vh] flex justify-center items-start">
                  <img src={companyLogo} className='md:ml-[4vw] md:mt-[30vh] h-[36vh] mt-4 md:w-[30vw] w-full' alt="" />
                </div>
               </div>

            </div>
        </div>
    </div>
  )
}

export default About