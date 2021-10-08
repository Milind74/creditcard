import { useState, useRef, useEffect } from "react";
/* import { IoIosArrowForward } from "react-icons/io"; */

import "./Header.css";
export const Header = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const colors = ["#0088FE", "#00C49F"];
  const head = [
    {
      image:
        "https://www.paisabazaar.com/PBHP/assets/images/cardSahiBanner.png",
      button: "Get Free Credit Report",
    },
    {
      image: "https://www.paisabazaar.com/PBHP/assets/images/hp-banner-img.svg",
      button: "Apply Now",
    },
  ];
  const delay = 3000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="slide">
          <div className="soloSlide">
            <img src={head[0].image} alt="" />
            <div>
              <div>
                <h1 className="textBlue">
                  <strong className="textPink">
                    Your Credit Score & Report
                  </strong>
                  <br />
                  <span
                    className="textBlue"
                    style={{ textDecoration: "line-through" }}
                  >
                    worth ₹1,200
                  </span>
                  <span className="textPink"> Absolutely FREE</span>
                </h1>

                <p className="headerPara">
                  Your credit score is more than just a number. It’s the key to
                  help you unlock
                  <br /> the doors to the best loans & credit card offers
                  available
                </p>
              </div>
              <button className="headerButton">{head[0].button}</button>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="soloSlide">
            <img src={head[1].image} alt="" />
            <div>
              <div>
                <h1>
                  <strong className="textPink">Card Sahi, Milega Yahin</strong>
                  <br />
                  <span className="textBlue">
                    Get best Credit Cards for all your needs
                  </span>
                </h1>
                <ul className="slide2Sub">
                  <li>Dining</li>
                  <li>Travel</li>
                  <li>Rewards</li>
                </ul>
              </div>

              <button className="headerButton">{head[1].button}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
