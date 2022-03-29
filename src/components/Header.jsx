import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/Header.css';

function Header({ title }) {
  return (
    <header>
      <input
        className="header-btn"
        data-testid="profile-top-btn"
        type="image"
        src={ profileIcon }
        alt="profile icon"
      />
      <h1 data-testid="page-title">
        {title}
      </h1>
      <input
        data-testid="search-top-btn"
        type="image"
        src={ searchIcon }
        alt="search icon"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
