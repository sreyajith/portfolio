import React from 'react';
import './intro.css';
import bg from '../../assests/image.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assests/hireme.png'
function Intro() {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sreyajith</span><br/>Student</span>
            <p className='introPara'>A committed scholar, their devotion to coding ignites an unwavering work ethic,<br/>yielding impressive accomplishments even in high-pressure situations.</p>
            <Link><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire me</button></Link>    
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro;