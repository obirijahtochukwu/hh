import { FaSistrix, FaBell, FaUserAlt, FaCamera, FaCog } from "react-icons/fa";
//import { Link } from "react-router-dom";
//import { useGlobalContext } from "../context";
//import { links } from "../db";
import nav from "./Navbar.module.scss";
import app from "../App.module.scss";
import dashboard from "../views/dashboard/index.module.scss";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty("--ba", "blue");
      console.log(window.innerWidth);
    });
  }, []);
  return (
    <div className={` container-fluid px-xl-5 bg-white ${nav.bh}`}>
      <div
        className={`d-flex py-3 ${app.justifyContentBetween} ${app.alignItemsCenter}`}
      >
        <div className="">
          <img
            src="./media/Logo/Dutch0x Logo@2x.png"
            alt=""
            className={`${nav.img}`}
          />
        </div>
        <div className="text-center">
          <div className={`${nav.activeLink}`}>Dashbord</div>
        </div>
        <div className={`${app.textColor} ${nav.link}`}>NFT Management</div>
        <div className={`${app.textColor} ${nav.link}`}>MarketPlace </div>
        <div className={`${app.textColor} ${nav.link}`}>Learn </div>
        <div className={`${nav.inputContainer} col-3 position-relative`}>
          <FaSistrix className={`${nav.searchIcon}`} />
          <input
            type="text"
            name="name"
            placeholder="find holders"
            id=""
            className={`${nav.input} w-10`}
          />
          <div className={`${nav.slashIcon} px-2 d-none`}>/</div>
        </div>
        <div
          className={`${dashboard.badge} d-lg-flex align-items-center px-2 py-1 d-none `}
        >
          <div className={`${dashboard.circle} bg-white`}></div>
          <small className="text-white">status</small>
        </div>
        <div className={`${nav.icon}`}>
          <FaBell />
        </div>
        <div className={`${nav.icon}`}>
          <FaCamera />
        </div>
        <div className={`${nav.icon}`}>
          <FaUserAlt />
        </div>
        <div className={`${nav.bar}`}></div>
        <div className={`${nav.icon}`}>
          <FaCog />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
