import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

export default function RegisterScreen({ location, history }){
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const userRegister = useSelector(state => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const redirect = location.search
  ? location.search.split('=')[1]
  : '/';
  
  const dispatch = useDispatch()
  
  const submitHandler = (e) => {
	e.preventDefault()
	if (password !== confirmPassword) {
		console.log('hindi')
	  setMessage('Passwords do not match')
	} else {
		console.log('match')
	  dispatch(register(fullName, email, password));
	}
  }
  
  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);


  return (
	<div class="login-page">
	  <div class="form">
		<div class="login">
		  <div class="login-header">
			<h3>REGISTER</h3>
			{ message && <Message variant='danger'> {message} </Message> }
        	{ error && <Message variant='danger'> {error} </Message> }
        	{ loading && <Loader /> }
			<p>Please fill the form to register.</p>
		  </div>
		</div>
		<form class="login-form">
			<input 
			  type="text"
			  value={fullName}
			  placeholder="Full Name"
			  onChange={(e) => setFullName(e.target.value)}
			/>
			<input 
			  type="text" 
			  value={email}
			  placeholder="Enter your email"
			  onChange={(e) => setEmail(e.target.value)}
			/>
			<input 
			  type="password" 
			  value={password}
			  placeholder="Enter your password"
			  onChange={(e) => setPassword(e.target.value)}
			/>
			<input 
			  type="password" 
			  value={confirmPassword}
			  placeholder="Confirm password"
			  onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			<button type="submit" onClick={submitHandler}>Register</button>
			<p class="message">Already have an account?  
			  <Link to={redirect ? `/?redirect=${redirect}` : '/'}>Login</Link>
			</p>
		</form>
	  </div>
	</div>
  )
}