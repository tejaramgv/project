import React from 'react';
import {Link} from 'react-router-dom'
import './indexs.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';

const Career2 = () => {
  return (<div className="con">
    <div className="cardmain">
        <div className='row1'>
        <div className='title'><p>FuLL STACK DEVELOPER</p></div>
        <div className='date'>
     <div className="time"><FaClock size={14}/><p className="dat">Posted on:28/03/2024</p></div>
        <p className="open">Open</p>
        </div>
        </div>
        <div className='row2'>
        <div className="location"><FontAwesomeIcon className="sizeicon" icon={faMapMarkerAlt} /><p>Banglore</p></div>
        <div className='type'><FontAwesomeIcon className="sizeicon"  icon={faBriefcase} /><p>Internship</p></div>
        <h4>8LPA</h4>
        </div>
        <div className='description'>
        <h3>DESCRIPTION</h3>
          <p>
          We are seeking a talented and experienced Full-Stack Developer to join our team. As a Full-Stack Developer, you will be responsible for designing, developing, and maintaining both the front-end and back-end of our web applications. You will collaborate with cross-functional teams to deliver high-quality, scalable solutions that meet our clients' needs.   </p>
        </div>
        <div className='role'>
          <h3>ROLE</h3>
          <p>As a Full-Stack Developer, your primary role will be to develop and maintain both the front-end and back-end of web applications. This includes collaborating with designers and product managers to translate requirements into technical specifications and writing clean, efficient code using languages like HTML, CSS, JavaScript, and frameworks such as React, Angular, or Vue.js. You will also be responsible for implementing responsive designs, optimizing databases, and ensuring data security and integrity. Additionally, conducting thorough testing and debugging, participating in code reviews, staying updated with the latest technologies, and collaborating with team members on projects will be key aspects of your responsibilities.</p>
        </div>
        <center><Link to="/contact"><button>APPLY NOW</button></Link></center>
    </div>
</div>);
};

export default Career2;