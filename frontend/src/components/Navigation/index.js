import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginModal from './login_modal';

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

  const [isOpen, setisOpen] = useState(false);

  const openModal = (e) => {
    setisOpen(true);
  }

  const closeModal = (e) => {
    setisOpen(false);
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
        <img src="frontend/src/components/Navigation/bnb_icon.png" className="profile-pic" />
      </div>
      <div id='dropdown'>
        {/* Container for login and sign-up links */}
        {
          !currentUser && (
            <div className='auth-links'>
              <div id='login' onClick={openModal}>
                Login
              </div>
            </div>
          )
        }
      </div>

      <LoginModal isOpen={isOpen} onClose={closeModal}/>
    </header>
  );

}

export default Navigation;
