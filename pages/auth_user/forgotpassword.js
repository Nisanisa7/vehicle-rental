import React from 'react'
import styled from 'styled-components'
import  Button  from '../../components/atoms/button'
import { Layout } from '../../components/molecules/layout'

const Forgotpassword = () => {
    return (
        <Styles>
            <Layout title="find email"/>
            <div className="wrapper">
                <div className="container">
                <div className="back-wrapper">
                    <button type="submit" className="backButton">
                        <i className="fa fa-chevron-left fa-3x"></i>
                        <p>Back</p>
                    </button>
                </div>
                    <div className="form">
                        <h1>Do’t worry, we got your back!</h1>
                        <input type="text" name="" id="" placeholder="Enter your email address" />
                        <Button className="btn-find" color="shine">Send Link</Button>
                        <p>You will receive a link to reset your password. <br />
                         If you haven’t received any link, click Resend Link</p>
                    </div>
                </div>
            <div className="hidden-div">
                nyahooo
            </div>
            </div>
        </Styles>
    )
}

export default Forgotpassword
const Styles = styled.div`
.wrapper{
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/kilarov-zaneit-nan5wYNRwhs-unsplash 1.png");
    .back-wrapper {

        padding-top: 50px;
        .backButton {
            width: 400px;
            height: 28px;
            border: none;
            outline: none;
            background: none;
            display: flex;
            flex-direction: row;
            .fa {
                color:white;
                stroke-width: 10;
            }
            .fa-chevron-left g g path {
                stroke: black;
                stroke-width: 90px;
            }
            p {
                font-family: "Nunito";
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 24px;
                color: white;
                padding-left: 45px;
                padding-top: 12px;
            }
        }
    }
    .form{
    width: 84%;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 50px;
    overflow: none;
    margin-bottom: 52px;
        h1{
            font-family: 'Playfair Display';
            font-style: normal;
            font-weight: bold;
            font-size: 64px;
            line-height: 85px;
            color: #FFFFFF;
            text-align: center;
            margin-bottom: 83px;
            margin-top: 52px;
        }
        input{
            text-align: center;
            width: 447px;
            height: 79px;
            background: rgba(255, 255, 255, 0.26);
            border-radius: 10px;
            border: none;
            outline: none;
            margin-bottom: 31px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 33px;

            ::placeholder {
                    color: white;
                    opacity: 1; /* Firefox */
                }
        }
        .btn-find{
            margin: auto;
            width: 447px;
            height: 79px;
            font-weight: 900;
            font-size: 24px;
            line-height: 33px;
            box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
            margin-bottom: 54px;
        }
        p{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 33px;
            text-align: center;
            color: #FFFFFF;
        }
    }
    .hidden-div{
        visibility: hidden;
    }
}






`