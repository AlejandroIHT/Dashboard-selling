import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/components/Modal.css';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="container">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
