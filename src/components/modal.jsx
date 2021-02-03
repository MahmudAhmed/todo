import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';


function Modal({ContentComponent}) {
  const [display, toggleDisplay] = useState(false);

  const handleToggle = () => {
    toggleDisplay(n => !n)
  };

  const modal = () => {
    const showHideClassName = display ? "modal-background display-block" : "modal-background display-none";
    return (
      <div className={showHideClassName}>
      <section className="modal-content">
          <ContentComponent />
          <button id="modal-close-btn" type="button" onClick={handleToggle}>Done</button>
      </section>
    </div>
    )
  }

  return (
    <div className="modal-container">
      <button onClick={handleToggle}><FontAwesomeIcon icon={faCogs} id="settings-icon"/></button>
        { modal() }
    </div>
  );
}

export default Modal;
