import React from 'react';

const LoginComponent = () => (
  <div>
    <input type="email" data-testid="email-input" placeholder="Email:" />
    <input type="password" data-testid="password-input" placeholder="Password:" />
    <button type="button" data-testid="login-submit-btn">Enter</button>
  </div>

);

export default LoginComponent;
