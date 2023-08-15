import styled from "styled-components";

export const Container = styled("div")`
    background-color: #fff4e6;
    width: 100%;
    padding-bottom:50px;
    height: 100vh;   

    .row1{
        height: 50vh;
        background: url('/img/bg_separacion.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        @media screen and (max-width: 576px){
            height: 25vh;
        }
    }

    .row2{
        height: 50vh;
        position:relative;
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
        }
        h2{
            font-family: "MangoGrotesque-Bold";
            color: #001821;
            font-size: 60px;
            margin-top: 120px;
            margin-bottom: 20px;
            @media screen and (max-width: 576px){
                margin-top: 60px;
                font-size: 30px;
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