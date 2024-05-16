import { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import About from "./utils/About";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";


const Header = () => {
  const [loginBtn, setLoginButton] = useState("Login");
  const onlineStatus=useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-slate-700 shadow-2xl text-slate-300 ">
      <div className="logo-container">
        <img className="h-32" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className=" flex mx-12 space-x-8">
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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
