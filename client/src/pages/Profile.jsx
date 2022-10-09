import React from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../app/api'

const Profile = () => {
  const navigate = useNavigate()
  const logout = useCallback(() => {
    API.logout().then(() => {
      navigate('/')
    })
  })
  return (
    <div>
      <h2>Profile</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile