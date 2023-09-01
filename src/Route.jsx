import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '././component/home/Home';
import Component1 from './component/component1/Component1';
import Component2 from './component/component2/Component2';
import Component3 from './component/component3/Component3';
import Component4 from './component/component4/Component4';
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
                
                <Route path='component1' element={<Component1/>}/>
                <Route path='component2' element={<Component2/>}/>
                <Route path='component3' element={<Component3/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='component4' element={<Component4/>}/>
              
            </Routes>
            {/* <Mailer/> */}
            <Footer/>
        </Router>
        
    </div>
  )
}

export default Rout;