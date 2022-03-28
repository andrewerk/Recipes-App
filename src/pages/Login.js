import React from 'react';

function Login() {
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        data-testid="email-input"
        placeholder="someone@email.com"
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Password"
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </>

  );
}

export default Login;
