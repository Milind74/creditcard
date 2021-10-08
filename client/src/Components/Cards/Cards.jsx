import { BsFillCreditCardFill } from "react-icons/bs";
import style from "./Cards.module.css";
import styled from "styled-components";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
export const Cards = () => {
  const CardWrapper = styled.div`
    width: 85vw;
    margin: 30px auto;
    text-align: left;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 10px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;
  return (
    <CardWrapper>
      <div className={style.soloCard}>
        <h5 className={style.prodHeading}>CREDIT CARDS</h5>
        <p className={style.prodDesc}>
          From 50+ options, choose a card matching your lifestyle & needs
        </p>

        <BsFillCreditCardFill
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            right: 0,
            bottom: 0,
            padding: "5px",
            color: "#D35757",
          }}
        />
      </div>
      <div className={style.soloCard}>
        <h5 className={style.prodHeading}>Personal Loan</h5>
        <p className={style.prodDesc}>
          Select the best offer curated just for you from a wide choice of
          lenders
        </p>
        <FaHandHoldingHeart
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            right: 0,
            bottom: 0,
            padding: "5px",
            color: "#D35757",
          }}
        />
      </div>
      <div className={style.soloCard}>
        <h5 className={style.prodHeading}>
          Micro Loans <br /> (Under ₹50K)
        </h5>
        <p className={style.prodDesc}>
          Instant small ticket loans to meet your immediate cash needs
        </p>
        <FaHandHoldingMedical
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            right: 0,
            bottom: 0,
            padding: "5px",
            color: "#D35757",
          }}
        />
      </div>
      <div className={style.soloCard}>
        <h5 className={style.prodHeading}>Business Loan</h5>
        <p className={style.prodDesc}>
          Expand your business with loans at lowest interest rates
        </p>
        <FaHandHoldingUsd
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            right: 0,
            bottom: 0,
            padding: "5px",
            color: "#D35757",
          }}
        />
      </div>
      <div className={style.soloCard}>
        <h5 className={style.prodHeading}>Transfer Personal Loan</h5>
        <p className={style.prodDesc}>
          Get better interest rates on your existing personal loan
        </p>
        <FaHandHoldingWater
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            right: 0,
            bottom: 0,
            padding: "5px",
            color: "#D35757",
          }}
        />
      </div>
      <div className={style.soloCard}>
        <h5 className={style.prodHeading}>New Home Loan</h5>
        <p className={style.prodDesc}>
          Choose from lowest interest rates available for your dream home
        </p>
        <FcHome
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            right: 0,
            bottom: 0,
            padding: "5px",
          }}
        />
      </div>
    </CardWrapper>
  );
};
