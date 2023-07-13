import React from 'react'
import './ModalHrnet.css'

export default function ModalHrnet() {
  return (
    <div className='modal-container'>
      <div className="modal-content">
        <p>Your employee has been created success ! </p>
        <div className="modal-content__ctas flex">
          <button className='btn--plain btn--green'>Return to board</button>
          <button className='btn--plain btn--green'>Add a new employee</button>
        </div>
      </div>
    </div>
  )
}
