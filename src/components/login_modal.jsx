import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
window.axios = axios;

function LoginModal() {
  const [display, toggleDisplay] = useState(true);
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [disabled, toggleDisabled] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleAuth = () => {
    toggleDisplay(n => !n);
    setErrors("");
    changePassword("");
    changeEmail("");
  };

  const modal = () => {
    const showHideClassName = display ? "modal-background display-block" : "modal-background display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-content">
          {loginForm()}
          {/* <button id="modal-close-btn" type="button" onClick={handleAuth}>Done</button> */}
        </section>
      </div>
    )
  }


  const handleFormSubmission = async (e) => {
    e.preventDefault();
    debugger
    if (email === "" || password === "") {
      setErrors(["Email/Password field cannot be blank!"])
    } else if (password.length < 4) {
      setErrors(["Password must be atleast 4 characters long!"])
    } else {
      toggleDisabled(true)
      var data = new FormData();
      data.append("email", email)
      data.append("password", password)
      await axios.post(`https://dev.rapptrlabs.com/Tests/scripts/user-login.php`, data)
        .then(res => {
          debugger
          toggleDisabled(false);
          handleAuth();
        }, err => {
          debugger
          setErrors([err.response.data.message])
          toggleDisabled(false)
        })
    }
  }


  const loginForm = () => {
    return (
      <div className="login-form-container">
        <h2 id="form-title">Rapptr Labs</h2>
        <form onSubmit={handleFormSubmission} >
          <p id="form-errors">{errors}</p>
          <label className="form-label">
            Email:
          </label>
          <input
            className="login-field"
            type="email"
            name="email"
            value={email}
            placeholder={"user@rapptrlabs.com"}
            onChange={e => changeEmail(e.target.value)}
            disabled={disabled}
          />
          <label className="form-label">
            Password:
          </label>
          <input
            className="login-field"
            type="password"
            name="password"
            value={password}
            placeholder={"Must be at least 4 characters"}
            onChange={e => changePassword(e.target.value)}
            disabled={disabled}
          />
          <button disabled={disabled} type="submit" id="login-btn" >Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className="modal-container logout-modal">
      <button onClick={handleAuth}><FontAwesomeIcon icon={faSignOutAlt} id="user-icon" /></button>
      { modal()}
    </div>
  );
}

export default LoginModal;

