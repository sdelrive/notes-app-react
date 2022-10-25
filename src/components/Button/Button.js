import React from "react";
import "./Button.scss";
export default function Button({ label }) {
  const handleButton = (e) => {
    e.preventDefault();
  };
  return (
    <button className="button" type="submit" onClick={handleButton}>
      {label}
    </button>
  );
}
