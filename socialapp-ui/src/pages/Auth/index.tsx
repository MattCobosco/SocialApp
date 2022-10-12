import { useState } from "react";
import { LoginForm } from "./Forms/login";
import { RegistrationForm } from "./Forms/register";
import "./auth.css"

export const Auth = () => {
  const [currentForm, setCurrentForm] = useState<string>("login");

  if (currentForm === "login") {
    return (
      <div className="auth">
        <LoginForm />
        <button onClick={() => setCurrentForm("register")}>Register</button>
      </div>
    )
  } else {
    return (
      <div className="auth">
        <RegistrationForm />
        <button onClick={() => setCurrentForm("login")}>Login</button>
      </div>
    )
  }

}