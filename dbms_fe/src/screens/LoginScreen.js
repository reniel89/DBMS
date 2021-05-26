import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'

export default function LoginScreen({ location, history }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin)
  const { loading, error, userInfo } = userSignin;
	
	//url query string
  const redirect = location.search ? location.search.split('=')[1] : '/home';
  
  useEffect(() => {
	if(userInfo) {
	  history.push(redirect)
	}
  }, [history, userInfo, redirect]);
  
  const submitHandler = (e) => {
	e.preventDefault()
	dispatch(signin(email, password)) 
  }

  return(
	<div className='form'>
	  <FormContainer className='login'>
	  	<h1 className='login-header'>Sign in</h1>
		{ error && <Message variant='danger'> {error} </Message> }
		{ loading && <Loader /> }
		<Form className='login-form' onSubmit={submitHandler}>
		  <Form.Group>
			<Form.Label>Email</Form.Label>
			<Form.Control
			  type="email"
			  placeholder="Enter your email"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)} 
			/>
		  </Form.Group>

		  <Form.Group>
			<Form.Label>Password</Form.Label>
			<Form.Control
			  type="password"
			  placeholder="Enter your password"
			  value={password}
			  onChange={(e) => setPassword(e.target.value)} 
			/>
		  </Form.Group>
		  <Button type='submit' variant='primary'>Sign in</Button>
		</Form>

		<Row className='py-3'>
		  New Customer? {' '}
		  <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
		  	Create an account
		  </Link>
		</Row>
	  </FormContainer>
	</div>
  )
}