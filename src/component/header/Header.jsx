import React from 'react'
import './header.css'
import { useState, useEffect } from 'react'

const Header = () => {
    const [classname, setClassname] = useState('none');
    const [block1, setBlock1] = useState('none')
    const [block2, setBlock2] = useState('none')

    const changeStyle = () =>{
        if(classname==='none'){
            setClassname('block')
        }
        else{
            setClassname('none')
        }
        
    }
    useEffect(() => {
        setTimeout(() => {
           setBlock1('none') 
           setBlock2('none')
        }, 2000);
       
    }, )
    
  return (
    <div className='h-[70px] w-full flex justify-center items-center'>
        <div className="w-4/5 flex justify-between items-center">
            <h2 className="">Brand Name</h2>
        </div>
        
    </div>
  )
}

export default Header