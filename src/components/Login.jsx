import { useRef, useState, useEffect } from "react";
import OIP from "./OIP.jpg";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const unameRef = useRef(null);
  const pwdRef = useRef(null);

  const [themeColor, setThemeColor] = useState("#9ACD32"); 

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/nav");
    }
  }, [navigate]);

  const handleLogin = () => {
    const uname = unameRef.current.value;
    const pwd = pwdRef.current.value;

    if (uname === "2500030484" && pwd === "nagasri@08") {
      sessionStorage.setItem("user", uname);
      alert("Successfully logged in");
      navigate("/nav");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="left-panel" style={{ backgroundColor: themeColor }}>
        <div className="image">
          <img src={OIP} alt="Image here" width={120} height={120} />
        </div>

        <h2>Welcome Back</h2>
        <p>Select Theme</p>

        <div className="color-group">
          <div
            className="color-btn"
            style={{ backgroundColor: "#f9a060" }}
            onClick={() => setThemeColor("#f9a060")}
          />
          <div
            className="color-btn"
            style={{ backgroundColor: "#fab0b0" }}
            onClick={() => setThemeColor("#fab0b0")}
          />
          <div
            className="color-btn"
            style={{ backgroundColor: "#1E3A8A" }}
            onClick={() => setThemeColor("#1E3A8A")}
          />
        </div>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2>Login</h2>
          <input type="text" placeholder="Enter username *" ref={unameRef} />
          <input type="password" placeholder="Enter password *" ref={pwdRef} />
          <button
            style={{ backgroundColor: themeColor }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}