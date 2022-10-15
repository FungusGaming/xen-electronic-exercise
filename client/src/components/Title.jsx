import React, { useCallback } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Title = ({ title, haveBack }) => {
  const navigate = useNavigate()
  const navigateBack = useCallback(() => navigate(-1))
  return (
    <div className='flex-row'>
      {haveBack && <button className='trans-button' onClick={navigateBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>}
      <h1>{title}</h1>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  haveBack: PropTypes.bool,
}

export default Title
