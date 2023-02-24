
import "./login.css";
import { useRef } from "react";

export default function Login() {

  const username = useRef();
  const password = useRef();

  const handleClick = () => {
     if(username.current.value==="foo" && password.current.value==="bar"){
        localStorage.setItem("usernameData", "foo")
        localStorage.setItem("passwordData", "bar")
     }
  }

 
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Focus academy</h3>
          <span className="loginDesc">
            Log in to your account.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username-foo"
              type="text"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Password-bar"
              type="password"
              required
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}