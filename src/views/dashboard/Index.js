import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaBtc, FaChevronRight, FaTimes } from "react-icons/fa";
import style from "./index.module.scss";

export default function Index() {
  const ref = useRef();
  const reff = useRef();
  const [current, setCurrent] = useState("15");
  const [active, setActive] = useState("17");
  const [sidebar, setSidebar] = useState(false);
  const [wallet, setWallet] = useState(false);
  const carousel = [
    { img: "/media/1.png", x: "0" },
    { img: "/media/2.png", x: "15" },
    { img: "/media/3.png", x: "35" },
    { img: "/media/4.png", x: "55" },
    { img: "/media/5.png", x: "70" },
  ];
  const carousel2 = [
    { img: "/media/1.png", x: "0" },
    { img: "/media/2.png", x: "17" },
    { img: "/media/3.png", x: "36.7" },
    { img: "/media/4.png", x: "57" },
    { img: "/media/5.png", x: "74" },
  ];
  useEffect(() => {
    ref.current.style.transition = `0.4s`;
    reff.current.style.transition = `0.4s`;
    ref.current.style.transform = `translateX(-${current}%)`;
    reff.current.style.transform = `translateX(-${active}%)`;
  }, [current, active]);

  return (
    <div className={`${style.body}`}>
      {/*NAVBAR SECTION*/}
      <div className={`${style.navBg}`}></div>
      <FaBars
        className={`${style.sideBarIcon} d-sm-none cursor`}
        onClick={() => setSidebar(true)}
      />
      <div className={`${style.navLogoContainer} d-sm-block`}>
        <img src="/media/Vector.png" className={`${style.navLogo}`} />
        <div className={`${style.navLogoBadge}`} />
        <img src="/media/Vector (2).png" className={`${style.navLogo2}`} />
        <div className={`${style.navLogo2Badge}`} />
        <img src="/media/Vector (3).png" className={`${style.navLogo3}`} />
        <div className={`${style.navLogo3Badge}`} />
        <img src="/media/Vector (1).png" className={`${style.navLogo4}`} />
        <div className={`${style.navLogo4Badge} d-sm-block`} />
        <div className={`${style.nav1} d-none d-sm-block`}>Vibe Token</div>
        <div className={`${style.nav2} d-none d-sm-block`}>about</div>
        <div className={`${style.nav3} d-none d-sm-block`}>faq</div>
      </div>
      {/*SIDEBAR SECTION*/}
      <div
        className={
          sidebar
            ? `${style.sideBarContainer} ${style.show} d-sm-none`
            : `${style.sideBarContainer} d-sm-none`
        }
      >
        <div
          className={
            sidebar ? `${style.sideBar} ${style.show}` : `${style.sideBar}`
          }
        >
          <div className={`${style.navLogoContainer} d-sm-block`}>
            <img src="/media/Vector.png" className={`${style.navLogo}`} />
            <div className={`${style.navLogoBadge}`} />
            <img src="/media/Vector (2).png" className={`${style.navLogo2}`} />
            <div className={`${style.navLogo2Badge}`} />
            <img src="/media/Vector (3).png" className={`${style.navLogo3}`} />
            <div className={`${style.navLogo3Badge}`} />
            <img src="/media/Vector (1).png" className={`${style.navLogo4}`} />
            <div className={`${style.navLogo4Badge} d-sm-block`} />
            <div className={`${style.nav1} d-none d-sm-block`}>Vibe Token</div>
            <div className={`${style.nav2} d-none d-sm-block`}>about</div>
            <div className={`${style.nav3} d-none d-sm-block`}>faq</div>
          </div>
          <FaTimes
            className={`${style.sideBarIcon} d-sm-none cursor`}
            onClick={() => setSidebar(false)}
          />
          <div className={`${style.sidebarLink1}  d-sm-block cursor`}>
            Vibe Token
          </div>
          <div className={`${style.sidebarLink2}  d-sm-block cursor`}>
            about
          </div>
          <div className={`${style.sidebarLink3}  d-sm-block cursor`}>faq</div>
          <div className={`${style.sidebarWallet}`}>
            <div
              className={`${style.sidebarWalletText}`}
              onClick={() => setWallet(true)}
            >
              Connect wallet
            </div>
          </div>
        </div>
      </div>

      {/*FIRfeferST SECTION*/}
      <div className="">
        <div className="">
          <div className={`${style.title}`}>No Lama Drama</div>
          <div className={`${style.text}`}>
            No Drama Lama is an NFT collection designed by the Vibe Token team
            to enable holders to have special access to their premium features
            of their VIBE Dapp without having to subscribe to a monthly fee.
          </div>
          <div
            className={`${style.wallet} cursor`}
            onClick={() => setWallet(true)}
          >
            <div className={`${style.walletText}`}>Connect wallet</div>
            <FaBtc className={`${style.walletIcon}`} />
          </div>
          {/*mobile carousel*/}
          <div
            className={`${style.carousel} d-flex d-sm-none align-items-center`}
          >
            <div ref={ref} className={`${style.carouselItem} d-flex`}>
              {carousel.map(({ img, x }, index) => {
                return (
                  <img
                    key={index}
                    src={img}
                    style={{
                      transform: `scale(${current === x ? "1.05" : "0.8"})`,
                    }}
                    className={`${style.carouselIte} d-flex`}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className={`${style.carouselDots} d-sm-none`}>
            {carousel.map(({ img, x }, index) => {
              return (
                <div
                  className=""
                  style={{ background: `${current === x ? "white" : ""}` }}
                  onClick={() => setCurrent(x)}
                />
              );
            })}
          </div>
          {/*desktop carousel*/}
          <div
            className={`${style.carousel} d-sm-flex d-none align-items-center`}
          >
            <div ref={reff} className={`${style.carouselItem} d-flex`}>
              {carousel2.map(({ img, x }, index) => {
                return (
                  <img
                    key={index}
                    src={img}
                    style={{
                      transform: `scale(${active === x ? "1.05" : "0.8"})`,
                    }}
                    className={`${style.carouselIte} d-flex`}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className={`${style.carouselDots} d-none d-sm-flex`}>
            {carousel2.map(({ img, x }, index) => {
              return (
                <div
                  className=""
                  style={{ background: `${active === x ? "white" : ""}` }}
                  onClick={() => setActive(x)}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <div className={`${style.circle}`}></div>
          <div className={`${style.circleTwo}`}>
            <div className={`${style.percent}`}>0%</div>
            <div className={`${style.percentText}`}>Minted</div>
          </div>
          <div className={`${style.mintText}`}>800/2500 Minted</div>
          <div className={`${style.mintText2}`}>Mint Price 0.09 Eth</div>
          <div className={`${style.box}`}></div>
          <div className={`${style.boxTitle}`}>Number of NFTs</div>
          <div className={`${style.calc}`}></div>
          <div className={`${style.minus}`}></div>
          <div className={`${style.num}`}>3</div>
          <div className={`${style.plus}`}></div>
          <div className={`${style.plus2}`}></div>
          <div className={`${style.max}`}>Max</div>
          <div className={`${style.mint}`}>Max</div>
        </div>
      </div>
      {/*SECOND SCTION*/}
      <section>
        <img src="/media/1.png" className={`${style.sectionImg}`} />
        <div className={`${style.sectionTitle}`}>About Lama project</div>
        <div className={`${style.sectionText} d-sm-none`}>
          Lorem ipsum dolor sit amet consectetur. Sem luctus arcu amet vehicula.
          Adipiscing pellentesque amet nisi gravida aliquam elit vitae
          vulputate. Ut feugiat sem faucibus at. Non facilisi pharetra facilisi
          ut diam id in nibh. Magna in semper iaculis pellentesque donec. Massa
        </div>
        <div className={`${style.sectionText} d-none d-sm-block`}>
          Lorem ipsum dolor sit amet consectetur. Sem luctus arcu amet vehicula.
          Adipiscing pellentesque amet nisi gravida aliquam elit vitae
          vulputate. Ut feugiat sem faucibus at. Non facilisi pharetra facilisi
          ut diam id in nibh. Magna in semper iaculis pellentesque donec. Massa
          <div className={`${style.mb}`} />
          Convallis ipsum velit leo lorem. Vehicula sem suspendisse iaculis ut
          amet senectus. Suspendisse ac venenatis orci etiam odio amet arcu
          tincidunt. Orci aliquet venenatis morbi ante quis lectus lacus
          faucibus gravida. Imperdiet dolor integer accumsan faucibus quam
          egestas gravida
          <div className={`${style.mb}`} />
          euismod suscipit ullamcorper aenean. Mattis consequat euismod mattis
          massa ultrices egestas. Arcu ullamcorper volutpat sit semper morbi
          pharetra fusce dictum nulla. Et dui magna magna dictum. Varius tortor
          nascetur imperdiet enim et sagittis. Nunc porta facilisis habitant
          phasellus.
          <div className={`${style.mb}`} />
          Convallis ipsum velit leo lorem. Vehicula sem suspendisse iaculis ut
          amet senectus. Suspendisse ac venenatis orci etiam odio amet arcu
          tincidunt. Orci aliquet venenatis morbi ante quis lectus lacus
          faucibus gravida. Imperdiet dolor integer accumsan faucibus quam
          egestas gravida
        </div>
      </section>
      {/*THIRD SCTION*/}
      <footer>
        <div className={`${style.footerTitle}`}>get on the list</div>
        <div className={`${style.footerInput}`}>Enter your email address</div>
        <div className={`${style.inputIcon}`}></div>
        <FaChevronRight className={`${style.inputArrow}`} />
        <div className="d-none d-sm-block">
          <img src="/media/Vector.png" className={`${style.logo}`} />
          <div className={`${style.logoBadge}`} />
          <img src="/media/Vector (2).png" className={`${style.logo2}`} />
          <div className={`${style.logo2Badge}`} />
          <img src="/media/Vector (3).png" className={`${style.logo3}`} />
          <div className={`${style.logo3Badge}`} />
          <img src="/media/Vector (1).png" className={`${style.logo4}`} />
          <div className={`${style.logo4Badge}`} />
        </div>

        <img src="/media/Vector (4).png" className={`${style.instagram}`} />
        <img src="/media/Layer_2.png" className={`${style.twitch}`} />
        <img src="/media/Vector (5).png" className={`${style.twitter}`} />
        <img src="/media/Vector (6).png" className={`${style.youtube}`} />
        <div className={`${style.footerText}`}>© 2023 Vibe Token LLC </div>
        <div className={`${style.footerText2}`}>Terms & Conditions </div>
        <div className={`${style.footerText3}`}>Privacy Policy </div>
      </footer>

      {/*WALLET SECTION*/}
      <div
        className={
          wallet
            ? `${style.sideBarContainer} ${style.show} d-sm-`
            : `${style.sideBarContainer} d-sm-`
        }
      >
        <div
          className={
            wallet ? `${style.sideBar} ${style.show}` : `${style.sideBar}`
          }
        >
          <div className={`${style.navLogoContainer} d-sm-none`}>
            <img src="/media/Vector.png" className={`${style.navLogo}`} />
            <div className={`${style.navLogoBadge}`} />
            <img src="/media/Vector (2).png" className={`${style.navLogo2}`} />
            <div className={`${style.navLogo2Badge}`} />
            <img src="/media/Vector (3).png" className={`${style.navLogo3}`} />
            <div className={`${style.navLogo3Badge}`} />
            <img src="/media/Vector (1).png" className={`${style.navLogo4}`} />
            <div className={`${style.navLogo4Badge} d-none d-sm-block`} />
          </div>
          <FaTimes
            className={`${style.sideBarIcon} cursor`}
            onClick={() => setWallet(false)}
          />
          <div className={`${style.modalTitle}`}>connect a wallet</div>
          <div className={`${style.modalText}`}>
            If you currently don't have a wallet, you have the option to choose
            a provider and generate one at this moment.
          </div>
          <div className={`${style.modalBox}  `}></div>
          <div className={`${style.modalBoxText1}  cursor`}>Metamask</div>
          <div className={`${style.bar}  `} />
          <div className={`${style.modalBoxText2}  cursor`}>WalletConnect</div>
          <div className={`${style.bar2}  `} />
          <div className={`${style.modalBoxText3}  cursor`}>
            Coinbase Wallet
          </div>
        </div>
      </div>
    </div>
  );
}
