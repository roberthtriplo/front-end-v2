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
  .petiqueta{
    max-width: max-content;
    margin: 0;
    background: rgba(0,24,33, 0.78);
    padding: 5px 30px;
    position: absolute;
    bottom: 30px;
    z-index: 9;
    right: 40px;
    font-family: 'AT Surt Light';   
    font-size: 24px;
    color: #FFE8DA;   
    @media screen and (max-width: 540px){
      padding: 3px 3px;
      bottom: 25px;
      right: 0;
      font-size: 13px;
      left: 0;
      margin: 0 auto;
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
    @media screen and (max-width: 576px){
      padding-bottom:20px;
    }
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

    }
    p{
        font-family: 'AT Surt Regular';
        color:#001821;
        font-size: 25px;
        font-weight: bold;
        @media (max-width: 576px){
            color: #ffe8da;
            max-width: 65%;
            margin: 0 auto;
            font-size: 13px;
        }
    }
    img{
      width: 145px;
      position: absolute;
      left: 0;
      top: 95px;
      @media (max-width: 576px){
        width: 55px;
        left: 3px;
        top: 44px;
    
      }
    }
  }
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;
