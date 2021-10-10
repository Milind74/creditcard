import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

import "./navbar.css";
const Navbar = () => {
  const { state, dispatch } = useContext(userContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <div className="con">
            {/* <Nav/> */}
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "#cf2121" }}>
                GetLoan
              </Link>
            </h1>
            <div className="search">
              {" "}
              <input type="text" placeholder="Search" />{" "}
              <i class="fas fa-search" style={{ color: "#cf2121" }}></i>
            </div>
            {/* <Link to="/profile">profile</Link> */}
            <Link to="logout">
              <button className="botton1">Logout</button>
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="con">
            {/* <Nav/> */}
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "#cf2121" }}>
                GetLoan
              </Link>
            </h1>
            <div className="search">
              {" "}
              <input type="text" placeholder="Search" />
              <i class="fas fa-search" style={{ color: "#cf2121" }}></i>
            </div>
            {/* <Link to="/profile">profile</Link> */}
            <Link to="/signup">
              {" "}
              <button className="botton">Signup </button>
            </Link>
            <Link to="/login">
              <button className="botton1">Login</button>
            </Link>
          </div>
        </>
      );
    }
  };
  return (
    <div>
      <RenderMenu />
    </div>
  );
};

export default Navbar;
