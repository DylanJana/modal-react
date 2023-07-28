import React from 'react';
import './ModalHrnet.css';
export default function ModalHrnet({
  openModal,
  onClose,
  resetForm
}) {
  let body = document.querySelector('body');
  if (openModal === true) {
    body.classList.add('no--scroll');
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content__header text--center mb--md"
    }, /*#__PURE__*/React.createElement("p", {
      className: "title--lg"
    }, "Your employee has been created success\xA0! ")), /*#__PURE__*/React.createElement("div", {
      className: "modal-content__ctas flex justify-content--center"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn--plain btn--green btn-modal",
      onClick: onClose
    }, "Return to board"), /*#__PURE__*/React.createElement("button", {
      className: "btn--plain btn--green btn-modal",
      onClick: resetForm
    }, "Add a new employee"))));
  } else {
    body.classList.remove('no--scroll');
  }
}