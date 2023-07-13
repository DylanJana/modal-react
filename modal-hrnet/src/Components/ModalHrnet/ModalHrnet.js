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
          <div className="modal-content__ctas flex">
            <button className='btn--plain btn--green'>Return to board</button>
            <button className='btn--plain btn--green'>Add a new employee</button>
          </div>
        </div>
      </div>
    )
  } else {
    console.log("FORM NOCOMPLETE")
  }
}
