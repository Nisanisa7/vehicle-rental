import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/footer'
import { Layout } from '../../components/layout'

const Login = () => {
    return (
        <Styles>
            <Layout title="Login">
            </Layout>

           <div className="login-wrap">

               <div className="right-side">
                   <div className="inside-wrapper">
                       <h3 className="title">Le'ts Explore <br/> The World</h3>
                       <p>Dont have an account?</p>
                       <input type="submit" class="sign-btn" value="Sign Up"/>
                   </div>
               </div>

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

               <div className="left-side">
                   <div className="form">
                   <input type="email" class="input-box" placeholder="Email"/>
                        <input type="password" class="input-box" placeholder="Password"/>
                        <div class="forgot-pass">
                            <a href="resetpassSeller.html">
                            Forgot password
                            ?</a>
                        </div>
                        <button class="login-button">Login</button>
                        <button class="btn-google">
                            <span>
                            
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png"/>
                            </span>
                                   Signup Using Google
                        </button>
                   </div>
                   <div class="emptydiv">
                        hiyaa
                    </div>
               </div>
           </div>
            <Footer/>
        </Styles>
    )
}

export default Login
const Styles = styled.div`
.login-wrap{
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Login Bg.png');
    .right-side{
        height: 100%;
        width: 45%;
            .inside-wrapper{
                width: 90%;
                padding-left: 50px;
                padding-right: 50px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 50px;
                overflow: none;
            }
            .title{
                margin-top: 107px;
                font-family: Playfair Display;
                font-style: normal;
                font-weight: bold;
                font-size: 64px;
                line-height: 85px;
                color: #FFFFFF;
            }
            p{
                margin-top: 50px;
                font-family: 'Nunito';
                font-style: normal;
                color: white;
                font-weight: bold;
                font-size: 24px;
                line-height: 33px;
            }
            .sign-btn{
                margin-top: 25px;
                width: 391px;
                height: 79px;
                outline: none;
                border: none;
                border-radius: 10px;
                background: #393939;
                font-weight: 900;
                font-size: 24px;
                line-height: 33px;
                color: #FFCD61;
                box-shadow: 0px 0px 20px rgba(218, 218, 218, 0.25);
                border-radius: 10px;
                cursor: pointer;
            }
    }
    .center-line{
    margin-top: 109px;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto; 

    .list-wrapper {
        position:relative;
        .list-item-wrapper {
            /* margin-top:10px; */
            position:relative;
            }
            .list-bullet {
            /* float:left; */
            margin-right:20px;
            background:#ffffff;
            height:20px;
            width:20px;
            /* line-height:30px; */
            border-radius:100px;
            font-weight:700;
            color:white;
            text-align:center;
            }
            .vl {
                border-left: 1px solid #FFFFFF;
                height: 500px;
                margin-left: 10px;
            }
        }
    }
    .left-side{
        height: 100%;
        width: 45%;
        .form{
            width: 400px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 150px;
            overflow: none;
            .input-box{
                width: 447px;
                height: 79px;   
                margin-top: 34px;
                box-sizing: border-box;
                outline: none;
                border: none;
                transition: 0.2s;
                color: white;
                padding-left: 20px;
                background: rgba(255, 255, 255, 0.26);
                border-radius: 10px;
            }
            ::placeholder {
                color:white;
                opacity: 1; /* Firefox */
            }
            .forgot-pass{
                margin-top: 14px;
            }
            .forgot-pass a{
                color: #FFFFFF;
                font-size: 18px;
                line-height: 28px;
                text-decoration: none;
            }
            .forgot-pass a:hover{
                text-decoration: none;
                color: #FFCD61;
            }
            .login-button{
                width: 447px;
                height: 79px;   
                outline: none;
                border: none;
                background: #FFCD61;
                font-weight: 900;
                font-size: 24px;
                line-height: 33px;
                color: #393939;
                margin-top: 49px;
                box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
                border-radius: 10px;
                cursor: pointer;
            }
            .btn-google {
                width: 447px;
                height: 79px;
                margin-top: 34px;
                outline: none;
                border: none; 
                background: #FFFFFF;
                border-radius: 10px;
                
                font-style: normal;
                font-weight: 900;
                font-size: 24px;
                color: #000000;
                cursor: pointer;
            }
            .btn-google img{
                width: 31px;
                height: 33px;
            }
        }
        .emptydiv{
            margin-top: 50px;
            visibility: hidden;
        }
    }
}

`
