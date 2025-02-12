import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Head from "./Head";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NewHeader.css";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLoginPage = location.pathname === "/logins";
  const isSignPage = location.pathname === "/signup";
  const isAdminPage = location.pathname === "/adminlogin";
  const isEmployeePage = location.pathname === "/employeelogin";

  // Close the menu when the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  if (isLoginPage || isSignPage || isAdminPage || isEmployeePage) {
    return null;
  }

  // Toggle menu visibility when the menu icon is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head />
      <header>
        <nav>
          <span className="material-symbols-outlined align-center" onClick={toggleMenu}>
            menu
          </span>
          <ul className={`mobileview ${menuOpen ? 'show' : ''}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/loginc">Login</Link>
            </li>
          </ul>
          <ul className="desktopview">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/loginc">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
