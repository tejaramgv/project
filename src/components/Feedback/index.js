import {useState} from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

import './feedbackindex.css'

const Feedback=()=>{
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
        toast.error('name is too short!',{
          autoClose: 3000, // Close the notification after 3 seconds
          hideProgressBar: false, // Show the progress bar
          closeOnClick: true, // Close the notification when clicked
          draggable: true, // Allow dragging the notification
        });
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
        toast.error('Enter Feedback');
        return;
       }
       setSubmit(true)
       setEmail("")
        setName("")
        setPhone("")
        setFeedback("")
       try {
        const res = await axios.post(`http://localhost:8081/api/v1/auth/feedback`, { name, email,phoneno,feedback });
        console.log(res);
  
        if (res.data.success) {
            toast.success("Feedback submitted successfully");
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


<>{submitted?<h1>hi</h1>:
<>


   
    <div className="boxing">
        <div className="boximg">
          <img src="https://images.pexels.com/photos/6935187/pexels-photo-6935187.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </div>
  
         <div className="forms">
            <center><h1>Feedback</h1></center>
    <input type="text" onChange={nAme} value={name} placeholder="Name"/>
    <input type="mail" onChange={eMail} value={email} placeholder="Email"/>
    <input type="text" onChange={pHone} value={phoneno} placeholder="Phone No"/>
    <textarea id="textarea" onChange={fEed} value={feedback} placeholder="Your Message" name="textarea" rows="8" cols="50"></textarea>
    <center>
    {submit?<ClipLoader color="green"  size={17} />: <button id="button" onClick={handleSubmit}>
          SUBMIT
        </button>}



    </center>
    </div>
  



</div>   <Toaster/>
 </>}
</>
)
}


export default Feedback