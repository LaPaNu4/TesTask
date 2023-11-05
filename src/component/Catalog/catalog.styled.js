import { styled } from "styled-components";

export const SectionCar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .carList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .carItem {
    display: flex;
    width: 275px;
    height: 425px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    margin-left: 14.5px;
    margin-right: 14.5px;
    margin-top: 50px;
  }
  .imgCar {
    width: 275px;
    height: 270px;
  }
  .titleDiv {
    display: flex;
    width: 275px;
    margin-top: 14px;
  }
  .margTitle {
    margin-right: 2px;
  }
  .blackTitle {
    color: #121417;

    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
  }
  .titlePrice {
    margin-left: auto;
  }
  .blurTitle {
    color: #3470ff;
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
  }
  .carDescrList {
    display: flex;
    flex-wrap: wrap;
    width: 270px;
    height: 40px;
    flex-direction: row;
    align-items: flex-start;
    gap: 4px;
    margin-top: 8px;
  }
  .carDescrItem {
    color: rgba(18, 20, 23, 0.5);

    font-family: "Manrope", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    padding-right: 8px;
  }
  .carDescrItem::after {
    content: "|";
    position: absolute;
    right: 0;
  }
  .learnBtn {
    display: flex;
    width: 274px;
    height: 44px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    background: #3470ff;
    color: #fff;
    font-family: "Manrope", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.42;
    margin-top: 28px;
  }
  .learnBtn:hover,
  .learnBtn:focus {
    background: #0b44cd;
  }
  .loadBTN {
    margin-top: 100px;

    color: #3470ff;

    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5; /* 150% */
    text-decoration-line: underline;
    border: 0;
    background-color: transparent;
  }
  .loadBTN:hover,
  .loadBTN:focus {
    color: #0b44cd;
  }
`;
