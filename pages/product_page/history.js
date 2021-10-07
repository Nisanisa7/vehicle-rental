import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardHistory from "../../components/cardHistory";
import CardHistoryVehicle from "../../components/cardHistoryVehicle";
import Cardwrapper from "../../components/cardWrapper";
import Card_Item from "../../components/card_item";
import Checkbox from "../../components/checkbox";
import Footer from "../../components/molecules/footer";
import Navbar_after_login from "../../components/molecules/navbar_after_login";
import Navbar_Bf_Login from "../../components/molecules/navbar_after_login";

const History = () => {
  const [checked, setChecked] = useState(false);
  const idCustommer = localStorage.getItem('idCustommer')
  const [orders, setOrders] = useState([])
  const handleShow = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    axios.get(`http://localhost:4000/v1/order/custommer/`+idCustommer)
    .then((res) => {
        setOrders(res.data.data)
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])
  console.log(orders);
  return (
    <Styles>
      <Navbar_after_login />
      <div className="wrapper container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-group">
              <div className="main-content">
                <div className="title-wrap">
                  <div className="search">
                    <input
                      type="text"
                      className="searchTerm"
                      name=""
                      placeholder="Search History"
                    />
                    <button type="submit" className="searchButton">
                      <i className="fa fa-search fa-2x"></i>
                    </button>
                  </div>
                  <div className="text-select">Select</div>
                </div>
                <div className="select" tabIndex="1">
                  <input
                    className="selectopt"
                    name="test"
                    type="radio"
                    id="opt1"
                    checked
                  />
                  <label htmlFor="opt1" className="option">
                    Types
                  </label>
                  <input
                    className="selectopt"
                    name="test"
                    type="radio"
                    id="opt2"
                  />
                  <label htmlFor="opt2" className="option">
                    Date Added
                  </label>
                  <input
                    className="selectopt"
                    name="test"
                    type="radio"
                    id="opt3"
                  />
                  <label htmlFor="opt3" className="option">
                    Name
                  </label>
                  <input
                    className="selectopt"
                    name="test"
                    type="radio"
                    id="opt4"
                  />
                  <label htmlFor="opt4" className="option">
                    Favorite Product
                  </label>
                </div>
                {orders.map((item, index) => (
                    <>
                <div className="item-wrapper">
                  <Cardwrapper className="card-wrapper">
                    <div className="wrapper-profile">
                      <div className="image-wrapper">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="detail-profile-wrap">
                        <h5 className="text-name">{item.vehicle_name}</h5>
                        <p>{item.reservationDate}</p>
                        <h5>Prepayment : {item.totalprice}</h5>
                        <p className="status-rental">{item.status}</p>
                      </div>
                    </div>
                  </Cardwrapper>
                  <div className="check-second">
                    <Checkbox />
                  </div>
                </div>
                    </>
                ))}
                <button className="btn-pay">Delete Selected Item</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="right-slide">
              <div className="text">New Arrival</div>
              <div className="card">
                <Card_Item
                  src="/lamborgini.png"
                  location="Lamborghini"
                  city="South Jakarta"
                ></Card_Item>
              </div>
              <div className="card bottom">
                <Card_Item
                  src="/white jeep.png"
                  location="White Jeep"
                  city="Kalimantan"
                ></Card_Item>
              </div>
              <div className="view">View More</div>
              <div className="arrow">
                <img src="/arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer className="footer" />
    </Styles>
  );
};

export default History;
const Styles = styled.div`
  .wrapper {
    margin-top: 25px;
    .content-group {
      width: 100%;

      .main-content {
        width: 100%;
        height: 100%;
        .title-wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: nowrap;
          /* background: coral; */
          .search {
            position: relative;
            input[type="text"] {
              padding-left: 15px;
              width: 545px;
              height: 63px;
              border: 0.8px solid #afb0b9;
              box-sizing: border-box;
              border-radius: 6px;
              background: rgba(218, 218, 218, 0.27);
              outline: none;

              ::placeholder {
                color: #b8becd;
                font-family: "Nunito";
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 33px;
              }
            }
            .searchButton {
              position: absolute;
              width: 45px;
              height: 35px;
              left: 85%;
              top: 10px;
              background: none;
              outline: none;
              border: none;
            }
          }
          .text-select {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 36px;
             margin-left: 9%;
            color: #393939;
          }
        }
        .select {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          position: relative;
          border-radius: 6px;
          width: 150px;
          height: 79px;
          .option {
            padding: 0 30px 0 10px;
            min-height: 40px;
            display: flex;
            align-items: center;
            background: #fff;
            border-top: #dadada solid 1px;
            position: absolute;
            top: 0;
            width: 100%;
            pointer-events: none;
            order: 2;
            z-index: 1;
            transition: background 0.4s ease-in-out;
            box-sizing: border-box;
            overflow: hidden;
            white-space: nowrap;
          }
          .option:hover {
            background: rgba(218, 218, 218, 0.685);
          }
          input {
            opacity: 0;
            position: absolute;
            left: -99999px;
          }
          input:checked + label {
            order: 1;
            z-index: 2;
            background: #dadada;
            border-top: none;
            position: relative;
            color: #25262b83;
          }
          input:checked + label:after {
            content: "";
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid white;
            position: absolute;
            right: 10px;
            top: calc(50% - 2.5px);
            pointer-events: none;
            z-index: 3;
          }
          input:checked + label:before {
            position: absolute;
            right: 0;
            height: 40px;
            width: 40px;
            content: "";
            background: #dadada;
          }
        }
        .select:focus .option {
          position: relative;
          pointer-events: all;
        }
        h6 {
          margin-top: 45px;
          color: #c4c4c4;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 180%;
        }
        .item-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: nowrap;
          .card-wrapper {
            height: 100%;
            width: 65%;
            padding-top: 20px;
            margin-top: 25px;
          }
          .check-second {
            margin-left: 19%;
          }
        }
        .wrapper-profile {
          display: flex;
          flex-direction: row;
        }
        .image-wrapper {
          width: 197px;
          height: 165px;
          margin-left: 20px;
          border-radius: 10px;
        }
        .image-wrapper img {
          border-radius: 20px;
          width: 100%;
        }
        .detail-profile-wrap {
          padding-top: 10px;
          margin-left: 20px;
          height: 69px;
          /* width: 200px; */
        }
        .status-rental {
          color: #00ff00;
        }
        .card-history {
          margin-top: 35px;
        }
        .btn-pay {
          margin-top: 90px;
          width: 87%;
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
      }
      .center-check {
        height: 100%;
        margin-left: 50px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: #393939;
        .check-second {
          margin-top: 210px;
        }
        .check-third {
          margin-top: 50px;
        }
        .check-fourth {
          margin-top: 195px;
        }
        .check-fifth {
          margin-top: 155px;
        }
      }
    }
    .right-slide {
      width: 375px;
      height: 990px;
      /* background: pink;
       */
      border: 1px solid #dadada;
      box-sizing: border-box;
      border-radius: 10px;
      .text {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 180%;
        color: #393939;
        text-align: center;
        margin-top: 40px;
      }
      .card {
        margin-left: 60px;
        margin-right: 50px;
        margin-top: 31px;
      }
      .bottom {
        margin-top: 40px;
        margin-bottom: 50px;
      }
      .view {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;
        text-align: center;
        color: #b8becd;
        margin-bottom: 10px;
      }
      .arrow img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 43px;
        height: 23px;
      }
    }
  }
  .footer {
    margin-top: 200px;
  }
`;
