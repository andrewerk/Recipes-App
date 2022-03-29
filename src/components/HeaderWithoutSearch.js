import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import '../css/Header.css';

function HeaderWithoutSearch({ title }) {
  const history = useHistory();
  return (
    <header>
      <input
        className="header-btn"
        data-testid="profile-top-btn"
        type="image"
        src={ profileIcon }
        alt="profile icon"
        onClick={ () => history.push('/profile') }
      />
      <h1 data-testid="page-title">
        {title}
      </h1>
    </header>
  );
}

HeaderWithoutSearch.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderWithoutSearch;
