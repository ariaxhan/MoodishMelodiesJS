// Login.js
import { loginUrl } from "./Authenticate";

function Login() {
  return (
    <div className="login">
      <br /> 
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      <br />
      <br /> 
    </div>
  );
}

export default Login;
