import { useState, useRef, useEffect } from "react";
/* import { IoIosArrowForward } from "react-icons/io"; */

import style from "./Carousel.module.css";
export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const colors = new Array(4).fill(0);
  const head = [
    {
      h1: "Fix possible Errors",
      p: "If you see any discrepancy in your credit history, we can help get it corrected from the Bureau.",
    },
    {
      h1: "Fix possible Errors",
      p: "If you see any discrepancy in your credit history, we can help get it corrected from the Bureau.",
    },
    {
      h1: "Fix possible Errors",
      p: "If you see any discrepancy in your credit history, we can help get it corrected from the Bureau.",
    },
    {
      h1: "Fix possible Errors",
      p: "If you see any discrepancy in your credit history, we can help get it corrected from the Bureau.",
    },
  ];
  const delay = 1500;

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
    <div className={style.slideshow}>
      <div
        className={style.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className={style.slide}>
          <div className={style.slidechild1}>
            <div className={style.slidechild}><h4 style={{textAlign:"center",marginTop:"15px"}}>1</h4></div>
            <div className={style.slidechild3}>
              <h4>Track your Credit Health</h4>

              <p style={{fontSize:"15px"}}>
              Fill the form on the right just once &<br /> monitor your credit 
              score for <br /> free without
               any hassles.
              </p>
            </div>
          </div>
        </div>
        <div className={style.slide}>
          <div className={style.slidechild1}>
            <div className={style.slidechild}><h4 style={{textAlign:"center",marginTop:"15px"}}>2</h4></div>
            <div className={style.slidechild3}>
              <h4>Get deep Insights</h4>

              <p style={{fontSize:"15px"}}>
              See what makes your score <br />  change & ways to improve 
              your <br /> credit health.
              </p>
            </div>
          </div>
        </div>
        <div className={style.slide}>
          <div className={style.slidechild1}>
            <div className={style.slidechild}><h4 style={{textAlign:"center",marginTop:"15px"}}>3</h4></div>
            <div className={style.slidechild3}>
              <h4>Make Better Decisions</h4>

              <p style={{fontSize:"15px"}}>
              Personalised recommendations <br />
             based  on your  credit history <br />
              to help you
              save <br /> money & 
              spend wisely.
              </p>
            </div>
          </div>
        </div>
        <div className={style.slide}>
          <div className={style.slidechild1}>
            <div className={style.slidechild}><h4 style={{textAlign:"center",marginTop:"15px"}}>4</h4></div>
            <div className={style.slidechild3}>
              <h4>Fix possible Errors</h4>

              <p style={{fontSize:"15px"}}>
                If you see any discrepancy in you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
