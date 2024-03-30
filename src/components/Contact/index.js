import {useState} from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaBuilding } from 'react-icons/fa';

import axios from 'axios'
import { ClipLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import './index.css'


const Contact=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneno,setPhone]=useState("")
    const [feedback,setFeedback]=useState("")
    const [submit,setSubmit]=useState(false)
    const [submitted,setSubmitted]=useState(false)
    const nAme=(e)=>setName(e.target.value)
    const eMail=(e)=>setEmail(e.target.value)
    const pHone=(e)=>setPhone(e.target.value)
    const fEed=(e)=>setFeedback(e.target.value)

    const handleSubmit=async()=>{
        if(name.length<3){
         toast.error('name is too short!');
         return;
        }
        if(!email){
         toast.error('Enter valid mail');
         return;
        }
        if(phoneno.length<10 || phoneno.length>10){
         toast.error('Enter valid mobile number');
         return;
        }
        if(!feedback){
         toast.error('Enter message');
         return;
        }
        setSubmit(true)
        setEmail("")
        setName("")
        setPhone("")
        setFeedback("")
        try {
         const res = await axios.post(`http://localhost:8081/api/v1/auth/contact`, { name, email,phoneno,feedback });
         console.log(res);
   
         if (res.data.success) {
            toast.success(res.data.message);
          setSubmit(false);
         } else {
           console.log('fail');
   
           setSubmit(false)
           toast.error(res.data.message);
         }
       } catch (error) {
         console.error(error);
         setSubmit(false)
         toast.error('Something went wrong!');
       }
 
 
 
 
 
     }
    
    
    
    
    return(
    <>
    <Toaster/>

   
   <div className="boxingss">
   <div className="write">
  <h1>Address</h1>
  <div className="writeicon"> <FaMapMarkerAlt color=" #48ad61"/><span>White Field Banglore</span></div>
  <div  className="writeicon"><AiOutlineMail color="#48ad61"/><span>techneeds@vaajlabs.com</span></div>
  <div  className="writeicon"><AiOutlinePhone color="#48ad61"/><span>+91 8688-520-851
</span>
<span>+91 7416-237-222</span></div>
<div className="writeicon"><FaBuilding color="#48ad61"/><span>www.vaajlabs.com</span></div>
</div>
       <div className="forms">
           <center><h1 id="contact">Write To Us</h1></center>
   <input type="text" onChange={nAme} value={name} placeholder="Name"/>
   <input type="mail" onChange={eMail} value={email} placeholder="Email"/>
   <input type="text" onChange={pHone} value={phoneno} placeholder="Phone No"/>
   <textarea id="textarea" value={feedback} onChange={fEed} placeholder="Your Message" name="textarea" rows="8" cols="50"></textarea>
   <center>
   {submit?<ClipLoader color="green"  size={17} />: <button id="writebutton" onClick={handleSubmit}>
          SUBMIT
        </button>}

   </center>
   </div>
   </div>
    
    </>
    )
}

    export default Contact