import { useRef, useState, useEffect } from "react";
import OIP from "../images/OIP.jpg";
import "../cssfiles/login.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const navigate = useNavigate();
  const unameRef = useRef(null);
  const pwdRef = useRef(null);

  const [themeColor, setThemeColor] = useState(
    sessionStorage.getItem("themeColor") || "#DAAFF7"
  );

  // ✅ Missing states
  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/nav");
    }
  }, [navigate]);

  const changeTheme = (color) => {
    setThemeColor(color);
    sessionStorage.setItem("themeColor", color);
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
    setError("");
  };

  const handleLogin = () => {
    const uname = unameRef.current.value;
    const pwd = pwdRef.current.value;

    if (!captchaToken) {
      setError("Please complete the CAPTCHA");
      return;
    }

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
        <img src={OIP} alt="Profile" className="left-image" />
        <h2>Welcome Back</h2>
        <p>Select Theme</p>

        <div className="color-group">
          <div
            className="color-btn"
            style={{ backgroundColor: "#f9a060" }}
            onClick={() => changeTheme("#f9a060")}
          />
          <div
            className="color-btn"
            style={{ backgroundColor: "#fab0b0" }}
            onClick={() => changeTheme("#fab0b0")}
          />
          <div
            className="color-btn"
            style={{ backgroundColor: "#1E3A8A" }}
            onClick={() => changeTheme("#1E3A8A")}
          />
        </div>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2 style={{ color: "red" }}>Login</h2>

          <input type="text" placeholder="Enter username *" ref={unameRef} />
          <input type="password" placeholder="Enter password *" ref={pwdRef} />

          {error && <p style={{ color: "red" }}>{error}</p>}

    <button style={{ backgroundColor: themeColor }} onClick={handleLogin}>Login</button>

    <ReCAPTCHA
      sitekey="6LeTh44sAAAAAB_9sWvEef204YGvLSfvs2eUQgWG"
      onChange={handleCaptcha}
    />
        </div>
      </div>
    </div>
  );
}