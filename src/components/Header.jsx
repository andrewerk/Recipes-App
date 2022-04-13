import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import RecipesContext from '../context/RecipesContext';
import '../css/components/Header.css';

function Header({ title }) {
  const { setSearchBar, searchBar } = useContext(RecipesContext);
  const history = useHistory();
  return (
    <header className="header">
      <input
        data-testid="profile-top-btn"
        type="image"
        src={ profileIcon }
        alt="profile icon"
        onClick={ () => history.push('/profile') }
        className="btn-profile"
      />
      <h1 className="m-0" data-testid="page-title">
        {title}
      </h1>
      <input
        data-testid="search-top-btn"
        type="image"
        src={ searchIcon }
        alt="search icon"
        onClick={ () => setSearchBar(!searchBar) }
        className="btn-search"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
