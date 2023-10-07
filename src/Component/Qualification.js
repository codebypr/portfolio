import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode,FaSchool, FaCentercode} from 'react-icons/fa';
import {PiStudentFill} from 'react-icons/pi';
import {DiAndroid} from 'react-icons/di';
function Qualification() {
  return (
    <div>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<PiStudentFill/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Computer Application (BCA) </h3>
    <p>
    Pursuing Bachelor of Computer Application (BCA) 2nd year.
 Maharshi Dayanand University (MDU).
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work text-info"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<FaCode />}
  >
   <h3 className="vertical-timeline-element-title">Full Stack Development</h3>
    <h5 className="vertical-timeline-element-subtitle">Front-End</h5>
    
    <p><strong>
    Oxfoard Software Institute (OSI) in Delh.  <br /> </strong>Skills - HTML, CSS, JavaScript, Bootsrap, jQuary, React js.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaCentercode />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Development</h3>
    <h5 className="vertical-timeline-element-subtitle">Back-End</h5>
    <p><strong>Completed- 
    Oxfoard Software Institute (OSI) in Delh.  <br /> </strong>Skills - java opps, core Java,  advance java, JSP, Servlet, Swing, MySql</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< DiAndroid/>}
  >
    <h3 className="vertical-timeline-element-title">Android Development</h3>
    <h5 className="vertical-timeline-element-subtitle">with java technology</h5>
    <p>
     Learning Youtube with a special expert teacher CodeWithHarry. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary Certificate</h3>
    {/* <h5 className="vertical-timeline-element-subtitle">scholling study</h5> */}
    <p>
    Passed out 12<sup>th</sup> from HBSE in 2022
Marks 89%. <br/>
Passed out 10<sup>th</sup> from HBSE in 2020
Marks 91%.
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
    </div>
  )
}

export default Qualification
