import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ id, showModal, vCenter, hCenter, children, bodyClass }) => (
  <div id={`modal-${id}`}>
    {showModal && <div>
      <div className={`modal-overlay flex-column${vCenter ? ' justify-center' : ''}${hCenter ? ' align-center' : ''}`}>
        <div className={`modal-body flex-column ${bodyClass}`}>
          {children}
        </div>
      </div>
    </div>}
  </div>
);

Modal.propTypes = {
  id: PropTypes.string,
  showModal: PropTypes.bool,
  vCenter: PropTypes.any,
  hCenter: PropTypes.any,
  children: PropTypes.any,
  bodyClass: PropTypes.string,
}

export default Modal
