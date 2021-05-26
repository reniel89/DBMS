import asyncHandler from 'express-async-handler'
import generateToken from '../utils.js'
import User from '../models/userModel.js'

// @desc    Register a user
// @route   GET /api/user/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  
  const userExists = await User.findOne({ email });
  if (userExists){
    res.status(400).send({ message: 'User already Exists' });
  }
  
  const user = await User.create({
    fullName,
    email,
    password,
  });
  
  if (user) {
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      isDoctor: user.isDoctor,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400).send({ message: 'Create New Account Failed' });
  }
});

// @desc    Login User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  //validate email and password first
  if (user) {
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        isDoctor: user.isDoctor,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(404).send({ message: 'Invalid Credentials' });
    }
  } else {
    res.status(404).send({ message: 'User does not exist' });
  }
})

export {
  registerUser,
  loginUser,
}