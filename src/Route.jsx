import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '././component/home/Home';
import Expectation from './component/expectation/Expectation';
import Program from './component/program/Program';
import Gallary from './component/gallary/Gallary';
import Error from './component/404/Error';
import Component5 from './component/component5/Component5';
import Nav from './component/nav/Nav';
import Mailer from './component/mailer/Mailer';
import Footer from './component/footer/Footer';
import Contact from './component/contact/Contact';
import About from './component/about/About';
import Header from './component/header/Header';

const Rout = () => {
  return (
    <div className='w-full'>
      
        <Router>
          {/* <Header/> */}
          <Nav/> 
            <Routes>
              
                <Route path='/' element={<Home/>} />
                <Route path='contact' element={<Contact/>}/>
                
                <Route path='expectation' element={<Expectation/>}/>
                <Route path='program' element={<Program/>}/>
                <Route path='gallary' element={<Gallary/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='*' element={<Error/>}/>
              
            </Routes>
            {/* <Mailer/> */}
            <Footer/>
        </Router>
        
    </div>
  )
}

export default Rout;