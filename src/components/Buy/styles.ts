import styled from "styled-components";

export const Container = styled("div")`
  position: relative;
  max-width: 100%;
  z-index:2;
  background-color:#001821;
  padding-bottom:50px;
  
  .bg{
    background-image: url(/img/header.webp);
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: contain;
    height: 500px;
    position: relative;
    width: 100%;

    img{
      margin-top: 120px;
      width: 250px;
      margin-left: 80px;
    }
  }
  .p80{
    padding-left:80px;
    padding-right:80px;
    .pfilter-sel{
        max-width: max-content;
        background: #c14717;
        padding: 0px 10px;
        font-size: 12px;
        border-radius: 7px;
        font-family: 'AT Surt Regular';
        display: inline-block;
        color: #fff4e6;
        font-style: italic;
        cursor: pointer;
        line-height: 20px;
        margin: 0;
        margin-right: 10px;
        
        svg{
            width: 15px;
            height: 15px;
            color: #ffedd2;
            font-weight: bold;
        }
    }
    
    .pfilter-sel-2{
        max-width: max-content;
        background: #7fc9ea;
        padding: 0px 10px;
        font-size: 12px;
        border-radius: 7px;
        font-family: 'AT Surt Regular';
        display: inline-block;
        color: #ffedd2;
        font-style: italic;
        cursor: pointer;
        line-height: 20px;
        margin: 0;
        margin-right: 10px;
        
        svg{
            width: 15px;
            height: 15px;
            color: #ffedd2;
            font-weight: bold;
        }
    }
    .text-end{
      text-align: right;
      padding-right: 15px;
      .select-order{
        .ant-select-selector{
          background: #c14717;
          border-color: #c14717;
          .ant-select-selection-search{
            input{
              &:focused{
                boorder:none;
              }
            }
          }
          .ant-select-selection-item{
            font-size: 16px;
            color: rgb(255, 232, 218);
            font-family: "AT Surt Regular";
          }
        }
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{
          box-shadow:none;
        }
        .ant-select-dropdown{
          background:yellow;
        }
      }      
    }

    .filtros-new{
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10%;
      align-items: center;
      border: 2px solid #c14717;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      &::-webkit-scrollbar{
        display: none;
      }
      .fc-filtros{
        min-width: fit-content;
        margin-right: 25px;
        a{
          color: #ffedd2;
          font-family: AT Surt Regular;
          font-size: 20px;
          padding: 6px 8px 6px 8px;
        }
        .ant-dropdown-open{
          background:#7fc9ea;
          border-radius: 8px;
          

          .svg-arrow{
            svg{
              color: #c14717;
            }
          }
        }
        .svg-arrow{
          vertical-align:-4px;
          svg{
            width: 18px;
            height:18px;
            color: #7fc9ea;
            font-weight: bold;
          }
        }
      }
    }

    h1{
      font-family: MangoGrotesque-Regular;
      font-size: 70px;
      line-height: 60px;
      margin: 0;
      color: rgb(255, 244, 230);
      font-weight: 100;
    }
    h3{
      font-family: MangoGrotesque-Regular;
      font-size: 50px;
      line-height: 40px;
      margin: 0;
      color: rgb(255, 244, 230);
      font-weight: 100;
      text-align:center;
    }
    p{
      color: #c14717;
      font-family: AT Surt Regular;
      font-size: 26px;
      line-height: 26px;
      margin-bottom: 25px;
      margin-left: 15px;
    }
    .img-wrap{
      cursor: pointer;
      margin-bottom: 20px;
      overflow: hidden;
      position: relative;
      padding: 15px;

      img{
        height: auto;
        max-width: 100%;
      }

      .description{
        position: absolute;
        inset: 15px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        visibility: hidden;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align:center;
        /* transition effect. not necessary */
        transition: opacity .2s, visibility .2s;
        margin: 0 auto;
        .content{
            p{
              line-height: 1.5;
              margin: 0;
              color: #ffe8da;
              font-size:18px;
            }
            p:first-child{
              font-size: 17px;
            }
            p:nth-child(2){
                border-bottom: 3px solid #ff8600;
            }
        }
      }
    }
    .img-wrap:hover .description {
      visibility: visible;
      opacity: 1;
      inset:15px;
    }
  }
  .verMas{
    background: rgb(255, 244, 230);
    max-width: 150px;
    margin: 0 auto;
    color: #001821;
    font-family: 'MangoGrotesque-Bold';
    font-size: 50px;
    cursor: pointer;
    line-height: 1;
    padding: 10px 0;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align:center;
    @media screen and (max-width: 768px){
        font-family: "MangoGrotesque-Bold";
        max-width: 116px;
        font-size: 33px;
        padding: 6px 0;
        margin-top: 0px;
    }
  }
  .text-center{
    text-align:center;
  }
`;