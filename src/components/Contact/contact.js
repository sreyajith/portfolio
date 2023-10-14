import React from 'react';
import './contact.css';
import Insta from '../../assests/instagram.png';
import Git from '../../assests/github.png';
import Linkedin from '../../assests/linkedin.png';
import Gmail from '../../assests/gmail.png';
function Contact() {
  // eslint-disable-next-line
  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.reload(); // This line refreshes the page
  };
  return (
    <section id='contactPage'>
    <div className='contact' id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm'>
            <input type="text" className="name" placeholder="Your Name" />
            <input type='email' className='email' placeholder='Your Email'/>
            <textarea name='message' rows={5} className='msg' placeholder='Your message'></textarea><br/>
            <button  type='submit' class="btn btn-light">Submit</button>
            <div className='links'>
              
            <a href="https://instagram.com/sreyajith_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
              <img src={Insta} alt='Instagram' className='link' />
            </a>
            <a href="https://www.linkedin.com/in/sreyajith-45870321a" target='_blank' rel="noreferrer">
              <img src={Linkedin} alt='LinkedIn' className='link' />
            </a>
            <a href="https://github.com/sreyajith" target="_blank" rel="noreferrer">
              <img src={Git} alt='Github' className='link' />
            </a>
            <a href="mailto:nikkisreya@gmail.com" target="_blank" rel="noreferrer">
              <img src={Gmail} alt='Gmail' className='link' />
            </a>
            </div>
        </form>
    </div>
</section>
  )
}

export default Contact