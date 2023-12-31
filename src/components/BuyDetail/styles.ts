import styled from "styled-components";

export const Container = styled("div")`
    background-color: #001821;
    width: 100%;
    padding-bottom:50px;

    .bg{
        background-image: url(/img/bg.webp);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        padding-right: 3px;
        height: 100%;
    }
    .img1{
        width: -webkit-fill-available;
        height: 980px;
        position: absolute;
        top:0;
        left:0;
    }
    .logo-c{
        position: absolute;
        top: 160px;
        transform: rotate(-16deg);
        left: 200px;
        width: 250px;
        cursor: pointer;
        z-index: 2;
        @media (max-width: 576px){
            width: 200px;
            left: -15px;
        }
        @media (min-width: 576px) and (max-width: 992px){
            width: 200px;
            left: -15px;
        }
        @media (min-width: 1200px) and (max-width: 1400px){
            left: -15px;
            top:150px;
        }
    }
    .icon1 {
        margin-left: 38px;
        width: 38px;
        @media (max-width: 576px){
            margin-left: 10px;
            width: 28px;
        }
    }
    .ccontainer{
        max-width:1320px;
        margin: 0 auto;
        @media (min-width: 576px) and (max-width: 992px){
            margin-left: 20px;
            margin-right: 20px;
        }
        .imgs{
            width:100%;
        }
        .text-center{
            text-align:center;
        }        
        .btn-tipo2{
            border: solid #ff8600 2px;
            color: #FFE8DA;
            background-color: #001821;
            min-height: 82px;
            min-width: 400px;
            font-family: "MangoGrotesque-Regular";
            font-size: 50px;
            cursor:pointer;
            @media (max-width: 576px){
                min-width: 350px;
                margin-bottom:0px;
                margin-top:30px;
            }
            @media (min-width:576px) and (max-width: 768px){
                min-width: 285px;
            }
            @media (min-width:768px) and (max-width: 1400px){
                min-width: 300px;
            }
        
            &:hover{
                color: #001821;
                background-color: #FFE8DA;
                border: solid #ff8600 2px;
            }
        }
    } 
    .slider {
        height: auto;
        margin: auto;
        overflow: hidden;
        margin-top: 30px;
        @media (max-width: 576px){
            margin-top:0;
        }
    }
    
    .slider .slide-track2 {
        display: flex;
        animation: scroll2 40s linear infinite;
        -webkit-animation: scroll2 40s linear infinite;
        //width: calc(200px * 14);
    }
    
    .slider .slide-track {
        display: flex;
        animation: scroll 40s linear infinite;
        -webkit-animation: scroll 40s linear infinite;
        //width: calc(200px * 14);
    }
    
    .slider .slide {
        min-width: fit-content;
    }
    
    
    @keyframes scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
        }
    }
    
    @keyframes scroll2 {
        0% {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    .titCar{
        font-family: "MangoGrotesque-Bold";
        font-size: 220px;
        line-height: 200px;
        color: #ffedd2;
        overflow: hidden;
        margin: 0;
        line-height: 195px;
        display: inline;
        @media screen and (max-width: 576px){
            font-size: 50px;
            line-height: 45px;
        }
        @media (min-width:576px) and (max-width: 768px){
            font-size: 80px;
            line-height: 75px;
        }
        @media (min-width:768px) and (max-width: 992px){
            font-size: 120px;
            line-height: 115px;
        }
        @media (min-width: 992px) and (max-width: 1200px){
            font-size: 140px;
            line-height: 135px;
        }
        @media (min-width: 1200px) and (max-width: 1400px){
            font-size: 165px;
            line-height: 150px;
        }
    }
    .bgDesc{
        background-image: url(/img/bg_description.jpg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        padding-right: 3px;
        height: 100%;
    }
    .description{
        font-size: 14px;
        padding-top: 20px;
        padding-bottom: 0px;
        font-family: 'At Surt SemiBold';
        color: #ffedd2;
        #description-car{
            @media (max-width: 576px){
                margin-left:20px;
                margin-right:20px;
            }
        }
    }
    .ff1{
        display: flex;
        align-items: center;
        margin-bottom:120px;
        @media (max-width: 576px){
            margin-left: 30px;
            margin-right: auto;
            margin-bottom:60px;
            button{
                width:65px;
            }
        }
        @media (min-width: 576px) and (max-width: 768px){
            margin-bottom:60px;
        }
        @media (min-width: 768px) and (max-width: 992px){
            margin-bottom:70px;
        }
        @media (min-width: 992px) and (max-width: 1200px){
            margin-left: 25px;
        }
        label{
            font-family: "MangoGrotesque-Regular";
            font-size: 33px;
            line-height: 33px;
            color: #ffe8da;
        }
        .icon-sh{
            margin-left:34px;
            svg{
                width: 38px;
                height: 38px;
                color: #f6871f;
                cursor:pointer;
            }
        }
    }
    .minicard{
        background-color: #434A4B;    
        max-width: 337px;
        padding: 10px;
        border-radius: 10px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'AT Surt Regular';
    
        p{
            font-size: 13px;
            color: #B4B7B9;
            line-height: 20px;
            span{
                color: #ff8600;
            }
        }
    }
    
    .minicard-1{
        display: none;
    }
    
    .minicard-2{
        display: none;
    }
    .card-custom{
        background: #c14717;
        border: solid 3px #ff8600;
        border-radius:10px;
        margin: 250px auto 20px auto;
        @media (max-width: 576px){
            margin-right: 20px;
            margin-left: 20px;
            margin-top:170px;
        }
        @media (min-width: 576px) and (max-width: 992px){
            margin-top:170px;
        }
        @media (min-width: 992px) and (max-width: 1200px){
            margin-right: 20px;
            margin-left: 20px;
        }
        h1{
            font-family: MangoGrotesque-Regular;
            font-size: 65px;
            line-height: 60px;
            color: #ffe8da;
            margin: 0;
            font-weight:100;
            @media (min-width: 576px) and (max-width: 992px){
                font-size: 45px;
                line-height: 40px;
            }
        }

        h2{
            color: #ffe8da;
            margin: 0;
            font-family: "AT Surt DemiBold";
            font-size: 28px;
            @media (min-width: 576px) and (max-width: 768px){
                font-size: 17px;
            }
            @media (min-width: 768px) and (max-width: 992px){
                font-size: 22px;
            }
        }
        p{
            color: #ffe8da;
            margin: 0;
            line-height: 1.2;
            font-family: "AT Surt DemiBold";
            font-size: 16px;
            @media (min-width: 576px) and (max-width: 768px){
                font-size: 14px;
            }
        }
        .pasesor{
            line-height: 1.5;
            margin: 0 auto;
            max-width: 150px;
            font-family: "AT Surt DemiBold";
            font-size:16px;
            @media (max-width: 576px){
                margin-top: 20px;
            }
        }
        .text-start{
            text-align:left;
        }
        .text-end{
            text-align:right;
        }
        .te-mo{
            @media (max-width: 576px){
                text-align:left;
            }
        }
        .mt-30{
            margin-top:30px;
        }
        .icon-what{
            max-width: 60px;
            margin-top: 20px;
            cursor: pointer;
            @media (max-width: 576px){
                margin-top:0;
            }
        }
        .btn-cotiza{
            background-color: #ff6522;
            max-width: 150px;
            color: #FFE8DA;
            font-family: 'MangoGrotesque-Regular';
            font-size: 28px;
            line-height: 30px;
            border-radius: 0;
            padding: 8px 20px;
            border:none;
            cursor:pointer;
            margin-top:30px;
            width: 145px;
            display: block;
            margin: 10px auto;
            &:hover{
                color: #FFE8DA;
                background-color: #001821;
            }
        }
        .lk{
            color: #ff6522;
            cursor: pointer;
            display: block;
            font-family: "AT Surt DemiBold";
            font-size:16px;
        }
        .caracteristica{
            display:flex;
            @media (max-width: 576px){
                display: block;
                text-align: center;
            }
            img{
                width:40px;
                @media (max-width: 576px){
                    width: auto;
                    height: 40px;
                    margin-bottom:10px;
                }
                @media (min-width:576px) and (max-width: 768px){
                    width:30px;
                }
            }
            p:last-child{
                font-family: "AT Surt DemiBold";
                color: #ff6522;
                font-size: 14px;
            }
            div{
                margin-left:20px;
                @media (max-width: 576px){
                    margin-left:0;
                }
            }
        }
        .mb25{
            margin-bottom:25px;
        }
        .border-r{
            border-right: solid 2px #ff8600;
            @media (max-width: 576px){
                border:none;
            }
        }
    }
    .my-3{
        margin-top:30px;
        margin-bottom:30px;
    }   
    .ma-2{
        padding:5px;
    }
`