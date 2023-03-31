import React from "react";
import Img from "./components/Img";
import style from "./index.module.scss";
export default function Index() {
  const customize = [
    { img: "/media/Group 19397.svg" },
    { img: "/media/Group 19397.svg" },
    { img: "/media/Group 19397.svg" },
    { img: "/media/Group 19397.svg" },
  ];
  const collections = [
    { img: "/media/Group 19370.svg" },
    { img: "/media/Group 19370.svg" },
    { img: "/media/Group 19370.svg" },
    { img: "/media/Group 19370.svg" },
    { img: "/media/Group 19370.svg" },
  ];
  const products = [
    {
      img: "/media/Rectangle 3217.svg",
      txt: "Brass Buddha Head in Golden & Brown Finish",
      price: "Rs 995",
      likes: "4.5",
    },
    {
      img: "/media/Rectangle 3217.svg",
      txt: "Brass Buddha Head in Golden & Brown Finish",
      price: "Rs 995",
      likes: "4.5",
    },
    {
      img: "/media/Rectangle 3217.svg",
      txt: "Brass Buddha Head in Golden & Brown Finish",
      price: "Rs 995",
      likes: "4.5",
    },
  ];
  return (
    <div>
      <header className={`${style.header}`}>
        <div className={`${style.headerTxt}`}>
          Make your favourite artifact part of your daily life through
          personalised merchandise
        </div>
        <img
          src="/media/Group 19380.svg"
          alt=""
          className={`${style.headerImg}`}
        />
        <div
          className={`${style.headerBtn} d-flex align-items-center justify-content-center`}
        >
          Shop now
        </div>
      </header>
      <section>
        <div className={`${style.subtitle}`}>Customize your Merchandise</div>
        <div className={`${style.customizeContainer}`}>
          {customize.map(({ img }, index) => {
            return <img src={img} alt="" className={`${style.customizeImg}`} />;
          })}
        </div>
      </section>
      <section className={`${style.thirdSection}`}>
        <Img
          props={{
            position: "absolute",
            src: "/media/Group 19321.svg",
            Y: 543,
            X: 565,
            T: 117.5,
            L: 225.25,
          }}
        />
        <Img
          props={{
            position: "absolute",
            src: "/media/Rectangle 3234.svg",
            Y: 444,
            X: 238,
            T: 117.5,
            L: 974,
            R: 5,
          }}
        />
        <Img
          props={{
            position: "absolute",
            src: "/media/Rectangle 3235.svg",
            Y: 444,
            X: 217,
            T: 217,
            L: 1236,
            R: 5,
          }}
        />
        <Img
          props={{
            position: "absolute",
            src: "/media/Rectangle 3236.svg",
            Y: 444,
            X: 217,
            T: 117.5,
            L: 1479,
            R: 5,
          }}
        />
      </section>
      <article>
        <div className={`${style.subtitle}`}>Collections</div>
        <div className={`${style.customizeContainer}`}>
          {collections.map(({ img }, index) => {
            return (
              <Img
                props={{
                  position: "",
                  src: `${img}`,
                  Y: 319,
                  X: 278,
                }}
              />
            );
          })}
        </div>
      </article>
      <section className={`${style.fourthSection}`}>
        <div className={`${style.subtitle} p`}>Top Rated Products </div>
        <div className={`${style.customizeContainer}`}>
          {products.map(({ img, txt, price, likes }, index) => {
            return (
              <div className="position-relative">
                <Img
                  props={{
                    position: "absolute",
                    src: `/media/heart-regular.svg`,
                    X: 33.57,
                    Y: 33.68,
                    T: 24,
                    L: 408,
                  }}
                />
                <Img
                  props={{
                    position: "",
                    src: `${img}`,
                    Y: 537,
                    X: 469,
                    R: 10,
                  }}
                />
                <div className={`${style.subCard}`}>
                  <div className={`${style.subCard}`}></div>
                </div>
                <div className={`${style.price}`}>{price}</div>
                <div className={`${style.txt}`}>{txt}</div>
                <Img
                  props={{
                    position: "absolute",
                    src: `/media/Star 8.svg`,
                    Y: 24,
                    X: 24,
                    T: 490,
                    L: 421,
                    zIndex: 3,
                  }}
                />
                <div className={`${style.likes}`}>{likes}</div>
              </div>
            );
          })}
        </div>
      </section>
      <article>
        <div className={`${style.subtitle}`}>New Brahmi Collection</div>
        <Img
          props={{
            position: "relative",
            src: `/media/Rectangle 3271.svg`,
            X: 834,
            Y: 531,
            mT: 47,
            L: 224,
            radius: 10,
          }}
        />
        <Img
          props={{
            position: "absolute",
            src: `/media/Rectangle 3272.svg`,
            X: 606,
            Y: 250,
            T: 4270,
            L: 1090,
            radius: 10,
          }}
        />
        <Img
          props={{
            position: "absolute",
            src: `/media/Rectangle 3274.svg`,
            X: 606,
            Y: 250,
            T: 4550,
            L: 1090,
            radius: 10,
          }}
        />
        {/* <Img
          props={{
            position: "relative",
            src: `/media/Rectangle 3271.svg`,
            X: 834,
            Y: 531,
            mT: 47,
            L: 224,
            R: 10,
          }}
        /> */}
      </article>
      <section className={`${style.fourthSetion} bg-white`}>
        <div className={`${style.subtitle} `}>Our Best Sellers</div>
        <div className={`${style.customizeContainer}`}>
          <Img
            props={{
              position: "absolute",
              src: `/media/Group 18962.svg`,
              X: 92,
              Y: 92,
              T: 232,
              L: 1406,
            }}
          />
          {products.map(({ img, txt, price, likes }, index) => {
            return (
              <div className="position-relative">
                <Img
                  props={{
                    position: "absolute",
                    src: `/media/heart-regular.svg`,
                    X: 33.57,
                    Y: 33.68,
                    T: 24,
                    L: 408,
                  }}
                />
                <Img
                  props={{
                    position: "",
                    src: `${img}`,
                    Y: 537,
                    X: 469,
                    R: 10,
                  }}
                />
                <div className={`${style.subCard}`}>
                  <div className={`${style.subCard}`}></div>
                </div>
                <div className={`${style.price}`}>{price}</div>
                <div className={`${style.txt}`}>{txt}</div>
                <Img
                  props={{
                    position: "absolute",
                    src: `/media/Star 8.svg`,
                    Y: 24,
                    X: 24,
                    T: 490,
                    L: 421,
                    zIndex: 3,
                  }}
                />
                <div className={`${style.likes}`}>{likes}</div>
              </div>
            );
          })}
        </div>
      </section>
      <footer>
        <Img
          props={{
            src: `/media/Group 19336.svg`,
            X: 1920,
            Y: 944,
            mT: 176,
          }}
        />
      </footer>
    </div>
  );
}
