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
  return (
    <div className='bg-[#ccc] h-[65vh] flex items-center'>
        <div className="w-full bg-[#555] color-[#ccc] 
        max-w-[1024px] flex flex-col justify-center items-center">
            
            <div className="bg-[#ccc] h-[65vh] flex items-center justify-center">
                <div className='pr-[40px] pl-[40px]'>
                    Email
                    <p className='contactPar'>
                        ebinan10@gmail.com
                    </p>
                </div>
                <div className='pr-[40px] pl-[40px]'>
                    Phone
                    <p >
                    +2348135110879
                    </p>
                </div>
                <div className='pr-[40px] pl-[40px]'>
                    Physical Address
                    <p >No 12, Diamond street Agric Ikorodu Lagos</p>
                </div>
            </div>
            <div className='pr-[40px] pl-[40px]'>
                <form action="" className="w-full flex justify-between bg-[#555]">
                    <textarea className='border-none outline-none p-[15px] color-[#555]' 
                    placeholder='Message Us' 
                    onChange={(e)=>{EnterInput(e,'message')}} 
                    value={message}/>
                    <input type="email" placeholder='Email' className='input' onChange={(e)=>{EnterInput(e,'input')}} value={input}/>
                    <button className='w-[30%] bg-[#ccc] hover:color-[black]' onClick={Submit}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact