import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Profile() {
  const history = useHistory();
  const handleClick = (path) => {
    if (path === '/') localStorage.clear();
    history.push(path);
  };

  return (
    <div>
      <HeaderWithoutSearch title="Profile" />
      <p data-testid="profile-email">{email.email}</p>
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
