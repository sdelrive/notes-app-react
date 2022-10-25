import React from "react";
import LoginForm from "../components/LoginForm/Login";
import "./Login.scss";

export default function Login() {
  return (
    <div className="loginPage">
      <h1>App de notas</h1>
      <LoginForm />
    </div>
  );
}
