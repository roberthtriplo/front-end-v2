import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  z-index:9;
  position: relative;
  padding: 1rem 80px;
  background: linear-gradient(rgba(35,31,32,.7),hsla(0,0%,100%,0));
  border-bottom: 2px solid #ffe8da;
  @media (max-width: 576px){
    padding: 17px 20px;
  }
  @media (min-width: 576px) and (max-width: 992px){
    padding: 10px 40px;
  }
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
  .icon_menu_open{
    display:none;
  }
  .logoHome{
    width:193px;
    @media (max-width: 576px){
      width:150px;
    }
    @media (min-width: 576px) and (max-width: 992px){
      width:150px;
    }
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  @media (min-width: 576px) and (max-width: 992px){
    margin: 0.5rem 10px;
  }
  a{
    color: #fff4e6;
    font-family: AT Surt DemiBold;
    font-size:16px;
    @media (min-width: 576px) and (max-width: 992px){
      font-size:14px;
    }
    &:hover,
    &:active,
    &:focus {
      color: rgb(255, 130, 92);
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const CustomNavLinkSmallLast = styled(NavLink)`
  font-size: 16px;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1rem;
  @media (min-width: 576px) and (max-width: 992px){
    font-size:14px;
  }
  a{
    color: #fff4e6;
    font-family: AT Surt DemiBold;
    font-size:16px;
    @media (min-width: 576px) and (max-width: 992px){
      font-size:14px;
    }
    &:hover,
    &:active,
    &:focus {
      color: rgb(255, 130, 92);
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #fff4e6;
  display: inline-block;
  font-family: AT Surt DemiBold;
  font-size:16px;
  @media (min-width: 576px) and (max-width: 992px){
    font-size:14px;
  }
  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
  }
`;
