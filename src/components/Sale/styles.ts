import styled from "styled-components";

export const Content = styled("p")`
  margin-top: 1.5rem;
`;

export const Container = styled("div")`
  position: relative;
  max-width: 100%;
  padding:30px 0;
  z-index:2;
  background-color:rgb(255, 244, 230);
  @media (max-width: 576px){
    margin-top:-12px;
  }
  .mauto{
    margin: 0 auto;
  }
  .prelative{
    position:relative;

    a{
      position: absolute;
      left: 137px;
      top: 0px;
      z-index: 999;
      font-size: 16px;
      color: #7fc9ea;
      font-family: "AT SURT MEDIUM";
      border: solid 1px #ff8600;
      padding: 8px 20px 6px 20px;
      @media (max-width: 576px){
        border-bottom: 0;
      }
    }
  }
  .ant-tabs-nav{
    margin-bottom:0;
    &::before{
      border-color:#ff8600;
    }
  }
  .ant-tabs-content-holder{
    border-right: solid 1px #ff8600;
    border-left: solid 1px #ff8600;
    border-bottom: solid 1px #ff8600;
  }
  .ant-tabs-nav-list{
    .ant-tabs-tab{
      background-color:rgb(255, 244, 230);
      border: 1px solid #ff8600;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      font-family: AT SURT MEDIUM;
      cursor: pointer;
      margin:0 !important;
      .ant-tabs-tab-btn{
        color: #7fc9ea;
        font-size:16px;
      }
    }
    .ant-tabs-tab-active{
      background: #ff8600;
      border-color: #ff8600;      
      font-family: AT SURT MEDIUM;
      .ant-tabs-tab-btn{
        color: #ffe8da;
        font-size:16px;
      }
    }  
  }
  .bgSale{
    background-image: url(/img/bg_comprar_home.webp);
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
    @media (max-width: 576px){
      background-image:none;
    }
    @media (min-width: 576px) and (max-width: 992px){
      background-position-x: -220px;
    }
    img{
      width:200px;
      margin-top: 100px;
      margin-left: 40px;
      z-index: 2;
      position: relative;
      @media (max-width: 576px){
        width: 120px;
        margin-top: -130px;
        margin-left: 10px;
        display: inline;
      }
      @media (min-width: 576px) and (max-width: 992px){
        width: 150px;
        margin-top: 90px;
        margin-left: 30px;
      }
    }
    .formVentas{
      form{
        @media (max-width: 576px){
          padding-left: 30px;
          padding-right: 30px;
        }
      }
    }
    .textos{
      max-width: 400px;
      @media (max-width: 576px){
        display: inline-block;
        width: 200px;
        padding-top: 48px;
        margin-left: 17px;
      }
      @media (min-width: 576px) and (max-width: 992px){
        width: 300px;
      }
      h1{
        color: #ffe8da;
        font-family: MangoGrotesque-Bold;
        font-size: 95px;
        line-height: 82px;
        margin-left: 50px;
        margin-top: -12px;        
        position: relative;
        text-align: left;
        z-index: 1;
        margin-bottom: 20px;
        @media (max-width: 576px){
          color: #001821;
          font-size: 58px;
          line-height: 58px;
          margin-bottom: 0;
          margin-left: 0;
        }
        @media (min-width: 576px) and (max-width: 992px){
          font-size: 64px;
          line-height: 60px;
          margin-left: 30px;
        }
      }
      p{
        color: #ffe8da;
        font-family: AT Surt Regular;
        font-size: 20px;
        line-height: 22px;
        margin-left: 50px;
        text-align: left;
        @media (max-width: 576px){
          color: #001821;
          font-size: 12px;
          line-height: 2px;
          margin-left:10px;
          font-weight: 100;
        }
        @media (min-width: 576px) and (max-width: 992px){
          margin-left: 30px;
        }
      }
    }
  }  
  .formVentas{
    max-width:450px;
    margin: 0 auto;
    margin-top: 10px;

    .ant-row{
      display:block;
      .ant-form-item-explain-error{
        text-align:right;
      }
    }
    .ant-form-item{
      margin-bottom:10px;
      font-family:AT Surt Regular;
      .ant-form-item-label{
        label{
          font-size:13px;
          color:#5e6162;
          height:auto;
        }
      }
      
      .ant-form-item-control-input{
        .ant-select-focused{
          box-shadow:none !important;
        }
        .ant-select-selector, .ant-input{
          border: none !important;
          border-bottom: solid 1px #5e6162 !important;
          background-color:transparent !important;
          border-radius: 0;
          box-shadow:none;
          &:focus{
            box-shadow:none;
          }
        }
        
        .ant-input-status-error{
          border-bottom-color:red !important;
        }
      }
    }
    input:focus-within, textarea:focus-within{
      box-shadow:none;
    }
  }
  .btn2{
    background-color: #ffe8da;
    border: 2px solid #ff8600;
    color: #001821;
    font-family: AT Surt ExtraBold;
    font-size: 18px;
    height: 50px;
    width: 200px;
    &:hover{
      background: #001821;
      border: none;
      color: #ffe8da;
    }
  }
  .text-center{
    text-align:center;
  }
  .chkTerm{
    font-size:11px;
  }
  .ant-slider-mark-text{
    font-size:12px;
    font-family:AT Surt Regular;
  }
  .ant-form-item-explain-error{
    font-size:12px;
  }
  .ant-tabs-content{
    margin-top:-3px;
  }
`;