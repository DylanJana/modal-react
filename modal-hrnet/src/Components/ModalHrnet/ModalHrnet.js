import './ModalHrnet.css'

  /**
  * Saves the obtained values ​​and manages their types. After update state
  *
  * @params boolean
  * @params function = navigateToEmployeesTable, this function is in main project Hrnet. When user click
  * on "Return to board" button, he's navigate to board page
  * @params function = resetForm,  this function is in main project Hrnet. When user click
  * on "Add a new employee" button, the form is reset
  * 
  * @author Dylan
  * @version 1.0
  */

export default function ModalHrnet({openModal, onClose, resetForm}) {
  let body = document.querySelector('body')
  if(openModal === true) {
    body.classList.add('no--scroll')
    return (
      <div className='modal-container'>
        <div className="modal-content">
          <div className='modal-content__header text--center mb--md'>
            <p className='title--lg'>Your employee has been created success&nbsp;! </p>
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
