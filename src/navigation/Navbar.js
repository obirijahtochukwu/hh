import { FaSistrix, FaBell, FaUserAlt, FaCamera, FaCog } from "react-icons/fa";
//import { Link } from "react-router-dom";
//import { useGlobalContext } from "../context";
//import { links } from "../db";
import nav from "./Navbar.module.scss";
import app from "../App.module.scss";
import dashboard from '../views/dashboard/index.module.scss'

function Navbar() {

  return (
    <div className={` container-fluid px-5 bg-white`}>
      <div className={`d-flex py-3 ${app.justifyContentBetween} ${app.alignItemsCenter}`}>
        <div className="">
          <img src="./media/Logo/Dutch0x Logo@2x.png" alt="" width={'150px'}/>
        </div>
        <div className="text-center">
        <div className={`${nav.activeLink}`}>Dashbord</div>
        </div>
        <div className={`${app.textColor} ${nav.link}`}>NFT Management</div>
        <div className={`${app.textColor} ${nav.link}`}>MarketPlace </div>
        <div className={`${app.textColor} ${nav.link}`}>Learn </div>
        <div className="col-3 position-relative d-none d-lg-block">
          <FaSistrix className={`${nav.searchIcon}`}/>
          <input type="text" name="name" placeholder="find holders" id="" className={`${nav.input} w-100 py-1`}/>
          <div className={`${nav.slashIcon} px-2`}>/</div>
        </div>
        <div className={`${dashboard.badge} d-lg-flex align-items-center px-2 py-1 d-none `}>
          <div className={`${dashboard.circle}`}></div>
          <small className=''>status</small>
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
        <div className={`${nav.bar} d-none d-lg-block`}></div>
        <div className="d-none d-lg-block">
          <FaCog />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
