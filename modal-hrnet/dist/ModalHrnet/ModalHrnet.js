import React from 'react';
import './ModalHrnet.css';
export default function ModalHrnet({
  openModal
}) {
  if (openModal === true) {
    console.log("FORM CORRECT");
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content__header text--center mb--md"
    }, /*#__PURE__*/React.createElement("p", {
      className: "title--lg"
    }, "Your employee has been created success ! ")), /*#__PURE__*/React.createElement("div", {
      className: "modal-content__ctas flex justify-content--center"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn--plain btn--green btn-modal"
    }, "Return to board"), /*#__PURE__*/React.createElement("button", {
      className: "btn--plain btn--green btn-modal"
    }, "Add a new employee"))));
  } else {
    console.log("FORM NOCOMPLETE");
  }
}