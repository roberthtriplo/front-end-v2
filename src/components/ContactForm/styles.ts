import styled from "styled-components";

export const ContactContainer = styled("div")`
  z-index: 2;
  position: relative;
  background-color:rgb(255, 244, 230);
  @media screen and (max-width: 576px){
    padding:0;
  }
  .mural{
    img{
      width:100%;
    }
  }
  .sticker{
    transform: rotate(-21deg);
    position: absolute;
    z-index: 1;
    left: -340px;
    @media screen and (max-width: 540px){
      left: -120px;
      width: 500px;
      position: absolute;
      transform: rotate(-21deg);
      z-index: 1;
      top: 25px;
    }
    @media (min-width: 576px) and (max-width: 992px){
      width: 600px;
      left: -92px;
      top: 26px;
    }
  }
  @mixin white-gradient {
      background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
  }


  // Styling
  .slider {
      background: white;
      background:url(/img/fondo_aliados.webp);
      background-position-x: center;
      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
      height: 500px;
      margin: auto;
      overflow:hidden;
      position: relative;
      width: 100%;
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-250px * 7))}
      }
      @media screen and (max-width: 576px){
        background:url(/img/fondo_aliados_mob.webp);
        background-size: cover;
        background-repeat: no-repeat;
        height: 320px;
      }
      @media (min-width: 576px) and (max-width: 992px){
        height:400px;
      }
      .slide-track {
          animation: scroll 40s linear infinite;
          display: flex;
          width: calc(250px * 7);
          position: relative;
          top: 43%;
          transform: translateY(-50%);
          height: 100px;
      }
      .s1{
        top:145px;
      }

      .s2{
        top:380px;
      }

      .s3{
        top:590px;
      }
      
      .slide {
          width: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          margin-left: 30px;
          margin-right: 30px;
          text-align: center;
          img{
              max-height: 100px;
              @media screen and (max-width: 576px){
                max-height: 45px;
              }
              @media (min-width: 576px) and (max-width: 992px){
                max-height: 60px;
              }
          }
      }
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
