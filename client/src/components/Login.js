// Login.js
import { loginUrl } from "./Authenticate";

function Login({ onLogin }) {
  return (
      <div className="login" onClick={onLogin} style={{ cursor: 'pointer' }}>
      <br /> 
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      <br />
      <br /> 
    </div>
  );
}
export default Login;
