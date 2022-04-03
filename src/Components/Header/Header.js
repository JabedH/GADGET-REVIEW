import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import img from "../../img/gr1.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src={img} alt="" />
        <h1>GADGET REVIEW </h1>
      </div>
      <div className="header-link">
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="/Reviews"
        >
          REVIEWS
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="/DashBoard"
        >
          DASHBOARD
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="/Blogs"
        >
          BLOGS
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="/About"
        >
          ABOUT
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
