import {useState} from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
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
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const checked=()=>setIsCaptchaVerified(true)
    const nAme=(e)=>setName(e.target.value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;

    const eMail=(e)=>{setEmail(e.target.value)
    
      setIsValidEmail(emailRegex.test(email));
    }
    const check=(e)=>{
      if(e.key==="Enter"){setEmail(e.target.value)
   

      setIsValidEmail(emailRegex.test(email));}
    }
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

    const pHone = (e) => {
      const input = e.target.value.replace(/\D/g, '');
      if (input.length <= 10) {
        setPhone(input);
        setIsValidPhoneNumber(true);
      } else {
        setIsValidPhoneNumber(false);
      }
    };
    const fEed=(e)=>setFeedback(e.target.value)

    const handleSubmit=async()=>{
        if(name.length<3){
         toast.error('name is too short!');
         return;
        }
        if(!isValidEmail){
          toast.error('Enter valid mail');
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
        if(!isCaptchaVerified){
          toast.error('Please Complete Captcha')
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
 
<div className="writeicon"><FaBuilding color="#48ad61"/><span>www.vaajlabs.com</span></div>
</div>
       <div className="forms">
           <center><h1 id="contact">Write To Us</h1></center>
   <input type="text" onChange={nAme} value={name} placeholder="Name"/>
   <input
        type="email"
        id="email"
        value={email}
        onKeyUp={check}
        onChange={eMail}
        style={{ borderColor: isValidEmail ? 'initial' : 'red' }} // Change border color based on validity
      />
      {!isValidEmail && <span className="validemail" style={{ color: 'red' }}>Please enter a valid email address.</span>}
      <input
        type="text"
        id="phone"
        value={phoneno}
        onChange={pHone}
        maxLength={10} // Limit input to 10 characters
        style={{ borderColor: isValidPhoneNumber ? 'initial' : 'red' }} // Change border color based on validity
      />
      {!isValidPhoneNumber && (
        <p style={{ color: 'red' }}>Please enter a valid phone number with up to 10 digits.</p>

      )}
   <textarea id="textarea" value={feedback} onChange={fEed} placeholder="Your Message" name="textarea" rows="8" cols="50"></textarea>
   <ReCAPTCHA className="captcha"
          sitekey="6LdKDaopAAAAAIGW8tU1LRki2djXvZzM5e77JxLY"
          onChange={checked}
       
        />
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