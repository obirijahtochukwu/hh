import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const link = [
    { text: "home", url: "#1" },
    { text: "create agent", url: "#1" },
    { text: "upload file", url: "#1" },
  ];
  return (
    <div className={style.container}>
      <section>
        {link.map(({ text, url }, index) => {
          return (
            <Link
              to={url}
              key={index}
              className=""
              style={{ width: "fit-content", textDecoration: "none" }}
            >
              <div className={style.link}> {text}</div>
            </Link>
          );
        })}
      </section>
      <div
        onClick={() => {
          localStorage.removeItem("email");
          window.location.reload();
        }}
        className={style.logout}
      >
        <div>logout</div>
        <FaTimes />
      </div>
    </div>
  );
}
