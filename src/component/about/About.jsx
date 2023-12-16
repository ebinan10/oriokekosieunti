import React from 'react'
import kosunti from '../images/koseuntiLogo.jpg' 

const About = () => {
  return (
    <div className='w-full  flex-col md:h-[150vh] h-[140vh]  flex justify-center items-center'>
       <div className="w-full md:h-[80vh] h-[55vh]"> 
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8913526224424!2d4.867254491865328!3d7.636812280619829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b7ff26eda99%3A0x9ae7a63c09815528!2sMountain%20Of%20Possibilities!5e1!3m2!1sen!2sng!4v1696585156175!5m2!1sen!2sng"    
    width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade" className='flex h-full justify-center items-center md:text-sm text-sm text-[white]'><h1>Contact US</h1></iframe>
          </div>
        <div className="md:full w-[100%] bg-[black] md:pt-0  md:min-h-3/4 h-4/5 flex md:flex-row flex-col m-auto justify-center items-center">
        <div className="md:w-1/3 w-full h-[15vh] md:h-full flex justify-center items-center">
            <img src={kosunti} alt="" className='w-[30vw] md:h-1/2 h-[10vh]'/>
        </div>
             <div className="md:w-2/3 pb-[3vh] md:pb-0 w-full md:h- max-h-full flex flex-col justify-center item-center">
              <div className="w-full h-full flex flex-col justify-center md:items-start items-center">
                <h1 className="text-[white] md:text-xl text-md md:pt-4">About</h1>
              </div>
             <div className="w-4/5 h-full m-auto mt-[3vh]">
                    <h1 className='w-full text-[white] text-start md:text-xl text-md p-3'>Our Mission/ Vision</h1>
                      <h4 className=' text-[white] md:text-md text-sm p-3 text-justify'>
                        The vision of God that he delivered to our founding father, Prophet Evangelist Abraham Olubiyo Ojo is that any thing that is difficult and that man says cannot
                        be possible he will make easy in the life of anyone that believes.
                       </h4>
                    
                    <h1 className='w-full text-[white] text-start md:text-xl text-md p-3'>Rules and Regulations</h1>
                      <h4 className='text-[white] md:text-md text-sm p-3 mb-3 text-justify'>
                      The Rules and Regulations giving are  simple and straight forward, they includes <br />
                      1. Do not litter the mountain with dirts <br />
                      2. Do not pray loud prayer during Night hours <br />
                      3. Do not eat on the rock <br />
                      We await your arrival, your prayers will be answered!!!!
                       </h4>
                    </div>
                </div>
             
        </div>
        
    </div>
    
  )
}

export default About