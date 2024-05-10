import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import About from "./utils/About";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginButton] = useState("Login");
  const onlineStatus=useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            onlineStatus:{onlineStatus?"✅":"🔴"}
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn == "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
              console.log(loginBtn);
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
