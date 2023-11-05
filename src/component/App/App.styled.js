import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.header`
  margin-top: 20px;
  .nav {
    display: flex;
    width: 1184px;
    justify-content: space-evenly;
  }

  .button-8 {
    font-family: "Manrope", sans-serif;
    color: #fff;
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
    text-decoration: none;
  }

  .button-8:hover,
  .button-8:focus {
    background: #0b44cd;
  }

  .active {
    background: #0b44cd;
  }
`;
