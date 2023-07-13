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
    img{
      width:200px;
      margin-top: 100px;
      margin-left: 40px;
      z-index: 2;
      position: relative;
    }
    .textos{
      max-width: 400px;
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
      }
      p{
        color: #ffe8da;
        font-family: AT Surt Regular;
        font-size: 20px;
        line-height: 22px;
        margin-left: 50px;
        text-align: left;
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