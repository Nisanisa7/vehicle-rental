import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/atoms/button";
import { TransparantField } from "../../components/atoms/transparantField";
import Footer from "../../components/molecules/footer";
// import Footer from '../../components/molecules/footer'
import { Layout } from "../../components/molecules/layout";

const Login = () => {
  return (
    <Styles>
      <Layout title="Login"/>
      
      <div className="login-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="right-side">
                {/* <div className="inside-wrapper"> */}

                <h3 className="title">
                  Le'ts Explore <br /> The World
                </h3>
                <p>Dont have an account?</p>
                <Button className="btn-sign" color="dark" type="button" onClick="">
                  Sign Up
                </Button>
                {/* </div> */}
              </div>
            </div>

            <div className="col-md-1">
              <div className="center-line">
                <div class="list-wrapper">
                  <div class="list-item-wrapper">
                    <div class="list-bullet"></div>
                  </div>
                  <div class="vl"></div>
                  <div class="list-item-wrapper">
                    <div class="list-bullet"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="left-side">
                <div className="form">
                  <TransparantField
                    className="input-box"
                    type="email"
                    name=""
                    placeholder="Email"
                  />
                  <TransparantField
                    className="input-box"
                    type="password"
                    name=""
                    placeholder="Password"
                  />
                  <div className="forgot-pass">
                    <Link href="/home">
                        <a>Forgot password ?</a>
                    </Link>
                  </div>
                  <Button className="login-button" color="shine"  type="" onClick="">
                  Login
                </Button>
                <Button className="btn-google" type="" onClick="">
                            <span>
                            
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png"/>
                            </span>
                             Signup Using Google
                </Button>
                <Button className="responsive-btn-sign" color="dark" type="button" onClick="">
                  Sign Up
                </Button>
                <div ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </Styles>
  );
};
export default Login;
const Styles = styled.div`
  .login-wrap {
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/Login Bg.png");
                @media screen and (max-width: 600px) {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/street.jpg');
                    width: 100%;
                    padding: 0 50px 0 50px;
                }

    .right-side {
      .inside-wrapper {
        background-color: aquamarine;
        width: 90%;
        padding-left: 50px;
        padding-right: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        overflow: none;
      }
      .title {
        margin-top: 107px;
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 85px;
        color: #ffffff;
        margin-bottom: 50px;
                @media screen and (max-width: 600px) {
                    font-size: 50px;
                    line-height: 65px;
                }
      }
      p {
        font-family: "Nunito";
        font-style: normal;
        color: white;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 50px;
                @media screen and (max-width: 600px) {
                    display: none;
                }
      }
      .btn-sign {
        /* /* margin-top: 25px; */
        width: 391px;
        height: 79px;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        box-shadow: 0px 0px 20px rgba(218, 218, 218, 0.25);
        cursor: pointer;
                @media screen and (max-width: 600px) {
                    font-size: 36px;
                    line-height: 42px;
                    display: none;
                }
      }
    }
    .center-line {
        @media screen and (max-width: 600px) {
                   display: none;
                }
      margin-top: 109px;
      padding-left: 50px;
      padding-right: 50px;
      margin-left: auto;
      margin-right: auto;
      .list-wrapper {
        position: relative;
        .list-item-wrapper {
          /* margin-top:10px; */
          position: relative;
        }
        .list-bullet {
          /* float:left; */
          margin-right: 20px;
          background: #ffffff;
          height: 20px;
          width: 20px;
          /* line-height:30px; */
          border-radius: 100px;
          font-weight: 700;
          color: white;
          text-align: center;
        }
        .vl {
          border-left: 1px solid #ffffff;
          height: 500px;
          margin-left: 10px;
        }
      }
    }
    .left-side {
        gap: 2rem; 
       
      .form {
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        margin-bottom: 40px;
            @media screen and (max-width: 600px) {
                    margin-top: 50px;
                   
                }
        .input-box {
          width: 447px;
          height: 79px;
          margin-bottom: 40px;
          @media screen and (max-width: 600px) {
                    width: 100%;
                    height: 51px;
                }
        }
        .forgot-pass {
           /* margin-top: 14px; */
           margin-bottom: 49px;
         }
         .forgot-pass a {
           color: #ffffff;
           font-size: 18px;
           line-height: 28px;
           text-decoration: none;
         }
         .forgot-pass a:hover {
           text-decoration: none;
           color: #ffcd61;
         }
         .login-button {
           width: 447px;
           height: 79px;
           font-style: normal;
           font-weight: 900;
           font-size: 24px;
           line-height: 33px;
           box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
           cursor: pointer;
           margin-bottom: 34px;
            @media screen and (max-width: 600px) {
                        width: 100%;
                        height: 51px;
                        font-size: 18px;
                        line-height: 25px;
                    }
         }
         .btn-google {
           width: 447px;
           height: 79px;
           outline: none;
           border: none;
           font-style: normal;
           font-weight: 900;
           font-size: 24px;
           cursor: pointer;
                @media screen and (max-width: 600px) {
                    width: 100%;
                    height: 51px;
                    font-size: 18px;
                    line-height: 25px;
                    margin-bottom: 20px;
                }
         }
         .btn-google img {
           width: 18px;
           height: 20px;
           margin-right: 15px;
         }
         .responsive-btn-sign{
             visibility:hidden;
             @media screen and (max-width: 600px) {
                    width: 100%;
                    height: 51px;
                    font-size: 18px;
                    line-height: 25px;
                    visibility: visible;
                    /* display: visible; */
                }
         }

      }
    }
  }
`;

