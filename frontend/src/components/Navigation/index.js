import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginModal from './login_modal';
import SignUpModal from './signup_modal';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    const dropdown = document.querySelector("#dropdown");

    // Toggle visibility
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  const [loginOpen, setloginOpen] = useState(false);
  const [signupOpen, setsignupOpen] = useState(false);

  const openLogin = (e) => {
    setloginOpen(true);
    setsignupOpen(false);
  }
  const openSignup = (e) => {
    setsignupOpen(true);
    setloginOpen(false);
  }

  const closeModal = (e) => {
    setsignupOpen(false);
    setloginOpen(false);
  }

  const currentUser = useSelector(state => {
    return state.session.user;
  });

  return (
    <header id='navbar'>

      <NavLink exact to="/">
        <img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png?20230603231949' alt="Airbnb Logo" />
      </NavLink>

      <div id='right_profile_button' onClick={handleClick}>
        {/* Replace the text "Profile" with the image */}
        <div className="menu-icon"></div>
        {/* Use the src attribute directly in the img tag */}
        <i className="fa-solid fa-user-circle" style={{fontSize: "1.5rem"}}></i>
        <div id='dropdown'>
          {/* Container for login and sign-up links */}
          {
            !currentUser && (
              <div className='auth-links'>
                <div id='login' onClick={openLogin}>
                  Login
                </div>
                <div id='signup' onClick={openSignup}>
                  Sign Up
                </div>
              </div>
            )
          }
        </div>
      </div>

      <LoginModal isOpen={loginOpen} onClose={closeModal}/>
      <SignUpModal isOpen={signupOpen} onClose={closeModal}/>
    </header>
  );

}

export default Navigation;
