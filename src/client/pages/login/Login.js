import React, { useEffect, useState } from "react";
import loginStyle from "./index.module.scss";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("email")));
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://52.205.252.14/api/login/", {
    //     username: "admin",
    //     password: "admin",
    //   })
    //   .then((res) => console.log(res.data));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", password);
    setAuth(email);

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("email"));
    setAuth(auth);
    // console.log(auth);
    // return () => setAuth("");
  }, []);

  if (auth) {
    navigate("/");
  }

  return (
    <div className={`${loginStyle.container}`}>
      <article>
        <div>
          <div className={loginStyle.title}>Sign In to Recharge Direct</div>
          <div className={loginStyle.text}>
            if you don’t an account you can <a href="#6">Register here!</a>
          </div>
        </div>
        <img src="/client/Character 1.svg" alt="" className={loginStyle.img} />
        <form onSubmit={login}>
          <div className={loginStyle.inputContainer}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <img src="/client/X.svg" alt="" className={loginStyle.clearIcon} />
          </div>
          <div className={loginStyle.inputContainer}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye className={loginStyle.clearIcon} />
          </div>
          <div className={loginStyle.title}>Recover Password ?</div>

          <button type="submit">sign in</button>
        </form>
        <div className={loginStyle.pink}></div>
        <div className={loginStyle.blue}></div>
      </article>
    </div>
  );
}
