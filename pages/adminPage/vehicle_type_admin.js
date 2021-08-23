import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Card_Item from "../../components/card_item";
import Navbar_after_login from "../../components/navbar_after_login";

const Vehicle_type_admin = () => {
  return (
    <Styles>
      <Navbar_after_login />
      <div className="container">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            name=""
            placeholder="Search vehicle (ex. cars, cars name)"
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search fa-2x"></i>
          </button>
        </div>
      </div>

      <div className="container submenu">
        <div className="d-flex justify-content-between">
          <h1>Popular in town</h1>
          <Link href="">
            <a className="view">
              View all <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </Link>
        </div>
      </div>

      <div className="container submenu">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/Van.png"
              className="card"
              location="Merapi"
              city="Yogyakarya"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/orang ngetrek.png"
              className="card"
              location="Teluk Bogam"
              city="Kalimantan"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/ceue naik mobil.png"
              className="card"
              location="Bromo"
              city="Malang"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/boncengan.png"
              className="card"
              location="Malioboro"
              city="Yogyakarya"
            ></Card_Item>
          </div>
        </div>
      </div>
      <div className="container submenu">
        <div className="d-flex justify-content-between">
          <h1>Cars</h1>
          <Link href="">
            <a className="view">
              View all <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </Link>
        </div>
      </div>

      <div className="container submenu">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/Van.png"
              className="card"
              location="Merapi"
              city="Yogyakarya"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/orang ngetrek.png"
              className="card"
              location="Teluk Bogam"
              city="Kalimantan"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/ceue naik mobil.png"
              className="card"
              location="Bromo"
              city="Malang"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/boncengan.png"
              className="card"
              location="Malioboro"
              city="Yogyakarya"
            ></Card_Item>
          </div>
        </div>
      </div>     
       
      <div className="container submenu">
        <div className="d-flex justify-content-between">
          <h1>Motorbike</h1>
          <Link href="">
            <a className="view">
              View all <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </Link>
        </div>
      </div>

      <div className="container submenu">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/Van.png"
              className="card"
              location="Merapi"
              city="Yogyakarya"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/orang ngetrek.png"
              className="card"
              location="Teluk Bogam"
              city="Kalimantan"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/ceue naik mobil.png"
              className="card"
              location="Bromo"
              city="Malang"
            ></Card_Item>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src="/boncengan.png"
              className="card"
              location="Malioboro"
              city="Yogyakarya"
            ></Card_Item>
          </div>
        </div>
      </div>
       
     
    </Styles>
  );
};

export default Vehicle_type_admin;
const Styles = styled.div`
  .search {
    position: relative;
    margin-top: 55px;

    input[type="text"] {
      padding-left: 15px;
      width: 100%;
      height: 63px;
      border: 0.8px solid #afb0b9;
      box-sizing: border-box;
      border-radius: 6px;

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
      left: 94%;
      top: 10px;
      background: none;
      outline: none;
      border: none;
    }
  }
  .submenu {
    margin-top: 85px;
    margin-bottom: 55px;
    h1 {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 50px;
      color: #000000;
      mix-blend-mode: normal;
    }
    .view {
      text-decoration: none;
      font-family: "Nunito";
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 60px;
      color: #fb8f1d;
      mix-blend-mode: normal;
    }
  }
  .card-content {
    display: flex;
    flex-direction: row;
    margin-top: 56px;
    .card {
      margin-left: 20px;
      width: 284px;
      height: 337px;
    }
  }
`;
