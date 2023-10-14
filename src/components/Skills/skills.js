import React from 'react'
import './skills.css'
import Java from '../../assests/java.png';
import Html from '../../assests/html.png';
import Dbms from '../../assests/dbms.png';
import Python from '../../assests/python.png';
import Css from '../../assests/css.png'
import Bootstrap from '../../assests/bootstrap.png';
function Skills() {
    return (
        <section id='skills'>
            <span className='skillTitle'>Skills</span>
            <p className='skillDesc'>A versatile set of technical skills, encompassing programming languages such as Java and Python, front-end development using HTML, CSS, and Bootstrap, and proficiency in Database Management Systems (DBMS)</p>
            <div class="skillBars">
                <div className='skillBar'>
                    <img src={Java} alt='java' className='skillBarImg' />
                    <div className='skillText'>
                        <h2>JAVA</h2>
                        <p>Intermediate Level</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Python} alt='python' className='skillBarImg' />
                    <div className='skillText'>
                        <h2>Python</h2>
                        <p>Intermediate Level</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Html} alt='html' className='skillBarImg' />
                    <div className='skillText'>
                        <h2>HTML</h2>
                        <p>High Level</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Css} alt='Css' className='skillBarImg' />
                    <div className='skillText'>
                        <h2>Css</h2>
                        <p>High Level</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Bootstrap} alt='Bootstrap' className='skillBarImg' />
                    <div className='skillText'>
                        <h2>Bootstrap</h2>
                        <p>High Level</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Dbms} alt='dbms' className='skillBarImg' />
                    <div className='skillText'>
                        <h2>DBMS</h2>
                        <p>Intermediate Level</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills