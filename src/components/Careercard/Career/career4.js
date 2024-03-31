import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './indexs.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';

const Career4 = () => {
  const [jobname,setName]=useState("Business Development Executive")

  return (<div className="con">
    <div className="cardmain">
        <div className='row1'>
        <div className='title'><p>BUSINESS DEVELOPMENT EXECUTIVE</p></div>
        <div className='date'>
     <div className="time"><FaClock size={14}/><p className="dat">Posted on:28/03/2024</p></div>
        <p className="open">Open</p>
        </div>
        </div>
        <div className='row2'>
        <div className="location"><FontAwesomeIcon className="sizeicon" icon={faMapMarkerAlt} /><p>Banglore</p></div>
        <div className='type'><FontAwesomeIcon className="sizeicon"  icon={faBriefcase} /><p>Internship</p></div>
        <h4>6LPA</h4>
        </div>
        <div className='description'>
        <h3>DESCRIPTION</h3>
          <p>We are looking for a dynamic and results-oriented Business Development Executive to join our team. As a Business Development Executive, you will be responsible for identifying new business opportunities, developing and maintaining relationships with clients, and driving sales growth. You will collaborate with internal teams to develop strategies, analyze market trends, and implement effective business development plans.</p>
        </div>
        <div className='role'>
          <h3>ROLE</h3>
          <p>As a Business Development Executive, your primary responsibility will be to identify new business opportunities and drive sales growth for the company. You will be expected to research and analyze market trends, generate leads, and build strong relationships with potential clients. This role involves developing and implementing effective business development strategies, including sales presentations, negotiations, and follow-ups to secure new contracts and partnerships.</p>
        </div>
        <center><Link to={`/apply/${jobname}`}><button>APPLY NOW</button></Link></center>
    </div>
</div>);
};

export default Career4;