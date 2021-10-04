import { useRouter } from "next/dist/client/router";
import React, {useState} from "react";
import styled from "styled-components";
import { Button } from "../../components/atoms/button";
import { TransparantField } from "../../components/atoms/transparantField";
import { Layout } from "../../components/molecules/layout";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
const Register = () => {
  const router = useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data, e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/v1/authadmin/register', data)
    .then((res)=>{
      console.log(res);
      alert('success | check your email to activate your account')
      // Swal.fire(
      //   'Register Success!',
      //   'Check your email to activate your account!',
      //   'success'
      // )
    })
    .catch((err)=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
  }
  const handlePushLogin = () =>{

    router.push('/auth_user')
  }
  // const [form, setForm] = useState({
  //   'name' :'',
  //   'email' :'',
  //   'password': ''
  // })
  // const handleChange = (e) =>{
  //   setForm({
  //     ...form,
  //     [e.target.name] : e.target.value
  // })
  // }
  return (
    <Styles>
      <Layout title="Register" />
      <div className="main-wrapper">
        <div className="row row-wrap">
          <div className="col col-7">
            <div className="left-side">
              <img className="image" src="/sideimg.png" alt="" />
            </div>
          </div>
          <div className="col col-5">
            <div className="right-side">
              <div className="form">
                <h1 className="title">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" 
               placeholder="Name"
                {...register("name", { required: true})}/>
                 {errors.password && <span>Name is required</span>}
                <input
                  type="text"
  
                  placeholder="Email"
                  className="field"
                  {...register("email", { required: true ,pattern: /^\S+@\S+$/i})}

                />
                 {errors.password && <span>Email is required</span>}
                <input
                  type="password"
                  placeholder="Password"
                  className="field"
                  {...register("password", { required: true})}
                />
                 {errors.password && <span>Password is required</span>}
                <Button
                  className="btn-sign"
                  color="shine"
                  type="submit"
                  
                >
                  Sign Up
                </Button>
                <h6>or try another way</h6>
                <Button className="btn-google" type="" onClick="">
                  <span>
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                  </span>
                  Signup Using Google
                </Button>
                <Button className="btn-login" color="dark" type="" onClick={handlePushLogin}>
                  Login
                </Button>
                </form>
              </div>
              <div className="footer">
                <div className="small-logo">
                  <img src="/Footer-image.png" alt="" />
                </div>
                <p className="text-about">
                  Plan and book your perfect trip with <br />
                  expert advice, travel tips for vehicle <br />
                  information from us
                </p>
                <p className="credit">
                  ©2020 Vehicle Rental Center. All rights reserved
                </p>
              </div>
              <div className="second-section">
                <hr />
                <ul className="social">
                  <li>
                    <img src="/twitter.png" alt="" />
                  </li>
                  <li>
                    <img src="/Facebook.png" alt="" />
                  </li>
                  <li>
                    <img src="/instagram.png" alt="" />
                  </li>
                  <li>
                    <img src="/In.png" alt="" />
                  </li>
                  <li>
                    {" "}
                    <img src="/Youtube.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Register;
const Styles = styled.div`
  .main-wrapper {
    .row-wrap {
        /* width: 100vw;
        height: 100vh; */
      .col-7 {
        @media screen and (max-width: 600px) {
          display: none;
        }
        .image {
          /* width: 720px; */
          height: 1463px;
        }
      }
      .col-5 {
        @media screen and (max-width: 600px) {
          padding: 0 50px 0 50px;
          margin: auto;
          width: 500px;
        }
        .right-side {
          .form {
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            margin-bottom: 40px;
            width: 400px;
            /* background-color: aliceblue; */
            h1 {
              margin-bottom: 70px;
              font-family: Playfair Display;
              font-style: normal;
              font-weight: bold;
              font-size: 48px;
              line-height: 64px;
              color: #000000;
              @media screen and (max-width: 600px) {
                font-size: 50px;
                line-height: 65px;
              }
            }
            input {
              width: 447px;
              height: 79px;
              background: rgba(218, 218, 218, 0.28);
              border: 0.5px solid rgba(78, 78, 78, 0.5);
              box-sizing: border-box;
              border-radius: 10px;
              padding-left: 15px;
              outline: none;
              @media screen and (max-width: 600px) {
                width: 100%;
                height: 51px;
              }
            }
            .field{
              margin-top: 33px;
            }
            span{
              color: red;
            }
            .btn-sign {
              margin-top: 33px;
              width: 447px;
              height: 79px;
              font-weight: 900;
              font-size: 24px;
              line-height: 33px;
              box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
              margin-bottom: 35px;
              border-radius: 10px;
              @media screen and (max-width: 600px) {
                width: 100%;
                height: 51px;
                font-size: 18px;
                line-height: 25px;
              }
            }
            h6 {
              display: flex;
              margin-left: 50px;
              flex-direction: row;
              font-family: Nunito;
              font-style: normal;
              font-weight: bold;
              font-size: 24px;
              line-height: 33px;
              color: rgba(57, 57, 57, 0.5);
              margin-bottom: 34px;
              @media screen and (max-width: 600px) {
                font-size: 15px;
                margin-left: 10px;
            
              }
            }
            h6:before,
            h6:after {
              flex-grow: 1;
              height: 1px;
              content: "";
              background-color: #4e4e4e;
              position: relative;
              top: 0.5em;
              @media screen and (max-width: 600px) {
               
              }
            }

            h6:before {
              margin-top: 5px;
              margin-right: 10px;
              @media screen and (max-width: 600px) {
                margin-right: 10px;
              }
            }

            h6:after {
              margin-top: 5px;
              margin-left: 10px;
              @media screen and (max-width: 600px) {
                margin-right: 10px;
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
              border-radius: 10px;
              box-shadow: 0px 0px 20px rgba(78, 78, 78, 0.4);
              margin-bottom: 34px;
              @media screen and (max-width: 600px) {
                width: 100%;
                height: 51px;
                font-size: 18px;
                line-height: 25px;
              }
            }
            .btn-google img {
              width: 18px;
              height: 20px;
              margin-right: 15px;
            }
            .btn-login {
              width: 447px;
              height: 79px;
              font-weight: 900;
              font-size: 24px;
              line-height: 33px;
              box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
              margin-bottom: 35px;
              border-radius: 10px;
              margin-bottom: 120px;
              @media screen and (max-width: 600px) {
                width: 100%;
                height: 51px;
                font-size: 18px;
                line-height: 25px;
              }
            }
          }
        }
        .footer {
          padding: 20px;
          @media screen and (max-width: 600px) {
            display: none;
          }
          .small-logo img {
            margin-bottom: 30px;
          }
          .text-about {
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            color: #848484;
            mix-blend-mode: normal;
          }
          .credit {
            padding-top: 10px;
            font-weight: 300;
            font-size: 17px;
            color: #848484;
            mix-blend-mode: normal;
          }
        }
        .second-section {
          @media screen and (max-width: 600px) {
            display: none;
          }
          margin-left: auto;
          margin-right: auto;
          padding: 10px 50px;
          width: 100%;
          hr {
            height: 2px;
            background: #c4c4c4;
          }
          .social {
            display: flex;
            align-items: center;
            justify-content: center;
            list-style-type: none;
            /* margin: 1rem 0 3rem 0; */
          }
          .social li {
            margin: 15px 20px;
          }
        }
      }
    }
  }
`;