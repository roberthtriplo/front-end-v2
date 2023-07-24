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
        }
        h2{
            font-family: "MangoGrotesque-Bold";
            color: #001821;
            font-size: 60px;
            margin-top: 120px;
            margin-bottom: 20px;
        }
        p{
            font-family: 'AT Surt Regular';
            font-size: 18px;
            color: #6c757d;
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