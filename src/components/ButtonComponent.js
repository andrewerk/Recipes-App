import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ButtonComponent({ type, buttonText, url }) {
  const history = useHistory();
  const handleClick = () => {
    if (url === '/') localStorage.clear();
    history.push(url);
  };

  return (
    <button
      id="button"
      type="button"
      data-testid={ `profile-${type}` }
      onClick={ handleClick }
    >
      { buttonText }
    </button>
  );
}

ButtonComponent.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default ButtonComponent;
