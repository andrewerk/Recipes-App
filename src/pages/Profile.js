import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import ButtonComponent from '../components/ButtonComponent';

function Profile() {
  const email = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <HeaderWithoutSearch title="Profile" />
      <h2 data-testid="profile-email">{ email.email }</h2>
      <ButtonComponent
        type="done-btn"
        buttonText="Done Recipes"
        url="/done-recipes"
      />
      <ButtonComponent
        type="favorite-btn"
        buttonText="Favorite Recipes"
        url="/favorite-recipes"
      />
      <ButtonComponent
        type="logout-btn"
        buttonText="Logout"
        url="/"
      />
      <Footer />
    </div>
  );
}

export default Profile;
