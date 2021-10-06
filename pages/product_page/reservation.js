import router, { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../../components/molecules/footer";
import Navbar_after_login from "../../components/molecules/navbar_after_login";
import { addCart } from "../../Redux/Action/CartActions";
import { addOrder } from "../../Redux/Action/OrderAction";


const Reservation = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cartItem.cart[0]);
  const qty = useSelector((state) => state.cartItem.quantity);
  const totalprice = useSelector((state)=> state.cartItem.totalPrice)
  console.log(totalprice);
  const [dayvalue, setDay] = useState({
      dayrental:''
  })
  const [orderDate, setOrderDate] = useState({
    reservationDate:''
  })
  const handleDate = (e) => {
    setOrderDate({
      ...orderDate,
      [e.target.name] : e.target.value
  })
  }
  const handleChange = (e) =>{
      setDay({
          ...dayvalue,
          [e.target.name] : e.target.value
      })
  }
  const {reservationDate} = orderDate
  console.log(reservationDate);
  const {dayrental} = dayvalue
  const countTotal = totalprice * dayrental * qty
  console.log(countTotal);
  const movePage = () =>{
    dispatch(addOrder(cartData, countTotal, reservationDate, dayrental))
    router.push('/product_page/booking')
  }
  return (
    <Styles>
      <Navbar_after_login />
      <div className="container">
        <div className="back-wrapper">
          <button type="submit" className="backButton">
            <i className="fa fa-chevron-left fa-3x"></i>
            <p>Reservation</p>
          </button>
        </div>
        <div className="main-wrapper">
          <div className="thumbnail">
            <img src={cartData.image} alt="" />
          </div>
          <div className="detail-product">
            <h1 className="title-name">{cartData.vehicle_name}</h1>
            <h3 className="town-title">{cartData.location}</h3>
            {/* <h5 className="title">No Repayment</h5> */}
            <div className="button-wrapper">
              {/* <button className="button-min" onClick={handleMinus}> */}
              <button className="button-min">
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>

              <span className="counter">{qty}</span>

              {/* <button className="button-plus" onClick={()=>setCount(count+1)} > */}
              <button className="button-plus">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <p>Reservation Date :</p>
              <input type="date" name="reservationDate" onChange={handleDate}/>
            <select
              className="custom-select"
              aria-label="Default select example"
              onChange={handleChange} name="dayrental"
            >
              <option selected>Rental Day</option>
              <option value="1">1 Day</option>
              <option value="2">2 Day</option>
              <option value="3">3 Day</option>
              <option value="4">4 Day</option>
              <option value="5">5 Day</option>
            </select>
          </div>
        </div>
        <button className="btn-pay" type="button" disabled={!dayvalue} onClick={movePage}>Pay now : Rp.{countTotal ? countTotal : cartData.price ? cartData.price : 0}</button>
      </div>
      <Footer className="footer" />
    </Styles>
  );
};

export default Reservation;
const Styles = styled.div`
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

  .main-wrapper {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    /* background: pink; */
    width: 100%;
    height: 500px;
    gap: 100px;
    .thumbnail {
      width: 50%;
      object-fit: cover;
      /* background: black */
    }
    .thumbnail img {
      object-fit: cover;
      width: 600px;
      height: 500px;
      border-radius: 10px;
    }
    .detail-product {
      width: 50%;
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
      .title {
        margin-top: 15px;
        font-family: "Nunito";
        font-style: normal;
        font-weight: bold;
        line-height: 24px;
        color: #9b0a0a;
      }
    }
    .button-wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 89px;
      .counter {
        margin-left: 100px;
        padding-top: 35px;
        font-family: "Nunito";
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 25px;
        color: #000000;
      }
      .button-min {
        width: 75px;
        height: 76px;
        border: none;
        outline: none;
        cursor: pointer;
        background: #ffcd61;
        border-radius: 10px;
      }
      .button-plus {
        margin-left: 100px;
        width: 75px;
        height: 76px;
        border: none;
        outline: none;
        cursor: pointer;
        background: rgba(203, 203, 212, 0.2);
        border-radius: 10px;
      }
    }
    p {
      margin-top: 25px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      color: #393939;
    }

    input[type="date"] {
      position: relative;
      padding: 10px;
      width: 375px;
      height: 65px;
      color: #80918e;
      background: #efefef;
      border-radius: 10px;
      border: none;
      outline: none;
      padding-left: 15px;
    }

    /* input[type="date"]::-webkit-calendar-picker-indicator {
            color: transparent;
            background: none;
            z-index: 1;
        } */
    /* 
        input[type="date"]:before {
            color: transparent;
            background: none;
            font-family: 'FontAwesome';
            content: '\f078'; */
    /* This is the calendar icon in FontAwesome */
    /*         
            position: absolute;
            top: 22px;
            right: 1px;
            color: #999;
        } */
    .input-box {
      padding: 10px;
      width: 375px;
      height: 65px;
      color: #80918e;
      background: #efefef;
      border-radius: 10px;
      border: none;
      outline: none;
    }
    .custom-select {
      padding-left: 15px;
      width: 375px;
      height: 65px;
      background: #efefef;
      outline: none;
      border: none;
      color: #80918e;
      border-radius: 10px;
      margin-top: 20px;
    }
  }
  .btn-pay {
    margin-top: 90px;
    width: 100%;
    height: 65px;
    background: #ffcd61;
    box-shadow: 0px 0px 20px rgba(251, 143, 29, 0.4);
    border-radius: 10px;
    color: #393939;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    border: none;
  }
  .footer {
    margin-top: 60px;
  }
`;
