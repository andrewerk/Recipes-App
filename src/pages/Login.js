import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
// import RecipesContext from '../context/RecipesContext';
import '../css/pages/Login.css';
import loginPageBgVideo from '../assets/login-page-bg-video.mp4';

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
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
    // setTypeSearch('meal');
    // setTypeDisplaySearch('search');
    // setPropSearch('?s=');
    history.push('/foods');
  };

  return (
    <section
      className="
        container-fluid
        d-flex
        justify-content-center
        align-items-center
        login-page"
    >
      <video loop muted autoPlay>
        <source src={ loginPageBgVideo } type="video/mp4" />
        <track kind="captions" />
      </video>
      <div
        className={ `
        text-white 
        p-5 
        rounded-circle 
        panel 
        ${!isDisable && 'login-panel-valid'}` }
      >
        <h1 className="text-center">Login</h1>
        <form onSubmit={ (e) => handleClick(e) }>
          <div className="form-item">
            <input
              type="text"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ (e) => handleChange(e) }
              required=" "
            />
            <span className="m-0">Email Adress</span>
          </div>
          <div className="form-item">
            <input
              type="password"
              name="pass"
              data-testid="password-input"
              value={ pass }
              onChange={ (e) => handleChange(e) }
              required=" "
            />
            <span className="m-0">Password</span>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              data-testid="login-submit-btn"
              disabled={ isDisable }
              className={ `
              btn 
              btn-outline-light 
              btn-transition 
              ${!isDisable && 'btn-active'}
              ` }
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </section>

  );
}

export default Login;

Login.propTypes = {
  history: object,
}.isRequired;
