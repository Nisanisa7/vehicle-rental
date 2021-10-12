import React, { useRef, useState } from "react";
import styled from "styled-components";
import Navbar_after_login from "../../../components/molecules/navbar_after_login";
import router from "next/router";
import Footer from "../../../components/molecules/footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../../../Redux/Action/CartActions";
import cookies from 'next-cookies';
import { PrivateRoute } from "../../../Route/PrivateRoute";


const Detail_vehicle = ({ detail }) => {

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleBack = () => {
    router.push("/product_page/vehicle_type");
  };
  const handleplus = () =>{
    if (count < detail.stock) {
        setCount(count + 1);
      } else {
        setCount(detail.stock);
      }
  }
  const handleMinus = () => {
    if (count < 2) {
        setCount(1);
      } else {
        setCount(count - 1);
      }
  };
  const handleAdd = () =>{
    dispatch(addCart(detail, count))
    router.push('/product_page/reservation')
  }
  return (
    <Styles>
      {/* <p>{JSON.stringify(detail)}</p> */}
      <Navbar_after_login />
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
            <img src={detail.image} alt="" className="image"/>
          </div>
          </div>
          <div className="col">
          <div className="detail-product">
            <h1 className="title-name">{detail.vehicle_name}</h1>
            <h3 className="town-title">{detail.location}</h3>
            <h6 className={detail.status === 'Booked' ? "booked" : "available"}>{detail.status}</h6>
            <div className="item-detail">
              <span>Type : {detail.id}</span> <br />
              <span>{detail.description}</span>
            </div>
            <h2 className="price">Rp. {detail.price}/day</h2>

            <div className="button-wrapper">
              <button className="button-min" onClick={handleMinus}>
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>

              <span className="counter">{count}</span>

              <button
                className="button-plus"
                onClick={handleplus}
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="row button-content">
        <div className="col-lg-4 col-md-4">
          <button type="submit" className="btn-chat">
            Chat Admin
          </button>
          </div>
           <div className="col-lg-4 col-md-4">
          <button type="button" disabled={detail.status === "Booked"} onClick={handleAdd} className="btn-reservation">
            Reservation
          </button>
          </div>
          <div className="col-lg-4 col-md-4">
          <button type="submit" className="btn-like">
            <i className="fa fa-heart fa-2x" aria-hidden="true">
              <label>Like</label>
            </i>
          </button>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </Styles>
  );
};
export const getServerSideProps = PrivateRoute(async (ctx) => {
  const { id } = ctx.query;
  const token = await cookies(ctx).token;
  const role = await cookies(ctx).user_role;
  let isCustommer = '';
  if (role === 'custommer') {
    isCustommer = true;
  }
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/vehicle/${id}`);
  return {
    props: {
      detail: data.data[0],
      role: role,
      token: token,
      isCustommer: isCustommer,
    },
  };
});

export default Detail_vehicle;

const Styles = styled.div`
  .main-wrapper {
    margin-top: 120px;
    .thumbnail{
        width: 50%;
        object-fit: cover;
        /* background: black */        
        .image{
            object-fit: cover;
            width: 600px;
            height: 500px;
            border-radius: 10px;
            }
        }
    
    .detail-product {
      /* background: pink; */
      width: 100%;
      height: 100%;

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
      .booked {
        margin-top: 33px;
        font-family: "Nunito";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #9B0A0A;
      }
      .available{
        margin-top: 33px;
        font-family: "Nunito";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #087e0d;
      }

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
      margin-bottom: 20px;
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
    }
    .btn-reservation {
      width: 100%;
      height: 69px;
      background: #ffcd61;
      margin-bottom: 20px;
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
    .btn-like {
      width: 100%;
      height: 69px;
      margin-bottom: 20px;
      background: #393939;
      border-radius: 10px;
      border: 1px solid #393939;
      .fa {
        color: #ffcd61;
      }
    }
    .btn-like label {
      padding-left: 10px;
      color: #ffcd61;
      font-family: "Nunito";
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
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
  
`
