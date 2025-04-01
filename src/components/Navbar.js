import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isPatient, setIsPatient] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if the user is on the home page

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/");
        setUser(response.data);
        setIsPatient(response.data.is_patient);
        setIsDoctor(response.data.is_doctor);
      } catch (err) {
        setUser(null);
        setIsPatient(false);
        setIsDoctor(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/logout/", null, {
        headers: {
          "X-CSRFToken": axios.defaults.headers.common["X-CSRFToken"], // Ensure CSRF token is included
        },
      });
      alert(response.data.message || "Logged out successfully.");
      setUser(null); // Clear the user state
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      alert(error.response?.data?.error || "Logout failed.");
    }
  };

  const generateLink = (href) => {
    return isHomePage ? href : `/${href}`;
  };

  return (
    <div
      className="container-fluid d-flex align-items-center fixed-top"
      style={{
        backgroundColor: "rgba(55,81,126, 0.9)",
        padding: "1rem",
        margin: "0",
        width: "100vw",
        paddingLeft: "285px",
        paddingRight: "350px",
      }}
    >
      <h1 className="logo me-auto">
        <a href="/">HMS</a>
      </h1>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href={generateLink("#hero")}>
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href={generateLink("#about")}>
              Overview
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href={generateLink("#faq")}>
              FAQ
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="/technology">
              Technologies
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="/aboutus">
              About Us
            </a>
          </li>
          
          {!user && (
            <>
              <li>
                <a className="nav-link scrollto" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/register">
                  Register
                </a>
              </li>
            </>
          )}
          {user && (
            <li className="dropdown">
              <a href="#">
                <span>{user.username}</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                <a
                  className="nav-link scrollto"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Logout
                  </a>
                </li>
                {isPatient && (
                <li>
                  <a className="nav-link scrollto" href="/patient">
                    Patient Page
                  </a>
                </li>
                )}
                {isDoctor && (
                  <li>
                    <a className="nav-link scrollto" href="/doctor">
                      Doctor Page
                    </a>
                  </li>
                )}
              </ul>
            </li>
          )}
          <li>
            <Link className="getstarted scrollto" to={generateLink("#login")}>
            {user ? (
                <span>
                  Logged in as: <strong>{user.username}</strong> (
                  {isPatient ? "Patient" : isDoctor ? "Doctor" : "Unknown"})
                </span>
              ) : (
                <span>Not logged in</span>
              )}
            </Link>
          </li>

        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  );
};

export default Navbar;
