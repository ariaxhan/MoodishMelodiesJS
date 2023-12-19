import Login from './Login';
import '../styles/App.css';
import Typewriter from "typewriter-effect";
import React from "react";

// page to display login button
function LoginPage() {
    const redirectLogin = () => {
        window.location.href = 'http://localhost:3001/analyze-mood';
    };
  return (
      <>
          <div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h3   >
                  <Typewriter
                      options={{
                          strings: ['Ready to see what song fits your mood?'],
                          autoStart: true,
                          loop: false,
                      }}
                  />
              </h3>
              <br/>

              <Login onLogin={redirectLogin}/>

              <br/>
          </div>
      </>
  );
}


export default LoginPage;