import React, { useEffect, useState } from "react";
import "./AlertBox.css";

const AlertBox = ({ message, type, onComplete }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after mounting
    setAnimate(true);

    // Remove animation after 3 seconds
    const timer = setTimeout(() => {
      setAnimate(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const icon = type === "success" ? "✔" : "✖"; // Green tick or red cross
  const alertClass = type === "success" ? "alert-success" : "alert-error"; // Conditional styling

  return (
    <div className={`alert-box ${alertClass} ${animate ? "show" : ""}`}>
      <div className="icon">{icon}</div>
      <p className="message">{message}</p>
      <div className="underline"></div>
    </div>
  );
};

export default AlertBox;
