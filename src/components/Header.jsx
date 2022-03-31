import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/Header.css';
import RecipesContext from '../context/RecipesContext';

function Header({ title }) {
  const { setSearchBar, searchBar } = useContext(RecipesContext);
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
      <input
        data-testid="search-top-btn"
        type="image"
        src={ searchIcon }
        alt="search icon"
        onClick={ () => setSearchBar(!searchBar) }
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
