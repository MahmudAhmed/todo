import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function LoginModal() {
  const [display, toggleDisplay] = useState(true);
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [disabled, toggleDisabled] = useState(false);
  const [authErrors, setAuthErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleAuth = () => {
    toggleDisplay(n => !n);
    setAuthErrors([]);
    setEmailErrors([]);
    setPasswordErrors([]);
    changePassword("");
    changeEmail("");
  };

  const modal = () => {
    const showHideClassName = display ? "modal-background display-block" : "modal-background display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-content">
          {loginForm()}
        </section>
      </div>
    )
  }

  const handleEmailValidation = () => {
    const emialErrs = [];
    if (email === "") {
      emialErrs.push("Email field cannot be blank")
    } else if (email.length >= 50) {
      emialErrs.push("Email should be less than 50 characters long")
    }
    
    setEmailErrors(emialErrs);

    return emialErrs.length > 0;
  }

  const handlePasswordValidation = () => {
    const passErrs = [];
 
    if (password === "") {
      passErrs.push("Password field cannot be blank")
    } else if (password.length < 4) {
      passErrs.push("Password must be atleast 4 characters long")
    }

    setPasswordErrors(passErrs);

    return passErrs.length > 0;
  }

  // we break this down make sure to call both validation functions to get errors for email & password at the same time. 
  // () => handleEmailValidation() || handlePasswordValidation(); => only updates emails errors only becuase of truthy value
  const formHasErrors = () => {
    let hasErrors = false;
    if (handleEmailValidation()) hasErrors = true;
    if (handlePasswordValidation()) hasErrors = true;
    return hasErrors
  }


  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setAuthErrors([]);

    if (!formHasErrors()) {
      toggleDisabled(true)
      var data = new FormData();
      data.append("email", email)
      data.append("password", password)
      await axios.post(`https://dev.rapptrlabs.com/Tests/scripts/user-login.php`, data)
        .then(res => {
          toggleDisabled(false);
          handleAuth();
        }, err => {
          setAuthErrors([err.response.data.message])
          toggleDisabled(false)
        })
    }

  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmission(e);
    }
  }


  const loginForm = () => {
    return (
      <div className="login-form-container">
        <h2 id="form-title">Rapptr Labs</h2>
        <form onSubmit={handleFormSubmission} >
          <p id="form-errors">{authErrors}</p>
          <label className="form-label">
            Email:
          </label>
          <div className="form-input-container">
            <FontAwesomeIcon icon={faUser} id="user-icon" />
            <input
              className={`login-field ${emailErrors.length > 0 ? "invalid" : ""}`}
              type="email"
              name="email"
              value={email}
              placeholder={"user@rapptrlabs.com"}
              onChange={e => { changeEmail(e.target.value); handleEmailValidation();}}
              disabled={disabled}
              onKeyPress={handleKeyPress}
            />
          </div>
          {emailErrors.map( err => <p className="input-errors">{err}</p>)}
          <label className="form-label">
            Password:
          </label>
          <div className="form-input-container">
            <FontAwesomeIcon icon={faLock} id="lock-icon" />
            <input
              className={`login-field ${passwordErrors.length > 0 ? "invalid" : ""}`}
              type="password"
              name="password"
              value={password}
              placeholder={"must be at least 4 characters"}
              onChange={e => { changePassword(e.target.value); handlePasswordValidation();}}
              disabled={disabled}
              onKeyPress={handleKeyPress}
            />
          </div>
          {passwordErrors.map(err => <p className="input-errors">{err}</p>)}
          <button disabled={disabled} type="submit" id="login-btn" >Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className="modal-container logout-modal">
      <button title="Sign Out" onClick={handleAuth}><FontAwesomeIcon icon={faSignOutAlt} id="logout-icon" /></button>
      { modal()}
    </div>
  );
}

export default LoginModal;

