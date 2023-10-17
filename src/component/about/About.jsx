import React from 'react'
import companyLogo from '../images/companyLogo.jpg'

const About = () => {
  return (
    <div className=' '>
        <div className="w-full  mx-auto bg-[#8c92a9] color-[#ccc] min-w-[95%]  flex flex-col justify-center items-center">
        <div className="w-full md:h-[50vh] h-[57vh]"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8913526224424!2d4.867254491865328!3d7.636812280619829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b7ff26eda99%3A0x9ae7a63c09815528!2sMountain%20Of%20Possibilities!5e1!3m2!1sen!2sng!4v1696585156175!5m2!1sen!2sng"    
    width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
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
                        The vision of God that he delivered to our founding fathers is that any thing that is difficult and that man says cannot
                        be possible he will make easy in the life of anyone that believes.
                       </h4>
                    </div>
                    <div className="w-full mt-[5vh]">
                    <h1 className='w-full text-[white] text-start md:text-3xl text-xl p-3'>Rules and Regulations</h1>
                      <h4 className='bg-[white] md:text-lg text-md p-5 text-justify'>
                      The Rules and Regulations giving are  simple and straight forward, they includes <br />
                      1. Do not litter the mountain with dirts <br />
                      2. Do not pray loud prayer during Night hours <br />
                      3. 
                       </h4>
                    </div>
                </div>
                <div className="md:w-1/2 w-full h-[40vh] flex justify-center items-start">
                  <img src={companyLogo} className='md:ml-[4vw] md:mt-0 h-[36vh] mt-4 md:w-[30vw] w-full' alt="" />
                </div>
               </div>

            </div>
        </div>
    </div>
  )
}

export default About