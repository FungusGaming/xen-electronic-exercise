import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import API from '../app/api'
import { handleAxiosError } from '../app/function';
import { setMessage } from '../features/message/messageSlice';
import BasicLayout from '../layout/basic';

const Signup = () => {
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

  const handleSignup = useCallback(() => {
    API.signup({ username: inputValues.username, password: inputValues.password }).then(() => {
      dispatch(setMessage('Account registered!'))
      navigate('/signin')
    }).catch(err => {
      dispatch(setMessage(handleAxiosError(err)))
    })
  })
  // TODO improve ui
  return (
    <BasicLayout>
      <div id='sign-up'>
        <div>
          <label>Username:</label>
          <input name='username' value={inputValues.username} onChange={handleOnChange} type='text' />
        </div>
        <div>
          <label>Password:</label>
          <input name='password' value={inputValues.password} onChange={handleOnChange} type='password' />
        </div>
        <button onClick={handleSignup}>
          Sign Up
        </button>
        <Link to={'/signin'}>
          Already have account?
        </Link>
      </div>
    </BasicLayout>
  )
}

export default Signup