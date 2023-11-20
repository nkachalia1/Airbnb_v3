import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const LoginModal = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.login({ credential, password }))
        .catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
    }

    if (!isOpen) {
        return null; // Don't render anything if the modal is closed
    }

    return (
      <div className="modal-container">
          <div className="modal">
              <div className="modal-content">
                  <div className='modalHeader'>
                      <button onClick={onClose}>X</button>
                      Login or Sign Up
                  </div>
                  <form className='authForm' onSubmit={handleSubmit}>
                      <ul className="error-list">
                          {errors.map(error => <li key={error}>{error}</li>)}
                      </ul>
                      <label className="input-label">
                          Username or Email
                          <input
                              type="text"
                              value={credential}
                              onChange={(e) => setCredential(e.target.value)}
                              required
                          />
                      </label>
                      <label className="input-label">
                          Password
                          <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                          />
                      </label>
                      <button type="submit" className="login-button">Log In</button>
                  </form>
              </div>
          </div>
      </div>
  );

  };


export default LoginModal;
