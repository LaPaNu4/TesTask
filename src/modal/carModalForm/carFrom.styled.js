import styled from "styled-components";

export const FormDiv = styled.div`
  width: 540px;
  height: 755px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .xBtn {
    border: 0;
    background: transparent;
    position: absolute;
    right: 16px;
    top: 16px;
  }

  .imgCar {
    width: 460px;
    height: 250px;
    border-radius: 14px;
    margin-top: 40px;
    object-fit: cover;
  }

  .titleDiv {
    display: flex;
    margin-top: 14px;
    margin-right: auto;
    margin-left: 40px;
  }
  .blackTitle {
    color: #121417;

    font-family: "Manrope", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
  }
  .margTitle {
    margin-right: 2px;
  }
  .blurTitle {
    color: #3470ff;
    font-family: "Manrope", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
  }
  .carDescrList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    gap: 4px;
    margin-top: 8px;
    margin-right: auto;
    margin-left: 40px;
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
  .description {
    color: #121417;
    width: 460px;
    font-family: "Manrope", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
    margin-top: 14px;
  }
  .acesDiv {
    display: flex;
    width: 460px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .titleMass {
    margin-top: 24px;
    color: #121417;

    font-family: "Manrope", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
  }
  .listMass {
    display: flex;
    flex-wrap: wrap;
  }
  .itemMass {
    color: rgba(18, 20, 23, 0.5);

    font-family: "Manrope", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    padding-right: 8px;
  }

  .carDescrItemAft::after {
    content: "|";
    position: absolute;
    right: 0;
    margin-right: 2px;
  }
  .rentDiv {
    margin-top: 24px;
    margin-right: auto;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .rentTitle {
    color: #121417;

    font-family: "Manrope", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
  }
  .rentDescr {
    display: flex;
    width: 460px;
    gap: 36px;
  }
  .rentItem {
    color: #363535;
    font-family: "Manrope", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 150% */
    letter-spacing: -0.24px;
  }
  .rentCar {
    color: #fff;
    font-family: "Manrope", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.42;
    display: inline-flex;
    padding: 12px 50px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #3470ff;
    position: absolute;
    left: 40px;
    bottom: 40px;
  }
  .rentCar:hover,
  .rentCar:focus {
    background: #0b44cd;
  }
`;
