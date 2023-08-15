import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #fff4e6;
  padding: 2.5rem 0;
  text-align:center;
  min-height: max-content;
  padding-bottom: 60px;
  padding-top: 20px;
  z-index: 2;
  position: relative;
  @media screen and (max-width: 576px){
    padding-bottom: 0px;
  }

  h1{
    color: #001821;
    font-family: MangoGrotesque-Bold;
    font-size: 300px;
    line-height: 1;
    margin-bottom: auto;
    margin-top: 100px;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    @media screen and (max-width: 576px){
      font-size: 80px;
    }
  }
  p{
    color: #ff8600;
    font-family: AT Surt Regular;
    font-size: 35px;
    line-height: 1;
    margin-bottom: 60px;
    margin-top: -30px;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    @media screen and (max-width: 576px){
      font-size: 18px;
      margin-top: 0px;
    }
  }
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  
  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")`
  background: #fff4e6;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
  @media screen and (max-width: 576px){
    padding-left: 20px;
    padding-right: 20px;
  }
  .text-center{
    text-align:center;

    a{
      color: #001821;
      font-family: AT Surt Regular;
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
      font-size: 20px;
      @media screen and (max-width: 576px){
        font-size:16px;
      }
    }
  }

  .pfooter{
    padding: 20px 80px;
    @media screen and (max-width: 576px){
      padding: 20px 0px;
    }
    p{
      color: #001821;
      font-family: AT Surt Regular;
      font-size: 16px;
      @media screen and (max-width: 576px){
        font-size:12px;
      }
    }
    .text-end{
      text-align:right;
      p{
        color: #001821;
        font-family: AT Surt Regular;
        font-size: 16px;
        margin:0;
        cursor:pointer;
        @media screen and (max-width: 576px){
          font-size:12px;
        }
      }
    }
  }
  
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #18216d;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #18216d;
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;

export const ModalStyles = styled("div")`
  .ant-modal{
    background-color: #fff4e6;
  }
  .body-modal{
    overflow-y: auto;
    height: 500px;
    p{
      font-family:"AT Surt DemiBold";
      font-size:16px;
      color: #5e6162;
    }
  }
`;