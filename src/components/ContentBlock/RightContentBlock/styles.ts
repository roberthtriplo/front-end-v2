import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 0;
  margin-top:-114px;
  height: 100vh;
  @media (max-width: 576px){
    height:100vh;
    margin-bottom:50px;
  }
  .img_slider{
    width:100%;
  }
  .buttons-group{
    position:absolute;
    bottom: 0px;
    left: 0px;
    z-index:99;
    @media (max-width: 576px){
      position:relative;
    }
    .btn1{
      bottom: 50px;
      left: 80px;
    }
    .btn2{
      bottom: 50px;
      left: 350px;
    }
    button{
      background-color: #fff4e6;
      border: none;
      color: #001821;
      cursor: pointer;
      font-family: MangoGrotesque-Bold;
      height: 92px;
      width: 256px;
      color: #001821;
      font-size: 50px;
      line-height: 50px;
      margin-right:20px;
      position:absolute;

      &:hover{
        color: #ffe8da;
        background-color: #001821;
      }
    }
  }
  .text-end-float{
    position: absolute;
    right: 0;
    bottom: 0;
    .img-orange{

    }
    p{
      color: #ffe8da;
      font-family: AT Surt DemiBold;
      font-size: 20px;
      max-width: 441px;
      text-align:right;
      margin-bottom:0;
      position: absolute;
      bottom: 50px;
      right:80px;
    }
    h1{
      color: #ffe8da;
      font-family: MangoGrotesque-Bold;
      font-size: 100px;
      line-height: 100px;
      max-width: 441px;
      text-align:right;
      position: absolute;
      bottom: 60px;
      right:80px;
      @media (max-width: 576px){
        font-size: 70px;
        line-height: 70px;
        bottom: 450px;
      }
    }
  }
  /*@media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }*/
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

