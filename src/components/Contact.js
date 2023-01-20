import React from 'react'
import ContactForm from './ContactForm'


const Contact = () => {


  return (
    <div>
    <div>
      <h1 style={{fontSize: '40px',marginBottom: '20px'}}>
      Contact
      </h1>
      <div className='contactgrid'>
        <div className='email'><h1 style={{fontSize: '30px'}}>Email:</h1><h1 style={{fontSize: '20px', marginBottom: '10px'}}>Robbie@email.com</h1></div>
        <div className='telephone'><h1 style={{fontSize: '30px'}}>Telephone:</h1><h1 style={{fontSize: '20px', marginBottom: '10px'}}>0123456789</h1></div>
      </div>
      <ContactForm/>
      </div>
    </div>
  )
}

export default Contact