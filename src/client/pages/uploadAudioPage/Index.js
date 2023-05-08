import React, { useEffect, useState } from "react";
import loginStyle from "./index.module.scss";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import { FaLink } from "react-icons/fa";
import Dropdown from "../../components/dropdown/Index";

export default function UploadAgent() {
  const [email, setEmail] = useState("");
  const [audio, setAudio] = useState("");
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
        audio: audio,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log(res.data);
        setEmail("");
        setAudio("");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const auth = localStorage.getItem("token");
    setAuth(auth);
    // return () => setAuth("");
  }, []);

  if (auth) {
    navigate("/login");
  }

  return (
    <div className={`${loginStyle.container}`}>
      <Header />
      <article>
        <div>
          <div className={loginStyle.title}>
            Upload Audio and Assign To Agent
          </div>
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
          <label htmlFor="" for="id">
            <div className={loginStyle.icon}>
              <FaLink />
            </div>
            <div className="">
              {audio ? (
                <div>
                  {audio?.name?.substring(0, 6)}...
                  {audio?.name?.slice(-6)}
                </div>
              ) : (
                "Choose audio"
              )}
            </div>
          </label>
          <input
            type="file"
            id="id"
            className="d-none"
            onChange={(e) => setAudio(e.target.files[0])}
          />
          <div className="text-white"></div>
          <Dropdown />

          <button type="submit">Assign audio</button>
        </form>
        <div className={loginStyle.pink}></div>
        <div className={loginStyle.bigPink}></div>
        <div className={loginStyle.blue}></div>
        <div className={loginStyle.bigBlue}></div>
      </article>
    </div>
  );
}
