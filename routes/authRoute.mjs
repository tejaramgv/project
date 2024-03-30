import express from 'express'
import {feedbackController,contactController,countController} from '../controllers/authController.mjs'

const router=express.Router()
router.post('/feedback',feedbackController)
router.post('/contact',contactController)
router.put('/countupdate',countController)

export default router;
