import React from "react";
import style from "./index.module.scss";
import { data, skills } from "./data";
import { Email, GitHub, PhoneAndroid } from "@mui/icons-material";

export default function Index() {
  return (
    <div className={style.container}>
      <section>
        <div className="d-flex flex-column gap-4">
          <div lassName="">
            <div className={style.title}>{"obirijah tochukwu"}</div>
            <div className={style.text}>{"Frontend Web Developer"}</div>
            <div className={style.desc}>
              Creative UI Developer with 3 years spent optimizing user
              experience through implementing creative processes, innovating,
              and developing seamless UI. Successful in driving user engagement
              for well-known brands, providing a compelling user experience to
              improve brand loyalty, and boosting customer retention.
            </div>
          </div>
          <div className="">
            <div className={`${style.my} ${style.blueText}`}>{"Contacts"}</div>
            <div className="d-flex align-items-center">
              <Email className={style.icon} />
              <div className={style.contact}>tobirijah@gmail.com</div>
            </div>
            <div className="d-flex align-items-center my-1">
              <GitHub className={style.icon} />
              <div className={style.contact}>
                https://github.com/obirijahtochukwu
              </div>
            </div>
            <div className="d-flex align-items-center">
              <PhoneAndroid className={style.icon} />
              <div className={style.contact}>+2349130420916</div>
            </div>
          </div>
          <div className="">
            <div className={`${style.my} ${style.blueText}`}>{"Skills"}</div>
            <div className=" d-flex flex-column gap-1">
              {skills.map((item) => {
                return <li style={{ textTransform: "uppercase" }}>{item}</li>;
              })}
            </div>
          </div>
        </div>
        <article className={style.article}>
          {data.map(({ title, period, text }, index) => {
            return (
              <div className="">
                <div className={style.subTitle}>{title}</div>
                <div className={`${style.my} ${style.blueText}`}>{period}</div>
                <ul>
                  {text.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </article>
      </section>
    </div>
  );
}
