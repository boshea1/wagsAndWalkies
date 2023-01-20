import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='nav'>
        <div style={{background:'white', position: 'absolute', top: '30px', left: '150px', border: 'solid black 1px', padding: 5}}>
            <h1 style={{letterSpacing: '5px', fontWeight: 'lighter' }}>RBS</h1>
            <h1>Robbies Building Services</h1></div>
        <ul className='list'>
            <li>
                <Link to='/' className='btn'>Home</Link>
            </li>
            <li>
                <Link to='/portfolio' className='btn'>Portfolio</Link>
            </li>
            <li>
                <Link to='/Contact' className='btn'>Contact us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar