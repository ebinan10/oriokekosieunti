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
  <div className="w-full h-[2vh] bg-[#ccc] mx-auto"></div>
    <div className='w-full bg-[#8c92a9] flex-col md:max-h-[105vh] h-[205vh]  flex justify-center items-center'>
        
        <div className="md:w-4/5 w-[94%] h-full flex flex-col justify-center items-center">
        
            <div className="w-full h-full flex md:flex-row flex-col-reverse md:justify-center justify-evenly items-center">
                <div className="md:w-1/2 w-full md:h-[83vh] min-h-[140vh] bg-[#ccc] flex flex-col justify-center item-center">
                <h1 className='pb-3 w-full mt-2 flex  justify-center text-base-100 md:text-3xl text-2xl '>Contact</h1>
              <div className="w-full"><h1 className=' md:text-3xl text-xl text-base-100 '> nuvie drywall & installation enterprise.</h1>
               <h1 className=' text-base-100 md:text-lg text-md'>  No 2 siro Street, Off Ikorodu Road,<br />
                Fadeyi – Lagos.</h1></div> 
                <div className="w-full">
                    <h1  className='text-base-100 md:text-xl text-md'>
                    Head Office
                    </h1>
                    <h1 className='text-base-100 md:text-xl text-md'>
                    68 Military hospital road, Yaba,
                    <br /> Lagos – Nigeria. <br />
                    nuviedrywalls@gmail.com <br />
                    Tel: +234-8135853802
                    </h1>
                </div>
                <div className=" w-[97%] mt-[5vh] md:h-[36vh] min-h-[85vh] flex  m-auto justify-center bg-base-100 items-center">
                <div className="w-[95%]  h-[93%]  bg-[#ccc] flex md:flex-row flex-col justify-center  ">
                    <div className="md:w-1/2 h-full ">
                        <form action="" className='md:w-[95%] w-full h-full flex flex-col mx-auto bg-[white]  item-center justify-evenly '>
                        <input type="text" className='border-none md:bg-[transparent] bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Name' />
                        <input type="text" className='border-none md:bg-[transparent] bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Email' />
                        <input type="text" className='border-none md:bg-[transparent] bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Phone' />
                        <input type="text" className='border-none md:bg-[transparent] bg-[#ccc] outline-none focus:outline-none focus:ring-0 focus:border-none ' placeholder='Subject' />
                    </form>
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
                        <form action="" className='w-[95%] h-[90%] flex flex-col mx-auto item-center justify-evenly '>
                        <textarea name="" id="" cols="30" className='border-none md:bg-[transparent] bg-[white] outline-none focus:outline-none focus:ring-0 focus:border-none ' rows="6" placeholder='Message'>
                        </textarea>
                        <input type="submit" placeholder='Submit' className='md:w-[12vw] md:m-0 m-4 h-[5vh] w-1/2 rounded-2xl bg-[white] text-black cursor-pointer mx-auto' name="" id="" />
                        </form>
                    </div>
                    </div></div>
                </div>
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
                    <div className="w-full md:h-[70vh] h-[50vh] flex justify-center items-center">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15855.890596043582!2d3.3746176!3d6.525138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bed07af52888f%3A0x8d5bf7124dd81612!2sNuvie%20Drywall%20%26%20Installation%20Enterprise!5e0!3m2!1sen!2sng!4v1693761866538!5m2!1sen!2sng" 
                        width="100%" height="100%" style={{border:"0"}} title='nuvieDrywalls' allowfullscreen="" loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                         
                    </div>
                    {/* <div className="w-full"></div> */}
                </div>
            </div>
        </div>
        
    </div></>
  )
}

export default Contact