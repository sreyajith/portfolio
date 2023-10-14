import React from 'react';
import './Works.css';
import csiImage from '../../assests/csi.png'; 
import parkingImage from '../../assests/parking.jpg';
import eduImage from '../../assests/eduke.jpg'; 
const projects = [
    {
      title: 'Actively Engaged in CSI Events',
      description: 'I have actively engaged in numerous events and seminars organized by CSI, showcasing my enthusiasm and commitment. Additionally, I have been an integral member of the CSI, specifically in the VOpen Source department.',
      image: csiImage,
    },
    {
      title: 'Automatic Car Parking System',
      description: (
        <>
          <p><em>Jan 2023 - May 2023</em></p>
          <p className="smallerDescription">Created a prototype model of an automatic car parking system with Raspberry Pi.</p>
        </>
      ),
      image: parkingImage,
    },
    {
      title: 'Eduk - Find Your Study Buddy',
      description: (
        <>
          <p><em>Nov 2022 - Dec 2022</em></p>
          <p className="smallerDescription">Our team of 5 won the 1st position in the Shark Tank and Brainathon programs during our university's tech festival, where we presented a start-up idea. Our success highlighted our exceptional entrepreneurial spirit and problem-solving abilities.</p>
        </>
      ),
      image: eduImage,
    },
  ];
  
  
  function Works() {
    return (
      <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I have actively participated in numerous projects and programs during my time at the university, demonstrating my commitment to various initiatives and showcasing my ability to collaborate effectively within a team environment.</span>
        <div className="workImgs">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt="" />
              <div className="projectDescription">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Works;