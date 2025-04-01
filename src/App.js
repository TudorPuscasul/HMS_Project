import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

import Home from './pages/Home';
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import Technologies from "./pages/Technologies";
import AboutUs from "./pages/AboutUs";

import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

const getCSRFToken = async () => {
  try {
    const response = await axios.get("/api/csrf-token/");
    axios.defaults.headers.common["X-CSRFToken"] = response.data.csrfToken;
    console.log("CSRF token fetched successfully.");
  } catch (error) {
    console.error("Failed to fetch CSRF token:", error);
  }
};

const App = () => {
  useEffect(() => {
    getCSRFToken(); // Fetch CSRF token when the app initializes
  }, []);

  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <Router>
        <div>
          <Navbar />
          <div style={{ paddingTop: "80px" }}> {/* Add padding to push the content below the navbar */}
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route
                path="/patient"
                element={
                  <ProtectedRoute allowedRoles={["is_patient"]}>
                    <PatientPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor"
                element={
                  <ProtectedRoute allowedRoles={["is_doctor"]}>
                    <DoctorPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/technology" element={<Technologies />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
