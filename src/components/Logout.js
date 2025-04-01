import React from "react";
import axios from "axios";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/logout/", null, {
        headers: {
          "X-CSRFToken": axios.defaults.headers.common["X-CSRFToken"], // Ensure the CSRF token is included
        },
      });
      alert(response.data.message || "Logged out successfully.");
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      alert(error.response?.data?.error || "Logout failed.");
    }
  };
  

  return (
    <div className="logout-container">
      <button className="button logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
