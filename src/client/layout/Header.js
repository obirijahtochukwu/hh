import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const link = [
    { text: "dashboard", url: "/dashboard" },
    { text: "create agent", url: "/create-agent" },
    { text: "upload file", url: "/#1" },
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
          window.location.href = "/login";
        }}
        className={style.logout}
      >
        <div>logout</div>
        <FaTimes />
      </div>
    </div>
  );
}

`@import "../styles//theme.scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: #{scaleXL(1520)};
  color: $white;
  position: absolute;
  top: #{scaleXL(58)};
  left: #{scaleXL(201)};
  section {
    display: flex;
    gap: #{scaleXL(50)};
    .link {
      font-size: #{scaleXL(17)};
      font-family: $poppins;
      font-weight: 500;
      line-height: #{scaleXL(28)};
      color: $white;
      text-transform: capitalize;
      letter-spacing: 6%;
    }
  }
}

.logout {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #14162e;
  background: $white;
  font-size: #{scaleXL(20)};
  font-family: "inter";
  font-weight: 700;
  gap: #{scaleXL(10)};
  text-transform: capitalize;
  padding: #{scaleXL(5)} #{scaleXL(20)};
  border-radius: #{scaleXL(6)};
}
`;
