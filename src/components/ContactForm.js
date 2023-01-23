import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const mes = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_u7hwsfg', 'template_cgrg286', form.current, 'thKLzDG2UpscgPeLO')
      .then((result) => {
        setTimeout(() => {
          setSubmitted(true);
        }, 100);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  if (submitted) {
      mes.current.style.visibility = 'hidden';
    return (
      
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>

      </>
    );
  }
 
  

  return (
    <>
    <h1 ref={mes} className='mess' style={{margin:'40px 0 30px 0'}} >Or you can message us on the site and we'll get back to you</h1>
    <form
      ref={form}
      onSubmit={sendEmail}
      method="POST"
      target="_blank"
      >
      <div className="ml-40 mb-3 mr-40 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="from_name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="ml-40 mr-40 mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="ml-40 mb-3 mr-40 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-10 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          />
      </div>
      <div className="ml-60 mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          >
          Send a message
        </button>
      </div>
    </form>
          </>
  );
};

export default ContactForm;