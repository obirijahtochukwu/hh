import React, { useState, useEffect } from "react";
import style from "./index.module.scss";

export default function Img({ props }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const calc = (value) => {
    if (windowWidth < 8.1) {
      return value * (windowWidth / 390);
    } else {
      return value * (windowWidth / 1920);
    }
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      setWindowWidth(0);
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <img
      src={props.src}
      style={{
        objectFit: "contain",
        zIndex: props.zIndex,
        position: props.position,
        top: `${calc(props.T)}px`,
        marginTop: `${calc(props.mT)}px`,
        bottom: `${calc(props.B)}px`,
        left: `${calc(props.L)}px`,
        right: `${calc(props.R)}px`,
        width: `${calc(props.X)}px`,
        height: `${calc(props.Y)}px`,
        borderRadius: `${calc(props.radius)}px`,
      }}
      alt=""
    />
  );
}
