import React, { useState } from 'react'
import axios from 'axios';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [input, setInput]= useState('');
    const Submit =() =>{
            axios.post({message,input})
    }
    const EnterInput = (e,value) =>{
        if(value==='message'){
            setMessage(e.target.value)
            console.log(message)
        }
        else{
            setInput(e.target.value)
            console.log(input)
        }
    }
  return (<>
  <div className="w-full h-[2vh] bg-[#ccc] "></div>
    <div className='w-full bg-[#8c92a9] flex-col md:h-[130vh] h-[205vh]  flex justify-center items-center'>
        
        <div className="md:w-4/5 w-[100%] h-full flex flex-col justify-center items-center">
        
            <div className="w-full h-full  flex md:flex-row flex-col-reverse md:justify-center justify-evenly items-center">
                <div className="md:w-1/2 w-full md:min-h-[35vh] min-h-[125vh] bg-[#ccc] flex flex-col justify-center item-center">
                <h1 className='pb-3 w-full flex md:mt-[5vh]  justify-center text-base-100 md:text-3xl text-2xl '>Contact</h1>
              <div className="w-full"><h1 className=' md:text-3xl text-xl text-base-100 '> Nuvie drywall & installation enterprise.</h1>
               <h1 className=' text-base-100 md:text-lg text-md'>  No 2 Shiro Street, Off Ikorodu Road,<br />
                fadeyi Lagos.</h1></div> 
                <div className="w-full">
                    <h1  className='text-base-100 md:text-xl text-md'>
                    Head Office
                    </h1>
                    <h1 className='text-base-100 md:text-xl text-md'>
                    68 Military hospital road, Yaba,
                    <br /> Lagos – Nigeria. <br />
                    nuviedrywalls@gmail.com <br />
                    Mobile: +234-8135853802 <br />
                    Phone: +234-7046092205
                    </h1>
                </div>
                <div className=" w-[95%] mt-[5vh] mb-[4vh] md:min-h-[50vh] min-h-[80vh] flex  m-auto justify-center bg-base-100 items-center">
                <div className="w-[92%]  md:h-[34vh] h-[67vh] bg-[#ccc] flex md:flex-row flex-col md:gap-0  md:mt-0 mt-2 justify-center items-center ">
                    <div className="md:w-1/2 w-full  md:h-[90%] h-3/5 flex  md:justify-evenly justify-center items-center md:bg-[#ccc] bg-base-100">
                        <form action="" className='md:w-[93%] w-full  h-full flex flex-col md:gap-1 gap-1 md:bg-transparent bg-[white]  item-center justify-between '>
                        <input type="text" className='h-[5vh] border-none md:bg-base-100 bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Name' />
                        <input type="text" className='h-[5vh] border-none md:bg-base-100 bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Email' />
                        <input type="text" className='h-[5vh] border-none md:bg-base-100 bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Phone' />
                        <input type="text" className='h-[5vh] border-none md:mb-0 mb-[4vh] md:bg-base-100 bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Subject' />
                    </form>
                    </div>
                    <div className="md:w-1/2 md:h-full h-4/5 w-[90%] m-auto flex flex-col justify-center bg-[ccc] items-center">
                        <form action="" className='md:w-[95%] w-full h-[70%] flex flex-col  items-center md:justify-between justify-center '>
                        <textarea name="" id="" cols="30" className='md:h-[70%] w-full md:w-[95%] border-none md:bg-base-100 bg-[white] flex items-center
                        outline-none focus:outline-none focus:ring-0 focus:border-none ' rows="6" placeholder='Message'>
                        </textarea>
                        <input type="submit" placeholder='Submit' className='md:w-[12vw] md:m-0 m-4 
                        h-[6vh] w-1/2 rounded-2xl bg-[white] md:flex md:justify-center md:items-center text-black cursor-pointer mx-auto' name="" id="" />
                        </form>
                    </div>
                    </div></div>
                </div>
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
                    <div className="w-[95%] md:h-[98vh] h-[50vh] flex justify-center items-center">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7927.9891143253135!2d3.3683563833803873!3d6.522368896804936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bed07af52888f%3A0x8d5bf7124dd81612!2sNuvie%20Drywall%20%26%20Installation%20Enterprise!5e0!3m2!1sen!2sng!4v1695061701872!5m2!1sen!2sng" 
                        width="100%" height="100%" style={{border:"0"}} title='nuvieDrywalls' allowFullScreen="" loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                         
                    </div>
                </div>
            </div>
        </div>
        
    </div></>
  )
}

export default Contact