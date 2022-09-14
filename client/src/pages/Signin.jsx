import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import API from '../app/api'
import handleAxiosError from '../app/handleAxiosError';
import { setMessage } from '../features/message/messageSlice';
import BasicLayout from '../layout/basic';

const Signin = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
    password: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnChange = useCallback(e => {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
  })

  const handleSignIn = useCallback(() => {
    API.signin({ username: inputValues.username, password: inputValues.password }).then(() => {
      dispatch(setMessage('Welcome!'))
      navigate('/')
    }).catch(err => {
      dispatch(setMessage(handleAxiosError(err)))
    })
  })

  // TODO improve ui maybe merge with sign up?
  return (
    <BasicLayout>
      <div id='sign-in'>
        <div>
          <label>Username:</label>
          <input name='username' value={inputValues.username} onChange={handleOnChange} type='text' />
        </div>
        <div>
          <label>Password:</label>
          <input name='password' value={inputValues.password} onChange={handleOnChange} type='password' />
        </div>
        <button onClick={handleSignIn}>
          Sign In
        </button>
        <Link to={'/signup'}>
          Sign Up
        </Link>
      </div>
    </BasicLayout>

  )
}

export default Signin