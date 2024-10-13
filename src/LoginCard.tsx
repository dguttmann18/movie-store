import { useState } from "react";

function LoginCard() {
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);

  return (
    <div className="box">
      <div className="input-box">
        <label>Username:</label>
        <br />
        <input type="text"></input>
      </div>

      <div className="input-box">
        <label>Password:</label>
        <br />
        <input type="password"></input>
      </div>

      {isInvalidLogin && (
        <label className="invalid-login">
          Invalid login credentials provided!
        </label>
      )}

      <div className="command-box">
        <button>Login</button>
        <br />
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}

export default LoginCard;
