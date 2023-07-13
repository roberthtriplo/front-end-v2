import styled from "styled-components";

export const Content = styled("p")`
  margin-top: 1.5rem;
`;

export const Container = styled("div")`
  position: relative;
  max-width: 100%;
  z-index: 2;
  background-color:rgb(255, 244, 230);
  .cimages{
    img{
      width: 100%;
    }
  }
  .bg{
    background-image: url(/img/quienes_somos.webp);
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
  }
  .prelative{
    position:relative;
    margin: 0 auto;
    max-width: 1000px;
    text-align:center;
    padding-top:20px;
    h1{
      font-family: 'MangoGrotesque-Bold';
      font-size: 100px;
      line-height: 100px;
      margin: 0 auto;
      color:#001821;
      @media screen and (max-width: 576px){
          font-size: 36px;
          line-height: 32px;
      }
      @media (min-width: 576px) and (max-width: 768px) {
          font-size: 65px;
          line-height: 68px;
      }
      @media (min-width: 768px) and (max-width: 992px){
          font-size: 60px;
          line-height: 60px;
      }
    }
    p{
        font-family: 'AT Surt Regular';
        color:#001821;
        font-size: 25px;
        font-weight: bold;
        @media (max-width: 576px){
            color: $text-menu-triplo;
            max-width: 50%;
            margin: 0 auto;
            font-size: 13px;
        }
        @media (min-width: 576px) and (max-width: 768px) {
            max-width: 50%;
            margin: 0 auto;
            font-size: 20px;
        }
        @media (min-width: 768px) and (max-width: 992px){
            font-size: 18px;
            max-width: 400px;
            margin: 0 auto;
        }
        @media (min-width: 992px) and (max-width: 1200px){
            font-size: 25px;
            max-width: 440px;
            margin: 0 auto;
        }
    }
    img{
      width: 145px;
      position: absolute;
      left: 0;
      top: 95px;
      @media (max-width: 576px){
          width: 75px;
          left: 20px;
          top: 50px;
      }
      @media (min-width: 576px) and (max-width: 768px) {
          width: 130px;
          position: absolute;
          left: 50px;
          top: 80px;
      }
      @media (min-width: 768px) and (max-width: 992px){
          width: 120px;
          left: 50px;
          top: 71px;
      }
  }
  }
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;
