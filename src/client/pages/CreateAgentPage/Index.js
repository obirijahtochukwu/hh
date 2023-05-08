import React, { useEffect, useState } from "react";
import loginStyle from "./index.module.scss";
import axios, { Axios } from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";

export default function Index() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState("");
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  const login = (e) => {
    e.preventDefault();
    Axios.post(
      `http://52.205.252.14/api/agent/create/`,
      {
        email: email,
        name: name,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log(res.data);
        setEmail("");
        setName("");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const auth = localStorage.getItem("token");
    setAuth(auth);
    // return () => setAuth("");
  }, []);

  if (!auth) {
    navigate("/login");
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
        <img
          src="static/media/client/Character 1.svg"
          alt=""
          className={loginStyle.img}
        />
        <form onSubmit={login}>
          <div className={loginStyle.inputContainer}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <img
              src="static/media/client/X.svg"
              alt=""
              className={loginStyle.clearIcon}
            />
          </div>
          <div className={loginStyle.inputContainer}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            />
            <img
              src="static/media/X.svg"
              alt=""
              className={loginStyle.clearIcon}
            />
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
