import "./Navbar.css";
import logo from "../assets/logo/Half-logo-t.png";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Navbar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <a className="" href="../index.js">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <ul className={click ? "nav-menu activeY" : "nav-menu"}>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={splitLocation[1] === "projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={splitLocation[1] === "services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={splitLocation[1] === "contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <AiOutlineCloseSquare sx={{ color: "#0398DA" }} />
        ) : (
          <AiOutlineMenu />
        )}
      </div>
    </div>
  );
};

export default Navbar;
