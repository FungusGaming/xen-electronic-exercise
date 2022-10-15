import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import API from '../app/api'
import { handleAxiosError } from '../app/function';
import { setMessage } from '../features/message/messageSlice';

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

  const handleSignIn = useCallback((e) => {
    e.preventDefault()
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
    <div className='b-primary flex-column flex-one'>
      <div className='flex-one flex-column align-center justify-center'>
        <form id='sign-in' className='sign-in-form b-white flex-column p-xl' onSubmit={handleSignIn}>
          <div className='input-f'>
            <label>Username:</label>
            <input name='username' value={inputValues.username} onChange={handleOnChange} type='text' />
          </div>
          <div className='input-f'>
            <label>Password:</label>
            <input name='password' value={inputValues.password} onChange={handleOnChange} type='password' />
          </div>
          <button className='primary-button mt-l'>
            Sign In
          </button>
          <Link to={'/signup'} className='tertiary-button mt-l'>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Signin