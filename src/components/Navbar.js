import React from 'react';
import {Link} from 'react-router-dom';
import OffcanvasExample from './NavbarOffCanvas';
import companyLogo from '../Walks and Waggy Tails-logos/Walks and Waggy Tails-logos_black.png';

const Navbar = () => {
  return (
    <nav className='nav' style={{border:'black solid 1px', marginBottom: 20, paddingTop:10 }}>
           <img src={companyLogo} style={{position:'absolute', margin: '-70px 60px 0px 0px', padding: 0, top: 0, left:0}}></img>
            <div className = 'visi' style={{position:'absolute'}}>
            <OffcanvasExample/>
      </div>
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