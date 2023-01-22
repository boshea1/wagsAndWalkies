import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Error from './Error';



const Index = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='*' element={<Error/>} />
        </Routes>
    </Router>
    </>
  )
}

export default Index