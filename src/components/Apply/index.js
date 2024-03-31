// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { ClipLoader } from 'react-spinners';

// import './Apply.css';

// const Apply = (props) => {
//   const { jobname } = useParams();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneno, setPhone] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [submit, setSubmit] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
//   const [resume, setResume] = useState(null);
//   const [isValidEmail, setIsValidEmail] = useState(true);
//   const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

//   const rEsume = (e) => setResume(e.target.files[0]);
//   const checked = () => setIsCaptchaVerified(true);
//   const nAme = (e) => setName(e.target.value);
//   const eMail = (e) => {
//     setEmail(e.target.value);
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;
//     setIsValidEmail(emailRegex.test(email));
//   };
//   const check = (e) => {
//     if (e.key === 'Enter') {
//       setEmail(e.target.value);
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;
//       setIsValidEmail(emailRegex.test(email));
//     }
//   };

//   const pHone = (e) => {
//     const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
//     if (input.length <= 10) {
//       setPhone(input);
//       setIsValidPhoneNumber(true);
//     } else {
//       setIsValidPhoneNumber(false);
//     }
//   };

//   const handleSubmit = async () => {
//     if (name.length < 3) {
//       toast.error('Name is too short!', { autoClose: 3000, hideProgressBar: false, closeOnClick: true, draggable: true });
//       return;
//     }
//     if (!isValidEmail) {
//       toast.error('Enter valid email');
//       return;
//     }
//     if (!email) {
//       toast.error('Enter valid email');
//       return;
//     }
//     if (phoneno.length < 10 || phoneno.length > 10) {
//       toast.error('Enter valid mobile number');
//       return;
//     }
//     if (!isCaptchaVerified) {
//       toast.error('Please Complete Captcha');
//       return;
//     }

//     setSubmit(true);
//     setEmail('');
//     setName('');
//     setPhone('');
//     try {
    
//         const config = {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//           };
          
//           const res = await axios.post('http://localhost:8081/api/v1/auth/apply',{name,email,phoneno,resume},config);
          
//       console.log(res);

//       if (res.data.success) {
//         toast.success('Feedback submitted successfully');
//         setSubmit(false);
//       } else {
//         console.log('fail');
//         setSubmit(false);
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setSubmit(false);
//       toast.error('Something went wrong!');
//     }
//   };

//   return (
//     <>
//       {submitted ? (
//         <h1>hi</h1>
//       ) : (
//         <>
//           <div className="boxing">
//             <div className="forms">
//               <center>
//                 <h1>Feedback</h1>
//               </center>
//               <input type="text" onChange={nAme} value={jobname} />
//               <input type="text" onChange={nAme} value={name} placeholder="Name" />
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter Your Mail"
//                 value={email}
//                 onKeyUp={check}
//                 onChange={eMail}
//                 style={{ borderColor: isValidEmail ? 'initial' : 'red' }}
//               />
//               {!isValidEmail && <span className="validemail" style={{ color: 'red' }}>Please enter a valid email address.</span>}

//               <input type="file" onChange={rEsume} />
//               <input
//                 type="text"
//                 id="phone"
//                 value={phoneno}
//                 placeholder="Enter Phone Number"
//                 onChange={pHone}
//                 maxLength={10}
//                 style={{ borderColor: isValidPhoneNumber ? 'initial' : 'red' }}
//               />
//               {!isValidPhoneNumber && <p style={{ color: 'red' }}>Please enter a valid phone number with up to 10 digits.</p>}

//               <ReCAPTCHA
//                 className="captcha"
//                 sitekey="6LdKDaopAAAAAIGW8tU1LRki2djXvZzM5e77JxLY"
//                 onChange={checked}
//               />
//               <center>
//                 {submit ? (
//                   <ClipLoader color="green" size={17} />
//                 ) : (
//                   <button id="button" onClick={handleSubmit}>
//                     SUBMIT
//                   </button>
//                 )}
//               </center>
//             </div>
//           </div>
//           <Toaster />
//         </>
//       )}
//     </>
//   );
// };

// export default Apply;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

import './Apply.css';

const Apply = () => {
  const { jobname } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhone] = useState('');
  const [submit, setSubmit] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [resume, setResume] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const check=(e)=>{
    if(e.key==="Enter"){setEmail(e.target.value)
 

    setIsValidEmail(emailRegex.test(email));}
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;

 
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => {setEmail(e.target.value)
    setIsValidEmail(emailRegex.test(email));}
  const handlePhoneChange= (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 10) {
      setPhone(input);
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }
  };
  const handleCaptchaChange = () => setIsCaptchaVerified(true);
  const handleFileChange = (e) => setResume(e.target.files[0]);

  const handleSubmit = async () => {
    console.log(resume);
    if (!name || name.length < 3) {
      toast.error('Name is too short!', { duration: 3000 });
      return;
    }
    if(!isValidEmail){
      toast.error('Enter valid mail');
      return;
    }
    if (!email) {
      toast.error('Enter valid email', { duration: 3000 });
      return;
    }
    if(!resume){
      toast.error('Add Resume!', { duration: 3000 });
      return;

    }
    if (!phoneno || phoneno.length !== 10) {
      toast.error('Enter valid 10-digit phone number', { duration: 3000 });
      return;
    }
    if (!isCaptchaVerified) {
      toast.error('Please complete the captcha', { duration: 3000 });
      return;
    }

    setSubmit(true);

    const formData = new FormData();
    formData.append('jobname', jobname);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phoneno', phoneno);
    formData.append('resume', resume);

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.success) {
        toast.success('Application submitted successfully');
      } else {
        toast.error(response.data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Something went wrong!');
    } finally {
      setSubmit(false);
    }
  };

  return (
    <>
      <div className="boxings">
        <div className="forms">
          <center>
            <h1>Application Form</h1>
          </center>
          <input type="text" value={jobname} readOnly />
          <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
          <input type="email" onKeyUp={check} value={email} onChange={handleEmailChange}  style={{ borderColor: isValidEmail ? 'initial' : 'red' }} placeholder="Email" />
          {!isValidEmail && <span className="validemail" style={{ color: 'red' }}>Please enter a valid email address.</span>}
          <label className="label">Upload Resume</label>
         <input required type="file" placeholder='resume' name="resume" onChange={handleFileChange} />
          <input
            type="text"
            value={phoneno}
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            maxLength={10}
          />
          <ReCAPTCHA
            className="captcha"
            sitekey="6LdKDaopAAAAAIGW8tU1LRki2djXvZzM5e77JxLY"
            onChange={handleCaptchaChange}
          />
          <center>
            {submit ? (
              <ClipLoader color="green" size={17} />
            ) : (
              <button id="button" onClick={handleSubmit}>
                SUBMIT
              </button>
            )}
          </center>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Apply;
