import React from 'react'
import './ModalHrnet.css'

export default function ModalHrnet({openModal}) {
  if(openModal === true) {
    console.log("FORM CORRECT")
    return (
      <div className='modal-container'>
        <div className="modal-content">
          <div className='modal-content__header text--center mb--md'>
            <p className='title--lg'>Your employee has been created success ! </p>
          </div>
          <div className="modal-content__ctas flex justify-content--center">
            <button className='btn--plain btn--green btn-modal'>Return to board</button>
            <button className='btn--plain btn--green btn-modal'>Add a new employee</button>
          </div>
        </div>
      </div>
    )
  } else {
    console.log("FORM NOCOMPLETE")
  }
}
