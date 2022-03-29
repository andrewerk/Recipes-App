import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Foods({ history }) {
  return (
    <div>
      <button
        type="button"
        onClick={ () => history.push('/explore') }
      >
        Explore
      </button>
      <div>
        <Header title="Foods" />
      </div>
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Foods;
