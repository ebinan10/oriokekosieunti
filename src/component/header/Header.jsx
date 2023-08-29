import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUserPlus, faUser, faCaretDown, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
    const [classname, setClassname] = useState('none');
    const [lang, setLang] = useState('EN')
    const [block, setBlock] = useState('none')
    const [block1, setBlock1] = useState('none')
    const [block2, setBlock2] = useState('none')
    const changePaternSignin = (click) =>{
        if(block2==='none')
        {
            setBlock2('block1')
        }
        else{
            setBlock2('none')
        }
    }
    const changePaternSignup =()=>{
        console.log('first') 
        if(block1==='none')
        {
            setBlock1('block1')
        }
        else{
            setBlock1('none')
        }
    }
    const changeStyle = () =>{
        if(classname==='none'){
            setClassname('block')
        }
        else{
            setClassname('none')
        }
        
    }
    const changePatern =()=>{
     return  block1==='block2'?setBlock2('none'): 
     setBlock2('block2');
    }
    const Lang = (e, name) =>{
        switch(name){
            case 'english':setLang('EN')
            return;
            case 'deutch':setLang('DE');
            return;
            case 'italian':setLang('IT')

    }}
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