import React from 'react';
import PropTypes from 'prop-types';

function Foods({ history }) {
  return (
    <button
      type="button"
      onClick={ () => history.push('/explore') }
    >
      Explore
    </button>
  );
}

Foods.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Foods;
