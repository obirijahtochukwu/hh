import { FaSistrix, FaBell, FaUserAlt, FaCamera, FaCog } from "react-icons/fa";
//import { Link } from "react-router-dom";
//import { useGlobalContext } from "../context";
//import { links } from "../db";
import nav from "./Navbar.module.scss";
import app from "../App.module.scss";

function Navbar() {

  return (
    <div className={` container-fluid px-5 bg-white`}>
      <div className={`d-flex py-3 ${app.justifyContentBetween} ${app.alignItemsCenter}`}>
        <div className="">
          <img src="./media/Logo/Dutch0x Logo@2x.png" alt="" width={'150px'}/>
        </div>
        <div className={`${nav.activeLink}`}>Dashbord</div>
        <div className={`${app.textColor}`}>NFT Management</div>
        <div className={`${app.textColor}`}>MarketPlace </div>
        <div className={`${app.textColor}`}>Learn </div>
        <div className="col-3 position-relative">
          <FaSistrix className={`${nav.searchIcon}`}/>
          <input type="text" name="name" autoComplete placeholder="find NFT's, collections, or holders" id="" className={`${nav.input} w-100 py-1`}/>
        </div>
        <div className="d-none d-lg-block">
          <FaBell/>
        </div>
        <div className="d-none d-lg-block">
          <FaCamera/>
        </div>
        <div className="d-none d-lg-block">
          <FaUserAlt />
        </div>
        <div className={`${nav.bar}`}></div>
        <div className="d-none d-lg-block">
          <FaCog />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
