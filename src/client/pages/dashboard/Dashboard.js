import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import { membersData, pieChartData } from "./mockData";
import Header from "../../layout/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DropdownTwo } from "../../components/dropdown/Index";

export default function Dashboard() {
  const [auth, setAuth] = useState("");
  const [agents, setAgents] = useState([]);
  const [files, setFiles] = useState([]);
  const [filesName, setFilesName] = useState("");
  const [viewAgent, setViewAgent] = useState({});
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  const analyze = () => {
    axios
      .post(
        `http://52.205.252.14/api/agent/create/`,
        {
          agent_id: viewAgent?.id,
          filename: filesName,
        },
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setFilesName("");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://52.205.252.14/api/agent/list/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        setAgents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("token");
    setAuth(auth);
    // return () => setAuth("");
  }, []);

  useEffect(() => {
    axios
      .get(`http://52.205.252.14/api/list/`)
      .then((res) => {
        setFiles(res.data.files);
      })
      .catch((err) => console.log(err));
  }, []);

  if (auth) {
    navigate("/login");
  }

  return (
    <div className={`${style.container}`}>
      <Header />
      <section className={style.userProfile}>
        <div className="d-flex align-items-center">
          <img src="/client/image 10 (1).svg" alt="" />
          <div className="">
            <div className={style.title}>
              {viewAgent.name ? viewAgent.name : "Kris Millar"}
            </div>
            <div className={style.text}>krissmiller@gmail.com</div>
          </div>
        </div>
        <div className="d-flex align-items-end gap-1">
          <DropdownTwo
            props={{
              data: files,
              setData: setFiles,
              value: filesName,
              setValue: setFilesName,
            }}
          />

          <div onClick={() => analyze()} className={style.analyzeBtn}>
            analyze
          </div>
        </div>

        <div className={style.description}>
          <div>
            <span className={style.title}>Guild</span>
            <span className={style.text}>DAO Operation Guild</span>
          </div>
          <div>
            <span className={style.title}>Pod</span>
            <span className={style.text}>Regen Pod</span>
          </div>
        </div>

        {/* <div className={style.charts}>
          {pieChartData.map(({ num, title }, index) => {
            return (
              <div key={index} className="d-flex flex-column text-center gap-2">
                <div className={style.chart}>{num}</div>
                <div className={style.title}>{title}</div>
              </div>
            );
          })}
        </div> */}
      </section>

      <article className={style.members}>
        <div className="d-flex align-items-center gap-2">
          <div className={style.title}>Agents List</div>
          <div className={style.text}>{agents.length}</div>
        </div>
        <div className={style.member}>
          {membersData.map(({ name, category, time }, index) => {
            return (
              <div
                key={index}
                onClick={() => setViewAgent({ name, category })}
                className={`d-flex align-items-center justify-content-between`}
              >
                <div className="d-flex items-items-center gap-2 align-items-center">
                  <img
                    src={"/client/513ef3cfd86d5a226fa969aa5d579e54 1 (1).svg"}
                    alt=""
                    className={style.membersImg}
                  />
                  <div>
                    <div className={style.title}>{name}</div>
                    <div className={style.text}>{category}</div>
                  </div>
                </div>
                <div className="">
                  <div className={`d-flex justify-content-end ${style.title}`}>
                    {"ID"}
                  </div>
                  <div className={style.text}>{time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </article>

      <div className={style.pink}></div>
      <div className={style.bigPink}></div>
      <div className={style.blue}></div>
      <div className={style.bigBlue}></div>
    </div>
  );
}
