import React from 'react'
import './ModalHrnet.css'

export default function ModalHrnet({openModal, onClose, resetForm}) {
  let body = document.querySelector('body')
  if(openModal === true) {
    body.classList.add('no--scroll')
    return (
      <div className='modal-container'>
        <div className="modal-content">
          <div className='modal-content__header text--center mb--md'>
            <p className='title--lg'>Your employee has been created success ! </p>
          </div>
          <div className="modal-content__ctas flex justify-content--center">
            <button 
            className='btn--plain btn--green btn-modal'
            onClick={onClose}
            >
              Return to board
            </button>
            <button 
            className='btn--plain btn--green btn-modal'
            onClick={resetForm}>
              Add a new employee
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    body.classList.remove('no--scroll')
  }
}
