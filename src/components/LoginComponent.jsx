import React, { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDisableButton = () => {
    const MIN_LENGTH = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailValido = emailRegex.test(email);

    if (password.length > MIN_LENGTH && emailValido) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        placeholder="Email:"
        onChange={ ({ target }) => setEmail(target.value) }
        value={ email }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Password:"
        onChange={ ({ target }) => setPassword(target.value) }
        value={ password }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ handleDisableButton() }
      >
        Enter

      </button>
    </div>
  );
};

export default LoginComponent;
