import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Error from './Error';

import 'bootstrap/dist/css/bootstrap.min.css';


const Index = () => {
  return (
    <>
    <HashRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='*' element={<Error/>} />
        </Routes>
    </HashRouter>
    </>
  )
}

export default Index