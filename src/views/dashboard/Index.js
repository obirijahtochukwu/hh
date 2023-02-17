import React from "react";
import { FaChevronRight } from "react-icons/fa";
import style from "./index.module.scss";

export default function Index() {
  return (
    <div className="">
      <div
        style={{ borderBottom: "1px solid rgba(0, 0, 0, .2)" }}
        className="container-fluid bg-white py-4 px-xl-5"
      >
        {/*FIRST SECTION*/}
        <div className="row">
          <div className={`${style.col} col`}>
            <div
              className={`${style.bg} mb-1 d-flex justify-content-center align-items-center w-100`}
            >
              <img
                style={{ transform: "translate(0%, -30%)", height: "35px" }}
                src="./media/Logo/Rectangle 149 (1).png"
                alt=""
                className={`${style.iconSize2}`}
              />
              <img
                style={{ transform: "translate(-40%, 30%)", height: "35px" }}
                src="./media/Logo/Rectangle 149 (1).png"
                alt=""
                className={`${style.iconSize2}`}
              />
            </div>
            <div className={`${style.title}`}>create nft</div>
          </div>
          <div className={`${style.col} col`}>
            <div
              className={`${style.bg} mb-1 d-flex justify-content-center align-items-center w-100`}
            >
              <img
                src="./media/Logo/Rectangle 149.png"
                alt=""
                className={`${style.iconSize}`}
              />
              <img
                style={{ transform: "translate(-40%)" }}
                src="./media/Logo/Rectangle 149.png"
                alt=""
                className={`${style.iconSize}`}
              />
            </div>
            <div className={`${style.title}`}>find holders</div>
          </div>
          <div className={`${style.col} col`}>
            <div
              className={`${style.bg} mb-1 d-flex justify-content-center align-items-center w-100`}
            >
              <img
                src="./media/Logo/Rectangle 144.png"
                alt=""
                className={`${style.iconSize}`}
              />
            </div>
            <div className={`${style.title}`}>airdrops</div>
          </div>
          <div className={`${style.col} col`}>
            <div
              className={`${style.bg} mb-1 d-flex justify-content-center align-items-center w-100`}
            >
              <img
                style={{ transform: "translate(35%, -50%)", height: "22px" }}
                src="./media/Logo/Rectangle 145.png"
                alt=""
                className={`${style.iconSize2}`}
              />
              <img
                style={{
                  transform: "translate(-35%, 60%) rotate(180deg)",
                  height: "22px",
                }}
                src="./media/Logo/Rectangle 145.png"
                alt=""
                className={`${style.iconSize2}`}
              />
            </div>
            <div className={`${style.title}`}>trade-in</div>
          </div>
          <div className={`${style.col} col`}>
            <div
              className={`${style.bg} mb-1 d-flex justify-content-center align-items-center w-100`}
            >
              <img
                src="./media/Logo/Polygon 1.png"
                alt=""
                className={`${style.iconSize}`}
              />
            </div>
            <div className={`${style.title}`}>sales</div>
          </div>
        </div>
      </div>
      {/*SECOND SCTION*/}
      <div className="container-fluid">
        <div className="row px-xl-5 py-5 justify-content-center">
          <div className="col-md-11 col-lg-9">
            <div className="row">
              <div className="col-12">
                <div className={`${style.lightTitle}`}>activities</div>
                <div
                  className={`${style.cardBorder} px-3 py-3 mt-2 row justify-content-between align-items-scretch`}
                >
                  <div className="col-9">
                    <div className="d-flex align-items-center">
                      <div className={`${style.smallText}`}>Airdrop</div>
                      <div
                        className={`${style.badge} d-flex align-items-center px-2 mx-2 bg-success `}
                      >
                        <div className={`${style.circle}  bg-white `}></div>

                        <div className="text-white">runnig</div>
                      </div>
                    </div>
                    <div className={`${style.text} mt-2`}>Collection Name</div>
                    <div className="d-flex align-items-center">
                      <div className={`${style.titleTwo}`}>NFT Name</div>
                      <div
                        className={`${style.cardBorder} ${style.littleText} rounded px-2 mx-2`}
                      >
                        NFT id
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Start
                      </b>
                      <div className={`${style.text}`}>
                        {" "}
                        2022-09-13 08:57:15
                      </div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Duration{" "}
                      </b>
                      <div className={`${style.text}`}>00:02:07</div>
                    </div>
                    <div
                      style={{ fontSize: "15px" }}
                      className="d-flex align-items-center"
                    >
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Volume
                      </b>
                      <div className={`${style.text}`}>100</div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Success{" "}
                      </b>
                      <div className={`${style.text}`}>44</div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Processing{" "}
                      </b>
                      <div className={`${style.text}`}>8</div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Failed
                      </b>
                      <div className={`${style.text}`}>2</div>
                    </div>
                    <div className={`${style.volume} my-2`}></div>
                    <div className="d-flex align-items-center">
                      <div className={`${style.btn} px-3 py-2`}>
                        More Details
                      </div>
                      <div className={`${style.btn} px-3 py-2 mx-2`}>
                        Cancel
                      </div>
                      <div className={`${style.check}`}></div>
                      <div className={`${style.text} mx-2`}>
                        recieve report on email
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={`${style.img}`}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div
                  className={`${style.cardBorder} px-3 py-3 mt-2 row justify-content-between align-items-scretch`}
                >
                  <div className="col-9">
                    <div className="d-flex align-items-center">
                      <div className={`${style.smallText}`}>Airdrop</div>
                      <div
                        className={`${style.badge} d-flex align-items-center px-2 mx-2 bg-success `}
                      >
                        <div className={`${style.circle}  bg-white `}></div>

                        <div className="text-white">runnig</div>
                      </div>
                    </div>
                    <div className={`${style.text} mt-2`}>Collection Name</div>
                    <div className="d-flex align-items-center">
                      <div className={`${style.titleTwo}`}>NFT Name</div>
                      <small
                        className={`${style.cardBorder} ${style.littleText} rounded px-2 mx-2`}
                      >
                        NFT id
                      </small>
                    </div>
                    <div className="d-flex align-items-center">
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Start
                      </b>
                      <div className={`${style.text}`}>
                        {" "}
                        2022-09-13 08:57:15
                      </div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Duration{" "}
                      </b>
                      <div className={`${style.text}`}>00:02:07</div>
                    </div>
                    <div
                      style={{ fontSize: "15px" }}
                      className="d-flex align-items-center"
                    >
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Volume
                      </b>
                      <div className={`${style.text}`}>100</div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Success{" "}
                      </b>
                      <div className={`${style.text}`}>44</div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Processing{" "}
                      </b>
                      <div className={`${style.text}`}>8</div>
                      <div className="mx-2"></div>
                      <b
                        style={{
                          marginRight: "4px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Failed
                      </b>
                      <div className={`${style.text}`}>2</div>
                    </div>
                    <div className={`${style.volume} my-2`}></div>
                    <div className="d-flex align-items-center">
                      <div className={`${style.btn} px-3 py-2`}>
                        More Details
                      </div>
                      <div className={`${style.btn} px-3 py-2 mx-2`}>
                        Cancel
                      </div>
                      <div className={`${style.check}`}></div>
                      <div className={`${style.text} mx-2`}>
                        recieve report on email
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={`${style.img}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-11 col-lg-3 pt-4 pt-lg-0">
            <div className="row px-0 justify-content-end">
              <div className="col-6 col-lg-11">
                <div className={`${style.lightTitle}`}>overview</div>
                <div
                  className={`${style.cardBorder} px-3 py-2 mt-2 d-flex  justify-content-between`}
                >
                  <div className={`${style.text}`}>wallet balance</div>
                  <b
                    className={`${style} d-flex align-items-center text-muted`}
                  >
                    <div className=" mx-1">250 LRC</div>
                    <FaChevronRight />
                  </b>
                </div>
                <div className={`${style.cardBorder} px-3 py-3 mt-4`}>
                  <h5>NFTs</h5>
                  <div className="d-flex justify-content-between">
                    <div className={`${style.text}`}>NFT items</div>
                    <b
                      className={`${style} d-flex align-items-center text-muted`}
                    >
                      <div className=" mx-1">187</div>
                      <FaChevronRight />
                    </b>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <div className={`${style.text}`}>collections</div>
                    <b
                      className={`${style} d-flex align-items-center text-muted`}
                    >
                      <div className=" mx-1">5</div>
                      <FaChevronRight />
                    </b>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className={`${style.text}`}>minted</div>
                    <b
                      className={`${style} d-flex align-items-center text-muted`}
                    >
                      <div className=" mx-1">39</div>
                      <FaChevronRight />
                    </b>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-11 mt-4 pt-2">
                <div className={`${style.cardBorder} px-3 py-4`}>
                  <h5>Saved Changes</h5>
                  <div className="d-flex justify-content-between my-3">
                    <div className={`${style.text}`}>collections</div>
                    <b
                      className={`${style} d-flex align-items-center text-muted`}
                    >
                      <div className=" mx-1">5</div>
                      <FaChevronRight />
                    </b>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className={`${style.text}`}>minted</div>
                    <b
                      className={`${style} d-flex align-items-center text-muted`}
                    >
                      <div className=" mx-1">39</div>
                      <FaChevronRight />
                    </b>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-11 mt-4 pt-1">
                <div className={`${style.cardBorder} px-3 py-4`}>
                  <h5>Sales Watclist</h5>
                  <div className="d-flex justify-content-between my-3">
                    <div className={`${style.text}`}>collections</div>
                    <b
                      className={`${style} d-flex align-items-center text-muted`}
                    >
                      <div className=" mx-1">5</div>
                      <FaChevronRight />
                    </b>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className={`${style.text}`}>minted</div>
                    <b
                      className={`${style} d-flex align-items-center text-muted`}
                    >
                      <div className=" mx-1">39</div>
                      <FaChevronRight />
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
