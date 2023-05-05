import React, { useEffect, useState } from "react";
import loginStyle from "./index.module.scss";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";

export default function Index() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://52.205.252.14/api/login/", {
        username: name,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", JSON.stringify(res.data.key));
      });
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("name", name);
    setPassword("");
    setName("");
  };
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("password"));
    setAuth(auth);
    // return () => setAuth("");
  }, []);

  if (auth) {
    navigate("/dashboard");
  }

  return (
    <div className={`${loginStyle.container}`}>
      <Header />
      <article>
        <div>
          <div className={loginStyle.title}>Create New Agent Direct</div>
          <div className={loginStyle.text}>
            if you don’t an account you can <a href="#6">Register here!</a>
          </div>
        </div>
        <img src="/client/Character 1.svg" alt="" className={loginStyle.img} />
        <form onSubmit={login}>
          <div className={loginStyle.inputContainer}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <img src="/client/X.svg" alt="" className={loginStyle.clearIcon} />
          </div>
          <div className={loginStyle.inputContainer}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
            <img src="/client/X.svg" alt="" className={loginStyle.clearIcon} />
          </div>

          <button type="submit">Submit</button>
        </form>
        <div className={loginStyle.pink}></div>
        <div className={loginStyle.bigPink}></div>
        <div className={loginStyle.blue}></div>
        <div className={loginStyle.bigBlue}></div>
      </article>
    </div>
  );
}
