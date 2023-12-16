import React from 'react'
import kosunti from '../images/koseuntiLogo.jpg'

const Give = () => {
  return (
    <div>
    <div className='w-full  flex-col md:h-[130vh] h-[110vh]  flex justify-center items-center'>
       <div className="w-full md:h-[80vh] h-[45vh]"> 
       
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8913526224424!2d4.867254491865328!3d7.636812280619829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b7ff26eda99%3A0x9ae7a63c09815528!2sMountain%20Of%20Possibilities!5e1!3m2!1sen!2sng!4v1696585156175!5m2!1sen!2sng"    
    width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade" className='flex h-full justify-center md:text-2xl items-center text-[white]'>
      <h1>Give Online</h1></iframe>
          </div>
        <div className="md:full w-[100%] bg-[black] md:min-h-1/2 h-[65vh]  md:pb-0 pb-[5vh] flex md:flex-row flex-col justify-center items-center">
        <div className="md:w-1/3 w-full md:pl-[10vw] md:mt-[5vh]  h-full flex justify-center items-center">
            <img src={kosunti} alt="" className='w-[37vw] md:h-1/2 h-[14vh]'/>
        </div>
             <div className="md:w-2/3 w-full md:h-[90%] h-[35vh] flex flex-col justify-center item-center">
                <h1 className='pb-3 w-full flex md:mt-0  md:justify-start justify-center text-base-100 md:text-2xl text-lg'>Give Online</h1>
              <div className="w-full"><h1 className=' md:text-xl text-md text-base-100 '> Mountain of Possibility.</h1>
               </div> 
                <div className="w-4/5 m-auto flex flex-wrap">
                    <h1 className='text-base-100 md:text-md flex justify-center items-center text-sm text-justify '>
                    Contact the numbers below to forward you account details of the mountain, 
                    or you can ask any of the servant of God on the mountain for the account details of which you can sow your seed, you can also 
                    give your resources directly by coming with it to the mountain.<br/> 
                   </h1>
                    <h1 className='w-full text-base-100 md:text-md md:pb-0  mt-3 flex justify-center items-center text-sm  text-center'>
                    Mobile: +234-8038074339 
                    <br />
                    Phone: +234-9155267388
                    </h1>
                </div>
                </div>
             
        </div>
        
    </div></div>
  )
}

export default Give