import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import axios from "axios";

export default function Dropdown({ props }) {
  const { data, setData } = props;

  const [searchValue, setSearchValue] = useState("");
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");

  const filteredItems = data?.filter((item) =>
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
          placeholder={value ? value : "Search value"}
          onFocus={() => setModal(true)}
        />
        <div
          ref={ref}
          className={`${styles.modal} ${modal ? styles.show : ""}`}
        >
          {filteredItems?.map(({ name }) => {
            return (
              <div
                className={value === name ? styles.show : ""}
                onClick={() => {
                  setModal(false);
                  setValue(name);
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

export function DropdownTwo({ props }) {
  const { data, setData, value, setValue } = props;

  const [searchValue, setSearchValue] = useState("");
  const [modal, setModal] = useState(false);

  const filteredItems = data?.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
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
          placeholder={value ? value : "Search files"}
          onFocus={() => setModal(true)}
        />
        <div
          ref={ref}
          className={`${styles.modal} ${modal ? styles.show : ""}`}
        >
          {filteredItems?.map((name) => {
            return (
              <div
                className={value === name ? styles.show : ""}
                onClick={() => {
                  setModal(false);
                  setValue(name);
                }}
              >
                {name}
              </div>
            );
          })}
          {searchValue && filteredItems.length === 0 ? (
            <div className="text-center">no matches</div>
          ) : (
            <div className="d-none">k</div>
          )}
        </div>
      </div>
    </div>
  );
}
