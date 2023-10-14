import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css'; 
import graduationIcon from '../../assests/graduation.png'; 
import Hss from '../../assests/book.png';
import Hs from '../../assests/school.png';
const Education = () => {
    return (
      <section id="education">
        <span className='educationTitle'>Education</span>
            <p className='educationDesc'>Here is my educational journey, a voyage through learning that has shaped my expertise and fueled my passion for lifelong knowledge</p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#000', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #000' }}
            iconStyle={{ backgroundImage: `url(${graduationIcon})`, backgroundSize: 'cover' }}
          >
            <h3 className="vertical-timeline-element-title">Btec CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">VIT AP</h4>
            <p><i>2021-present</i></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#000', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #000' }}
            iconStyle={{ backgroundImage: `url(${Hss})`, backgroundSize: 'cover' }}
          >
            <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Rani Jai Higher Secondary School</h4>
            <p><i>2019-2021</i></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#000', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #000' }}
            iconStyle={{ backgroundImage: `url(${Hs})`, backgroundSize: 'cover' }}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h4 className="vertical-timeline-element-subtitle">Koodali Higher Secondary School</h4>
            <p><i>2016-2019</i></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    );
  }
  export default Education;