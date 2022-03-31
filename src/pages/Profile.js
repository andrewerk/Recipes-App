import React from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Profile({ history }) {
  const [{ email }] = useLocalStorage('user', '');
  const handleClick = (path) => {
    if (path === '/') localStorage.clear();
    history.push(path);
  };
  return (
    <div>
      <HeaderWithoutSearch title="Profile" />
      <p data-testid="profile-email">{email}</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => handleClick('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => handleClick('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => handleClick('/') }
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  history: PropTypes.node.isRequired,
};
