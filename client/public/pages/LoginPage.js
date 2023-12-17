
import React, { useContext } from 'react';
import Login from './Login';
import '../styles/App.css';
function LoginPage() {
    const redirectLogin = () => {
        window.location.href = 'http://localhost:3001/analyze-mood';
    };

  return (
      <>
    <div>
        <header>
            <h1>Ready to see what song fits your mood?</h1>
        </header>
        <br />
        <br />

        <Login onLogin={redirectLogin} />

        <br />
    </div>
    </>
  );
}


export default LoginPage;