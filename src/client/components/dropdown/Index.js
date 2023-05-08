import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { membersData } from "../../pages/dashboard/mockData";

export default function Dropdown() {
  const [searchValue, setSearchValue] = useState("");
  const [modal, setModal] = useState(false);
  const [agent, setAgent] = useState("");

  const filteredItems = membersData.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const ref = useRef(null);
  useEffect(() => {
    const leave = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false);
        setSearchValue("");
      }
    };
    document.addEventListener("mousedown", leave);
  }, [ref]);

  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder={agent ? agent : "Search agent"}
          onFocus={() => setModal(true)}
        />
        <div
          ref={ref}
          className={`${styles.modal} ${modal ? styles.show : ""}`}
        >
          {filteredItems?.map(({ name }) => {
            return (
              <div
                className={agent === name ? styles.show : ""}
                onClick={() => {
                  setModal(false);
                  setAgent(name);
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
