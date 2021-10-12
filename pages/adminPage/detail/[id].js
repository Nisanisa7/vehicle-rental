import React, { useRef, useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import styled from "styled-components";
import Navbar_after_login from "../../../components/molecules/navbar_after_login";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import router, { useRouter } from "next/router";
// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import Footer from "../../../components/molecules/footer";
import axios from "axios";
import Vehicle_type_admin from "../vehicle_type_admin";
import NavbarAdmin from "../../../components/molecules/navbar_admin";
import cookies from "next-cookies";
import { PrivateRouteAdmin } from "../../../Route/PrivateRouteAdmin";
// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const Detail_vehicle = ({ detail }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [stock, setCount] = useState(1);

  const handleBack = () => {
    router.push("/adminPage/vehicle_type_admin");
  };
  const handleEdit = () => {
    router.push(`/adminPage/edit/${detail.idvehicle}`);
  };
  return (
    <Styles>
      <NavbarAdmin />
      <div className="container">
        <div className="back-wrapper">
          <button onClick={handleBack} type="submit" className="backButton">
            <i className="fa fa-chevron-left fa-3x"></i>
            <p>Detail</p>
          </button>
        </div>
        <div className="row main-wrapper">
          <div className="col">
            <div className="thumbnail">
              <img src={detail.image} alt="" className="image" />
            </div>
          </div>
          <div className="col">
            <div className="detail-product">
              <h1 className="title-name">{detail.vehicle_name}</h1>
              <h3 className="town-title">{detail.location}</h3>
              <h6 className="status-title">{detail.status}</h6>
              <div className="item-detail">
                <span>{detail.description}</span> <br />
                <span>Type : {detail.id}</span> <br />
                <span>Reservation Before 2 PM</span>
              </div>
              <h2 className="price">Rp. {detail.price}/day</h2>

              <div className="button-wrapper">
                <button
                  className="button-min"
                  onClick={() => setCount(stock - 1)}
                >
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </button>

                <span className="counter">{detail.stock}</span>

                <button
                  className="button-plus"
                  onClick={() => setCount(stock + 1)}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row button-content">
            <div className="col-lg-6 col-md-4">
              <button type="submit" className="btn-chat">
                Add to home page
              </button>
            </div>
            <div className="col-lg-6 col-md-4">
              <button
                type="submit"
                className="btn-reservation"
                onClick={handleEdit}
              >
                Edit item
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </Styles>
  );
};

export default Detail_vehicle;
export const getServerSideProps = PrivateRouteAdmin(async (ctx) => {
  const { id } = ctx.query;
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/vehicle/${id}`);
  const token = await cookies(ctx).token;
  const role = await cookies(ctx).user_role;
  let isAdmin = "";
  if (role === "admin") {
    isAdmin = true;
  }
  return {
    props: {
      detail: data.data[0],
      token,
      isAdmin: isAdmin,
    },
  };
});
const Styles = styled.div`
  .main-wrapper {
    margin-top: 120px;
    
  /* display: flex;
    flex-direction: row;
    gap: 100px; */

  .thumbnail {
    object-fit: cover;
    @media screen and (max-width: 920px) {
      display: grid;
      justify-content: center;
      margin-bottom: 60px;
    }
    /* background: black */
    .image {
      object-fit: cover;
      width: 600px;
      height: 500px;
      border-radius: 10px;
      @media screen and (max-width: 600px) {
        width: 220px;
        }
      @media screen and (max-width: 920px) {
        width: 550px;
        }
    }
  }
  .detail-product {
    @media screen and (max-width: 920px) {
      margin-bottom: 35px;
    }
    .title-name {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 25px;
      color: #042521;
      mix-blend-mode: normal;
    }
    .town-title {
      margin-top: 20px;
      font-size: 28px;
      font-family: "Playfair Display";
      color: #042521;
    }
    .status-title {
      margin-top: 33px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
      color: #087e0d;
    }
    /* .title{
            margin-top: 15px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 300;
            font-size: 28px;
            line-height: 24px;
            color: #9B0A0A;
        } */
    .item-detail {
      margin-top: 25px;
    }
    .item-detail span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;
      color: #393939;
    }
    .price {
      margin-top: 40px;
      text-align-last: right;
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      color: #000000;
      @media screen and (max-width: 920px) {
      display: grid;
      justify-content: center;
   
    }
    }
    .button-wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 45px;
      @media screen and (max-width: 920px) {
      justify-content: center;
    }
      .counter {
        margin-left: 140px;
        padding-top: 10px;
        font-family: "Nunito";
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 25px;
        color: #000000;
      }
      .button-min {
        width: 50px;
        height: 50px;
        border: none;
        outline: none;
        cursor: pointer;
        background: #ffcd61;
        border-radius: 10px;
      }
      .button-plus {
        margin-left: 140px;
        width: 50px;
        height: 50px;
        border: none;
        outline: none;
        cursor: pointer;
        background: rgba(203, 203, 212, 0.2);
        border-radius: 10px;
      }
    }
  }
  }
  .button-content {
    margin-top: 60px;
    .btn-chat {
      width: 100%;
      height: 69px;
      background: #393939;
      border-radius: 10px;
      outline: none;
      border: 1px solid #393939;
      color: #ffcd61;
      font-family: "Nunito";
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      @media screen and (max-width: 920px) {
          margin-bottom: 20px;
        }
    }
    .btn-reservation {
      width: 100%;
      height: 69px;
      background: #ffcd61;
      border-radius: 10px;
      outline: none;
      border: 1px solid #ffcd61;
      color: #393939;
      font-family: "Nunito";
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
    }
  }
  .back-wrapper {
    .backButton {
      width: 250px;
      height: 28px;
      margin-top: 50px;
      border: none;
      outline: none;
      background: none;
      display: flex;
      flex-direction: row;
      .fa {
        color: #4a4c53;
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
        font-size: 36px;
        line-height: 24px;
        color: #000000;
        padding-left: 61px;
        padding-top: 12px;
      }
    }
  }

  .footer {
    margin-top: 50px;
  }
`;
