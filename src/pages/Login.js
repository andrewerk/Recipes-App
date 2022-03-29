import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';

function Login(props) {
  const INITIAL_STATE = {
    email: '',
    pass: '',
  };
  const [inputValue, setInputValue] = useState(INITIAL_STATE);
  const [isDisable, setisDisable] = useState(true);
  const { email, pass } = inputValue;

  useEffect(() => {
    const emailIsValid = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      .test(inputValue.email);
    const passIsValid = () => /^.{7,}$/
      .test(inputValue.pass);
    const validation = emailIsValid() && passIsValid();

    if (validation) {
      setisDisable(false);
    } else setisDisable(true);
  }, [inputValue]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { history } = props;
    const user = {
      email,
    };
    console.log('click');
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/foods');
  };

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        data-testid="email-input"
        placeholder="someone@email.com"
        value={ email }
        onChange={ (e) => handleChange(e) }
      />
      <input
        type="password"
        name="pass"
        data-testid="password-input"
        placeholder="Password"
        value={ pass }
        onChange={ (e) => handleChange(e) }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        onClick={ (e) => handleClick(e) }
        disabled={ isDisable }
      >
        Enter
      </button>
    </>

  );
}

export default Login;

Login.propTypes = {
  history: object,
}.isRequired;
