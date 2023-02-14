import { useState } from "react";
import {
  FaSistrix,
  FaUser,
  FaUserTimes,
  FaTimes,
  FaBell,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { links } from "../db";
import "./Sidebar.scss";

function SideBar() {
  const user = useGlobalContext();

  const [sidebar, setSidebar] = useState(false);
  const logout = () => {
    localStorage.removeItem("auth");
    user.setData("");
    setSidebar(false);
    window.location.href = "/";
  };

  const submit = (url) => {
    user.setPath(url);
    setSidebar(false);
  };

  return (
    <div
      style={{
        position: "stick",
        top: "0",
        right: "0",
      }}
      className="container-fluid d-md-none _bg"
    >
      <div className="d_flex py-3">
        <div onClick={() => setSidebar(true)} className="cursor mx-2">
          <FaBars style={{ fontSize: "20px" }} className="_color" />
        </div>
        <div className="d_flex">
          <div className="position-relative mx-3 _color">
            <FaBell style={{ fontSize: "20px" }} />
            <div className="d_flex notify_btn">
              <div className="">2</div>
            </div>
          </div>
          <FaUser style={{ fontSize: "30px" }} />
        </div>

        <div className="d-flex d-none w-100 w-sm-75 my-2">
          <div
            style={{
              border: "1px solid rgb(0, 0, 0, 0.1)",
              borderRight: "1px solid white",
              paddingLeft: "10px",
              borderRadius: "5px 0 0 5px",
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "rgb(0, 0, 0, 0.5)",
            }}
            className="bg-white d-flex align-items-center"
          >
            <FaSistrix />
          </div>
          <input
            style={{
              border: "1px solid rgb(0, 0, 0, 0.1)",
              borderLeft: "0.1px solid white",
              borderRight: "transparent",
              fontSize: "0.87rem",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Search"
            className="w-75 px-1 py-2"
          />
          <div
            style={{
              border: "1px solid rgb(0, 0, 0, 0.1)",
              borderLeft: "transparent",
              borderRight: "1px solid rgb(0, 0, 0, 0.1)",
              borderRadius: "0 5px 5px 0",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            className="bg-white d-flex align-items-center px-3 btn_color"
          >
            SEARCH
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={`${sidebar && "show"} position-fixed side_nav`}>
        <div className="side_nav_content bg_color d-flex flex-column">
          <div
            style={{
              borderRadius: "0 10px 0 0",
            }}
            className="d_flex justify-content-start text-uppercase px-3 py-4"
          >
            <div className="logo">MUSEUMVERSE</div>
          </div>
          <div className="d_flex justify-content-start text-capitalize px-3 py-3 mx-2 mb-5 active_link">
            <div className="text-warning mx-2">
              <FaUser style={{ fontSize: "40px" }} />
            </div>
            <div className=" _text">OBIRIJAH</div>
          </div>
          {links.map(({ icon, text, url }, index) => {
            return (
              <Link
                onClick={() => submit(url)}
                style={{ textDecoration: "none", color: "unset" }}
                to={url}
                key={index}
                className={`${
                  user.path === url && "active_link"
                } d_flex justify-content-start text-capitalize px-3 py-2 mx-2 mt-1`}
              >
                <div
                  style={{
                    width: "20px",
                  }}
                  className={`mb-1 bottom_icon text-muted`}
                >
                  {" "}
                  {icon}
                </div>
                <div
                  style={{
                    color: `${user.path === url ? "black" : ""}`,
                  }}
                  className={` _text mx-3`}
                >
                  {text}
                </div>
              </Link>
            );
          })}
          <div className="mt-auto d_flex justify-content-center">
            <div
              onClick={logout}
              style={{
                border: "1px solid rgb(0, 0, 0, 0.2)",
                borderRadius: "8px",
                width: "fit-content",
              }}
              className="_color py-2 px-3 mb-3 d_flex cursor"
            >
              <div className="_color mx-2">
                <FaUserTimes style={{ fontSize: "30px" }} />
              </div>
              <span style={{ fontSize: "19px" }} className="_text">
                Leave
              </span>
            </div>
          </div>
          <div
            onClick={() => setSidebar(false)}
            className="close_btn cursor bg-white p-2"
          >
            <FaTimes className="X_btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
