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
    <div className='w-full bg-[#8c92a9] h-[65vh] flex items-center'>
        <div className="w-4/5 flex justify-center items-center">
            <div className="w-full flex justify-center items-center">
                <div className="w-1/2"></div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="w-full">
                        <h1></h1>
                        <h4></h4>
                    </div>
                    <div className="w-full"></div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Contact