import express from 'express'
import {
  registerUser,
  loginUser,
} from '../controllers/userControllers.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/', loginUser)

export default router