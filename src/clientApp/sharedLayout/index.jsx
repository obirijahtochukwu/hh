import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

export const Layout = ({ children }) => {
  const urls = [
    {
      url: "/auction",
      text: "Auction",
      icon: "/media/icons/Group (5).svg",
    },
    { url: "/faqs", text: "FAQ", icon: "/media/icons/Vector (18).svg" },
    { url: "/admin", text: "Admin", icon: "/media/icons/Group (6).svg" },
  ];

  const [openNav, setOpenNav] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const leave = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNav(false);
      }
    };
    document.addEventListener("mousedown", leave);
  }, [ref]);

  return (
    <div className={styles.container}>
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>
      <div className={styles.d_none}>
        <div className={styles.flex}>
          <div className={styles.logo}>
            <img src="/media/login/logo.svg" alt="" />
            <div className="">l xBid</div>
          </div>
          <div className={styles.urls}>
            {urls.map(({ text, icon, url }) => {
              return (
                <Link
                  to={url}
                  style={{ textDecoration: "none", color: "white" }}
                  className={styles.url}
                >
                  <img src={icon} alt={"styles"} />
                  <div
                    className={
                      window.location.pathname === url ? styles.urlText : ""
                    }
                  >
                    {text}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={styles.logout}>
            <img src="/media/icons/log-out.svg" alt="" />
            <div className="">Log Out</div>
          </div>
        </div>
      </div>

      <div className={`${styles.flex} ${styles.barIcon}`}>
        <div className={styles.logo}>
          <img src="/media/login/logo.svg" alt="" />
          <div className="">l xBid</div>
        </div>

        <div
          ref={ref}
          onClick={() => setOpenNav(!openNav)}
          className={styles.bar}
        >
          <AiOutlineBars />

          <div className={`${styles.urls} ${openNav ? styles.show : ""}`}>
            {urls.map(({ text, icon, url }) => {
              return (
                <Link
                  onClick={() => setOpenNav(!openNav)}
                  to={url}
                  style={{ textDecoration: "none", color: "white" }}
                  className={styles.url}
                >
                  <img src={icon} alt={"styles"} />
                  <div
                    className={
                      window.location.pathname === url ? styles.urlText : ""
                    }
                  >
                    {text}
                  </div>
                </Link>
              );
            })}
            <div onClick={() => setOpenNav(false)} className={styles.url}>
              <img src="/media/icons/log-out.svg" alt="" />
              <div className="">Log Out</div>
            </div>
          </div>
        </div>
      </div>

      {children}
      <footer className={styles.footer}>
        <div className={"styles"}>© 2023 xBid Networks, Inc</div>
        <div className={"styles"}>Privacy Policy Terms of Service</div>
      </footer>
    </div>
  );
};
