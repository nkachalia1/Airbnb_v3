import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import './LoginForm.css';

const SignUpModal = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.signup({ username, email, password }))
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
        <div className="modal">
        <div className="modal-content">
            <div className='modalHeader'>
                <button onClick={onClose}>X</button>
                Login or Sign Up
            </div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <label>
                    Email
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Username
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Password
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Confirm Password
                    <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
      </div>


    );
  };


export default SignUpModal;
