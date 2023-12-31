import "./App.css";
import { Button } from "react-bootstrap";
import { IoIosHome } from "react-icons/io";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/user_sinup_login/LogIn";
import SignUp from "./pages/user_sinup_login/SignUp";
import AdminSignUp from "./pages/admin_signup/AdminSignUp";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <Routes>
        {/* public  routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* private routes  */}
        <Route path="/admin-signup" element={<AdminSignUp />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
