import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <hr style={{marginBottom: '20px'}}/>
      <SocialIcon url='https://www.instagram.com/' className='footer-icon'/>
      <SocialIcon url='https://www.facebook.com/' className='footer-icon'/>
    </div>
  )
}

export default Footer