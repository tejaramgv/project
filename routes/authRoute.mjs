// import express from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser'
// import {feedbackController,contactController,countController} from '../controllers/authController.mjs'
// const app=express()

// const router=express.Router()
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'gvtejeshreddy111@gmail.com',
//     pass: 'dnjy uubm kynd dxbj ', 
//   },
// });
// router.post('/feedback',feedbackController)
// router.post('/contact',contactController)
// router.put('/countupdate',countController)

// router.post('/apply',async (req, res) => {
//     const { name, email, phoneno, resume } = req.body;
  
//     // Send email with resume content as attachment
//     try {
//       await transporter.sendMail({
//         from: 'gvtejeshreddy111@gmail.com',
//         to: 'gvtejeshreddy111@gmail.com',
//         subject: 'Application Submission',
//         text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneno}\n\nPlease find attached my resume.`,
//         attachments: [
//           {
//             filename: 'resume.pdf', // Change the filename as needed
//             content: resume, // Use the resume content directly from the request
//           },
//         ],
//       });
//       console.log('Email sent successfully');
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Error sending email' });
//     }
//   });
  
  
  



// export default router;

// import express from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import fileUpload from 'express-fileupload';

// const app = express();
// const router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(fileUpload());

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'gvtejeshreddy111@gmail.com',
//       pass: 'dnjy uubm kynd dxbj ', 
//     },
//   });

// router.post('/apply', async (req, res) => {
//   const { name, email, phoneno } = req.body;
//   console.log(name);
//   const resume = req.files.resume; // Access resume file from req.files object
// console.log(resume);
//   if (!resume) {
//     return res.status(400).json({ success: false, error: 'Resume file is required' });
//   }

//   // Send email with resume content as attachment
//   try {
//     await transporter.sendMail({
//       from: 'gvtejeshreddy111@gmail.com',
//       to: 'gvtejeshreddy111@gmail.com',
//       subject: 'Application Submission',
//       text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneno}\n\nPlease find attached my resume.`,
//       attachments: [
//         {
//           filename: resume.name, // Use the original filename for the attachment
//           content: resume.data, // Use the resume data from the file
//         },
//       ],
//     });
//     console.log('Email sent successfully');
//     res.status(200).json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, error: 'Error sending email' });
//   }
// });

// export default router;



import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';

const app = express();

const router = express.Router();
// Multer setup
router.post('/feedback',feedbackController)
router.post('/contact',contactController)
router.put('/countupdate',countController)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gvtejeshreddy111@gmail.com',
      pass: 'dnjy uubm kynd dxbj ', 
    },
  });

// Route to handle email sending
router.post('/apply', upload.single('resume'), async (req, res) => {
  const {jobname,name, email, phoneno} = req.body;
  const { originalname, buffer } = req.file;

  const mailOptions = {
    from: 'gvtejeshreddy111@gmail.com',
    to: 'gvtejeshreddy111@gmail.com',
    subject: 'Job Application',
    text: `Application For: ${jobname}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneno}\n\nFind the Resume in Below Attachement:`,
    attachments: [{ filename: originalname, content: buffer }],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({success:true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({success:false, error: 'An error occurred while sending email' });
  }
});


export default router;