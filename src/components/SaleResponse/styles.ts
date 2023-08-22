import styled from "styled-components";

export const Container = styled("div")`
    background-color: #fff4e6;
    width: 100%;
    padding-bottom:50px;
    height: 100vh;   
    @media screen and (max-width: 576px){
        padding-bottom:0px;
    }
    .row1{
        height: 50vh;
        background: url('/img/bg_separacion.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        @media screen and (max-width: 576px){
            height: 25vh;
        }
        @media (min-width: 576px) and (max-width: 768px){
            height: 25vh;
        }
        @media (min-width: 768px) and (max-width: 992px){
            height: 30vh;
        }
        @media (min-width: 992px) and (max-width: 1200px){
            height: 30vh;
        }
    }

    .row2{
        height: 50vh;
        position:relative;
        @media screen and (max-width: 576px){
            height: 75vh;
        }
        @media (min-width: 576px) and (max-width: 768px){
            height: 75vh;
        }
        @media (min-width: 768px) and (max-width: 992px){
            height: 70vh;
        }
        @media (min-width: 992px) and (max-width: 1200px){
            height: 70vh;
        }
        .st{
            position: absolute;
            width: 200px;
            top: -100px;
            left: 100px;
            cursor:pointer;
            @media screen and (max-width: 576px){
                left:25px;
                top:-50px;
                width:100px;
            }
            @media (min-width: 576px) and (max-width: 768px){
                width: 150px;
                top: -80px;
                left: 80px;
            }
        }
        h2{
            font-family: "MangoGrotesque-Bold";
            color: #001821;
            font-size: 60px;
            margin-top: 120px;
            margin-bottom: 20px;
            @media screen and (max-width: 576px){
                margin-top: 60px;
                font-size: 28px;
            }
            @media (min-width: 576px) and (max-width: 768px){
                font-size: 50px;
                margin-top: 94px;
                margin-bottom: 20px;
                line-height: 50px;
            }
            @media (min-width: 768px) and (max-width: 992px){
                font-size: 50px;
                line-height: 60px;
            }
            @media (min-width: 992px) and (max-width: 1200px){
                font-size: 45px;
                line-height: 55px;
            }
        }
        p{
            font-family: 'AT Surt Regular';
            font-size: 18px;
            color: #6c757d;
            @media screen and (max-width: 576px){
                font-size:16px;
    
            }
            span{
                color: #ff8600;
            }
            a{
                color: #ff8600;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
    
`