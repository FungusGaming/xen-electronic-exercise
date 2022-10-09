import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import API from '../app/api'
import { handleAxiosError } from '../app/function';
import { setMessage } from '../features/message/messageSlice';
import BasicLayout from '../layout/basic';

const Signin = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
    password: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ searchParams ] = useSearchParams()
  const redirect = searchParams.get("redirect")
  useEffect(() => {
    handleSync()
  }, [])

  const handleOnChange = useCallback(e => {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
  })

  const handleSync = () => {
    API.sync().then(() => {
      dispatch(setMessage('Signing in'))
      navigate('/profile')
    }).catch(err => {
      dispatch(setMessage(handleAxiosError(err)))
    })
  }

  const handleSignIn = useCallback(() => {
    API.signin({ username: inputValues.username, password: inputValues.password }).then(() => {
      dispatch(setMessage('Welcome!'))
      if(redirect) navigate(redirect)
      else navigate(-1)
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