import axios from "axios";
import React from "react";
import styled from "styled-components";
import Footer from "../../components/molecules/footer";
import Inputfield from "../../components/atoms/inputfield";
import * as Types from "../../Redux/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PrivateRoute } from "../../Route/PrivateRoute";
import cookies from "next-cookies";
import NavbarAdmin from "../../components/molecules/navbar_admin";

const ProfileAdmin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const DateJoined = localStorage.getItem("createdAt");
  const id = localStorage.getItem("idAdmin");
  const emailUser = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  const display_name = localStorage.getItem("display_name");
  const address = localStorage.getItem("address");
  const datebirth = localStorage.getItem("datebirth");
  const gender = localStorage.getItem("gender");
  const phone_number = localStorage.getItem("phone_number");
  const image = localStorage.getItem("image");
  let DateObj = new Date(DateJoined);
  let Year = DateObj.getFullYear();
  let Day = ("0" + DateObj.getDate()).slice(-2);
  let Month = ("0" + DateObj.getMonth()).slice(-2);
  const JoinDate = Day + "-" + Month + "-" + Year;
  const [previewImage, setPreview] = useState();
  const [errSize, setErrSize] = useState(false);
  const [errType, setErrType] = useState(false);

  const handleLogout = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/authcust/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.clear();
        window.location.href = "/";
        dispatch({ type: "REMOVE_STATE", payload: {} });
        Swal.fire("Success", "you're logged out ! see ya", "success");
        router.push("/");
      })
      .res((err) => {
        console.log(err);
      });
  };
  const handleShowImage = (e) => {
    e.preventDefault();
    if (e.target.files[0].size > 2000000) {
      setErrSize(true);
      setErrType(false);
    } else if (
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpg" &&
      e.target.files[0].type !== "image/jpeg"
    ) {
      setErrType(true);
      setErrSize(false);
    } else if (e.target.files.length !== 0) {
      setErrSize(false);
      setErrType(false);
      formik.setFieldValue("image", e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  const phoneRegExp =
    /\(?(?:\+62|62|0)(?:\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/;
  const formik = useFormik({
    initialValues: {
      gender: gender,
      address: address,
      phone_number: phone_number,
      display_name: display_name,
      datebirth: datebirth,
      image: null,
      //   imagePreview: URL.createObjectURL(target.files[0])
    },
    onSubmit: (values) => {
      let form = new FormData();
      form.append("gender", values.gender);
      form.append("address", values.address);
      form.append("phone_number", values.phone_number);
      form.append("display_name", values.display_name);
      form.append("datebirth", values.datebirth);
      form.append("image", values.image);
      console.log(form);
      axios
        .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/admin/${id}`, form)
        .then((res) => {
          const dataResponse = res.data.data;
          console.log(dataResponse, "data");
          const sendData = {
            profile: dataResponse,
          };
          console.log(dataResponse);
          localStorage.setItem("name", dataResponse.name);
          localStorage.setItem("address", dataResponse.address);
          localStorage.setItem("datebirth", dataResponse.datebirth);
          localStorage.setItem("gender", dataResponse.gender);
          localStorage.setItem("phone_number", dataResponse.phone_number);
          localStorage.setItem("image", dataResponse.image);
          dispatch({ type: Types.AVATAR, payload: sendData });
          Swal.fire("Success", "Your Profile has been updated", "success");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    },
    validationSchema: Yup.object({
      gender: Yup.string().required("gender is required"),
      address: Yup.string().required("address is required"),
      phone_number: Yup.string()
        .matches(phoneRegExp, "phone number is invalid")
        .required("Phone number is required")
        .min(10, "Phone number is too short")
        .max(13, "phone must be 12 digits"),
      display_name: Yup.string().required("display name is required"),
      datebirth: Yup.string().required("birthday is required"),
    }),
  });
  return (
    <Styles>
      <Head>
        <title>Profile </title>
        <link rel="icon" href="/Footer-image.png" />
      </Head>
      <NavbarAdmin />
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <h1>Profile</h1>
          <div className="profile-group">
            <div className="profile-wrapper">
              <img
                className="images"
                src={
                  previewImage ? previewImage : image ? image : "/image 39.png"
                }
                alt=""
              />

              <div className="profile-btn">
                <input
                  id="upload"
                  type="file"
                  name="image"
                  onChange={handleShowImage}
                />
                <label className="button" htmlFor="upload">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            {errSize ? (
              <p className="error">
                Image size is too large. <br /> max 1mb
              </p>
            ) : (
              ""
            )}
            {errType ? (
              <p className="error">
                Invalid file type. <br /> only png, jpg, and jpeg <br /> format
                allowed
              </p>
            ) : (
              ""
            )}
            <h1 className="username">{name}</h1>
            <div className="text-wrap">
              <h6>{emailUser}</h6>
              <h6>{phone_number ? phone_number : "xxxx"}</h6>
              <h6>Has been active since {JoinDate}</h6>
            </div>
            <div className="radio-button-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  id="flexRadioDefault1"
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  id="flexRadioDefault2"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            {formik.errors.gender && formik.touched.gender && (
              <p className="errors">{formik.errors.gender}</p>
            )}
          </div>
          <h2>Contacts</h2>
          <Inputfield
            className="input"
            value={emailUser}
            name="email"
            InputProps={{
              readOnly: true,
            }}
          />
          <Inputfield
            className="input"
            label="Address"
            type="text"
            name="address"
            value={formik.values.address ? formik.values.address : ""}
            onChange={formik.handleChange}
          />
          {formik.errors.address && formik.touched.address && (
            <p className="errors">{formik.errors.address}</p>
          )}
          <Inputfield
            className="input"
            label="Mobile Number"
            type="text"
            name="phone_number"
            value={formik.values.phone_number ? formik.values.phone_number : ""}
            onChange={formik.handleChange}
          />
          {formik.errors.phone_number && formik.touched.phone_number && (
            <p className="errors">{formik.errors.phone_number}</p>
          )}
          <h2>Identity</h2>
          <div className="identity-group">
            <div className="identity-name">
              <Inputfield
                className="input-name"
                label="Display Name"
                type="text"
                name="display_name"
                value={
                  formik.values.display_name ? formik.values.display_name : ""
                }
                onChange={formik.handleChange}
              />
              {formik.errors.display_name && formik.touched.display_name && (
                <p className="errors">{formik.errors.display_name}</p>
              )}
            </div>
            <div className="identity-date">
              <Inputfield
                className="input-date"
                type="date"
                name="datebirth"
                onChange={formik.handleChange}
                value={formik.values.datebirth ? formik.values.datebirth : ""}
                label="date"
              />
              {formik.errors.datebirth && formik.touched.datebirth && (
                <p className="errors">{formik.errors.datebirth}</p>
              )}
            </div>
          </div>
          <div className="container">
            <div className="row sub-menu">
              <div className="col col-md-4">
                <button className="btn-save" type="submit">
                  Save Changes
                </button>
              </div>
              <div className="col col-md-4">
                <button className="btn-password">Edit Password</button>
              </div>
              <div className="col col-md-4">
                <button className="btn-cancel" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          {/* <div className="button-group">
            </div> */}
        </form>
      </div>
      <Footer className="footer" />
    </Styles>
  );
};

export default ProfileAdmin;
const Styles = styled.div`
  h1 {
    margin-top: 50px;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    color: #000000;
    mix-blend-mode: normal;
  }
  .profile-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .profile-wrapper {
      width: 150px;
      height: 150px;
      margin-top: 35px;
      background: #d4d4d4;
      border-radius: 100%;
      position: relative;
      .images {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    h1 {
      text-align: center;
      font-size: 48px;
      font-family: "Playfair Display";
      line-height: 24px;
      font-weight: bold;
      margin-top: 50px;
    }
    .text-wrap {
      margin-top: 40px;
      h6 {
        text-align: center;
        font-family: "Nunito";
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #b8becd;
      }
    }
    .profile-btn {
      position: relative;
      display: flex;
      input[type="file"] {
        position: absolute;
        top: 15px;
        left: 20px;
        visibility: hidden;
        font-size: 17px;
        color: #b8b8b8;
      }
      .button {
        display: inline-block;
        background-color: #ffcd61;
        border-radius: 50%;
        color: #ffffff;
        text-align: center;
        font-size: 20px;
        padding: 8px;
        width: 50px;
        height: 50px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
        position: absolute;
        left: 65%;
        top: 1;
        bottom: 0;
      }
      .button:hover {
        background-color: #dd9a08;
      }
    }
    .radio-button-group {
      display: flex;
      flex-direction: row;
      gap: 20rem;
      margin-top: 50px;
    }
  }
  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #4f5665;
    margin-top: 50px;
  }
  .input {
    width: 100%;
    margin-top: 30px;
  }
  .identity-group {
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 15rem;
    .identity-name {
      width: 40%;
      height: 25%;
    }
    .identity-date {
      width: 40%;
      height: 25%;
    }
  }
  .sub-menu {
    .btn-save {
      border: none;
      outline: none;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 33px;
      color: #393939;
      background: #ffcd61;
      width: 300px;
      height: 70px;
      border-radius: 10px;
      @media screen and (max-width: 600px) {
        width: 150px !important;
        height: 70px;
      }
      @media screen and (max-width: 920px) {
        width: 200px;
        height: 70px;
      }
    }
    .btn-password {
      @media screen and (max-width: 600px) {
        width: 150px !important;
        height: 70px;
      }
      @media screen and (max-width: 920px) {
        width: 200px;
        height: 70px;
      }
      border: none;
      outline: none;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 33px;
      color: #ffcd61;
      width: 300px;
      height: 70px;
      background: #393939;
      border-radius: 10px;
    }
    .btn-cancel {
      @media screen and (max-width: 600px) {
        width: 140px !important;
        height: 70px;
      }
      @media screen and (max-width: 920px) {
        width: 200px;
        height: 70px;
      }
      border: none;
      outline: none;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 33px;
      color: #393939;
      width: 300px;
      height: 70px;
      background: rgba(203, 203, 212, 0.27);
      border-radius: 10px;
    }
    /* .button-group{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    } */
  }
  .footer {
    margin-top: 100px;
  }
  .error {
    color: red;
      text-align: center;
      font-size: 20px;
      font-family:"Nunito";
      line-height: 24px;
      font-weight: bold;
      margin-top: 50px;
    }
  .errors{
    color: red;
  }
`;
