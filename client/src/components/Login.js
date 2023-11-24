// Login.js
import React from 'react';
import { loginUrl } from "./Authenticate"; 

function Login() {
  return (
    <div className="login">
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      <br />
      <br /> 
    </div>
  );
}

export default Login;
