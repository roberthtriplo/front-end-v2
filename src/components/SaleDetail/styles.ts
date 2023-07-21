import styled from "styled-components";

export const Container = styled("div")`
    background-color: #e6f9ff;
    width: 100%;
    padding-bottom:50px;
    height: 100vh;   

    .superior{
        height: 50vh;
        background: #e6f9ff;

        .tit{
            font-family: "AT Surt Bold";
            font-size: 30px;
            color: #001821;
            text-transform: uppercase;
            margin: 0;
            line-height: 1;
            font-weight: 100;
            text-align: center;
            margin-top: 200px;
            z-index: 2;
            position:relative;
        }
        .wc{
            max-width: 250px;
            position: absolute;
            left: 180px;
            top: 180px;
        }
        .what-icon{
            position: absolute;
            bottom: 40px;
            right: 80px;
            z-index:2;
            svg{
                width: 100px;
                height: 100px;
                color: #FFE8DA;
            }
        }
    }

    .inferior{
        height: 50vh;
        background: #003f5f;
        .text-end{
            text-align:right;
        }
        .text1{
            color: #FFE8DA;
            font-family: "AT Surt Regular";
            font-size: 40px;
            text-align: right;
            line-height: 60px;
            margin-right: 80px;
            position: relative;
            max-width: 500px;
            float: right;
            z-index:2;
        }
    }

    .custom-top{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("/img/bg_resultado.webp");
        background-repeat: no-repeat;
        background-position: top right;
        background-size: contain;
        .c1{
            display: flex;
            align-items: center;
            position:relative;

            .img-ninas{
                max-width: 450px;
                margin: 0 auto;
            }
            .img-sticker{
                max-width: 150px;
                max-width: 250px;
                position: absolute;
                top: 180px;
                left: 60px;
                cursor:pointer;
            }
        }
        .text-center{
            text-align:center;
        }
        
    }

    .row1{
        height:50vh;
        text-align:center;
        background: url(/img/header_resultados.webp) no-repeat;
        background-size: cover;
        .imgSticker{
            position: absolute;
            width: 240px;
            height: auto;
            z-index:1;
            left: 119px;
            top: 65px;
            transform: rotate(350deg);
            cursor:pointer;
        }
        .p1{
            margin: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            color: #e6f9ff;
            font-family: AT Surt Regular;
            font-size: 40px;
            line-height: 1;
        }
    }
    .bg_header2{
        filter: grayscale(1);
    }
    .row2{
        height:50vh;
        text-align:center;

        .p1{
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            color: #001821;
            font-family: MangoGrotesque-Bold;
            font-size: 120px;
            line-height: 1;
        }
    }
    .row3{
        position: absolute;
        top: 30vh;
        width: 100%;
        left: 0px;

        .text-center{
            text-align:center;
        }

        .card-custom{
            width: 480px;
            height: 620px;
            margin: 0 auto;
            border-color:transparent;
            .ant-card-body {
                padding: 40px;
            }
            img{
                width: 150px;
                position: absolute;
                bottom: -40px;
                z-index: 2;
                right: -40px;
                display:none;
            }
            .cbody{
                background: #fff4e6;
                padding: 30px;
                height: 540px;
                
                h1{
                    padding-top:30px;
                    margin-bottom: 30px;
                    color: #001821;
                    font-family: MangoGrotesque-Bold;
                    font-size: 65px;
                    line-height: 50px;
                    text-align: center;
                    text-transform:uppercase;
                }
                h5{
                    color: #001821;
                    font-family: AT Surt Regular;
                    font-size: 15px;
                    font-weight: 100;
                }
                ul{
                    position: relative;
                    padding-left: 45px;
                    list-style: none;
                    margin-top: 40px;
                }
                ul::before {
                    display: inline-block;
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 13px;
                    width: 10px;
                    height: 65%;
                    border-left: 2px solid #001821;
                }
                ul li {
                    position: relative;
                    counter-increment: list;
                    color: #001821; 
            
                    h2{
                      font-family: "MangoGrotesque-Bold";
                      text-align: left;
                      line-height: 1;
                      font-size:30px;
                      color: #001821;
                    }
                    p{
                      color: #001821; 
                      font-size:14px;
                      text-align:left;
                      margin:0;
                    }
                    
                }
            
                ul li:not(:last-child) {
                    padding-bottom: 20px;
                }
                ul li::before {
                    display: inline-block;
                    content: '';
                    position: absolute;
                    top: 4px;
                    left: -33px;
                    z-index: 9;
                    width: 2px;
                    height: 2px;
                    border: 2px solid #001821;
                    border-radius: 100%;
                }
                ul li::after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    left: -37px;
                    width: 12px;
                    height: 12px;
                    border: 2px solid #001821;
                    border-radius: 50%;
                    background-color: #fff4e6;
            
                }
                ul strong {
                    display: block;
                }

                .ant-collapse{
                    background: transparent;
                    border: none;
                    .ant-collapse-item{
                        border:none;
                        .ant-collapse-header{
                            padding-bottom: 4px;
                            border-bottom:solid 2px #001821;
                        }
                    }
                }
                .ant-collapse-header-text{
                    font-family: MangoGrotesque-Bold;
                    font-size: 30px;
                    line-height: 1;
                    flex:initial;       
                    color:#001821;             
                }
                .ant-collapse-content{
                    background: transparent;
                    border:none;
                    .ant-collapse-content-box{
                        padding: 4px;
                        background: transparent;
                        p{
                            font-family: AT Surt Regular;
                            font-size: 12px;
                            margin: 0;
                        }
                    }
                }
            }
        }

        .consignacion{
            background: url("/img/bg_card_consignacion.webp");
            background-size: cover;
            &:hover{
                background-color:#ff8600;
                background-image:none;
                cursor:pointer;
                img{
                    display:inherit;
                }
                .cbody{
                    cursor:pointer;
                    background:#001821;
                    ul,p,li, h1, h5, h2{
                        color: #fff4e6;
                    }
                    .ant-collapse-header-text{
                        color: #fff4e6;
                    }
                    .ant-collapse{
                        .ant-collapse-item{
                            .ant-collapse-header{
                                border-bottom-color: #fff4e6;
                            }
                        }
                    }
                }
            }
        }
        .directa{
            background: url("/img/bg_card_ventas.webp");
            background-size: cover;  
            &:hover{
                background-color:#ff8600;
                background-image:none;
                cursor:pointer;
                img{
                    display:inherit;
                }
                .cbody{
                    cursor:pointer;
                    background:#001821;
                    ul,p,li, h1, h5, h2{
                        color: #fff4e6;
                    }
                    ul::before {
                        border-color:#fff4e6;
                    }                    
                }
            }          
        }
    }
`