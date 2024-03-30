import express, { request } from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import Feedback from '../models/Feedback.mjs'
import Count from '../models/count.mjs'

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gvtejeshreddy111@gmail.com',
    pass: 'dnjy uubm kynd dxbj ', 
  },
});



export const countController=async(req,res)=>{
  try{
  const Counts=await Count.findOne({id:1}) 
   await Count.updateOne(
    {  id:1 },
    { $set: {count:Counts.count+1
     } }
  );
  console.log("counted success")
  const counts=await Count.findOne({id:1}) 
  res.status(201).send({
    
    success:true,
    message:counts.count,
  
})

}
  catch(e){
    console.log(e)
    res.status(500).send({
        success:false,
        message:'error in increment'})

  }


}



export  const feedbackController=async(req,res)=>{
    const {name,email,phoneno,feedback}=req.body
    try{
    const feed=await new Feedback({
                name,
                email,
                phoneno,
                feedback
            }).save();
            const mailoptions = {
              from: 'gvtejeshreddy111@gmail.com',
              to: email,
              subject:'Thank You for your Feedback!',
              text:`Dear${name}\nOn behalf of Vaaj Labs, I wanted to extend my sincere gratitude for taking the time to share your feedback with us. Your insights are incredibly valuable and help us improve our services to better meet the needs of our users.`
            };
             transporter.sendMail(mailoptions, (error, info) => {
              if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ success: false, message: 'Error while Submitting!' });
              }    
            
            });


res.status(201).send({
    success:true,
    message:'Feed back submitted successfully!',
})
    }
    catch(e){
        console.log(e)
        res.status(500).send({
            success:false,
            message:'error in submition'
        })
    }
}






export const contactController=(req, res) => {
  const {name,email,phoneno,feedback } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  

  const mailOptions = {
    from: email,
    to: 'gvtejeshreddy111@gmail.com',
    subject:'Feedback!',
    text:`From:Name:${name}\n${email}\nphone No: ${phoneno}\n\nMessage: ${feedback}\n\n\nThank You for contacing us.we will reach you out shortly`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Error while Submitting!' });
    }    
       res.status(200).json({ success: true, message: 'Submitted Successfully!' });
  });
};
