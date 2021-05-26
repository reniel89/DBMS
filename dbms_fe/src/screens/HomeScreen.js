import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout } from '../actions/userActions'

export default function HomeScreen() {
  const dispatch = useDispatch()
  const signoutHandler = (e) => {
    e.preventDefault()
    dispatch(signout())
  }

  return (
    <div>
      Home Screen
      <Link onClick={signoutHandler}>Sign out</Link>
    </div>
  )
}
