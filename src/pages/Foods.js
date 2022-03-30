import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods({ history }) {
  return (
    <div>
      <div>
        <Header title="Foods" />
      </div>
      <button
        type="button"
        onClick={ () => history.push('/explore') }
      >
        Explore
      </button>
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Foods;
