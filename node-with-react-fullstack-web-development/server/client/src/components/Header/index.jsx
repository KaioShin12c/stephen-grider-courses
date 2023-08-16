import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);

  const onLogoutClick = () => {
    dispatch(getLogout());
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={user ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            {user ? (
              <a href="/api/logout">Logout</a>
            ) : (
              <a href="/auth/google">Login with Google </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
