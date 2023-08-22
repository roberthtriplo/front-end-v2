import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 0;
  margin-top:-114px;
  height: 100vh;
  @media (max-width: 576px){
    height:100vh;
  }
  @media (min-width: 576px) and (max-width: 992px){
    margin-top: -82px;
    height: auto;
  }
  @media (min-width: 992px) and (max-width: 1400px){
    height: auto;
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
    @media (min-width: 576px) and (max-width: 992px){
      position:relative;
      .img-blue{
        position: absolute;
        left: -560px;
        bottom: 0;
      }
    }
    @media (min-width: 992px) and (max-width: 1200px){
      position:relative;
      .img-blue{
        position: absolute;
        left: -390px;
        bottom: 0;
      }
    }
    @media (min-width: 1200px) and (max-width: 1400px){
      position:relative;
      .img-blue{
        position: absolute;
        left: -390px;
        bottom: 0;
      }
    }
    .btn1{
      bottom: 50px;
      left: 80px;
      @media (min-width: 576px) and (max-width: 992px){
        left:40px;
      }
    }
    .btn2{
      bottom: 50px;
      left: 350px;
      @media (min-width: 576px) and (max-width: 992px){
        left: 220px;
      }
      @media (min-width: 992px) and (max-width: 1200px){
        left:300px;
      }
      @media (min-width: 992px) and (max-width: 1200px){
        left:330px;
      }
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
      @media (min-width: 576px) and (max-width: 992px){
        height: 70px;
        width: 150px;
        font-size: 30px;
        line-height: 30px;
      }
      @media (min-width: 992px) and (max-width: 1200px){
        height: 80px;
        width: 200px;
        font-size: 40px;
        line-height: 30px;
      }
      @media (min-width: 1200px) and (max-width: 1400px){
        height: 85px;
        width: 226px;
        font-size: 43px;
      }

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
    @media (min-width: 576px) and (max-width: 1400px){
      position:relative;
    }
    .img-orange{
      @media (min-width: 576px) and (max-width: 992px){
        position: absolute;
        bottom: 0px;
        right: -300px;
      }
      @media (min-width: 992px) and (max-width: 1200px){
        position: absolute;
        bottom: 0;
        right: -300px;
      }
      @media (min-width: 1200px) and (max-width: 1400px){
        position: absolute;
        bottom: 0;
        right: -45px;
      }
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
      @media (min-width: 576px) and (max-width: 992px){
        width: 262px;
        max-width: 262px;
        right: 40px;
        font-size: 15px;
        bottom: 50px;
      }
      @media (min-width: 992px) and (max-width: 1200px){
        width: 262px;
        max-width: 262px;
        right: 40px;
        font-size: 15px;
        bottom: 50px;
      }
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
      @media (min-width: 576px) and (max-width: 992px){
        font-size: 60px;
        line-height: 60px;
        right: 40px;
        bottom: 80px;
        max-width: 262px;
      }
      @media (min-width: 992px) and (max-width: 1200px){
        font-size: 60px;
        line-height: 60px;
        right: 40px;
        bottom: 80px;
        max-width: 262px;
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

