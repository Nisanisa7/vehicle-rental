import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Card_Item from "../../components/card_item";
import Navbar_after_login from "../../components/navbar_after_login";

const View_more = () => {
    const [vehicle, setVehicle] = useState ([])
    const [search, setSearch] = useState("")
    useEffect(async() => {
      const result = await axios('http://localhost:4000/v1/vehicle')
      setVehicle(result.data)
    }, [])
  return (
    <Styles>
      <div className="container navbar">
        <Navbar_after_login />
      </div>
      <div className="container submenu">
        <div className="d-flex justify-content-between">
          <h1>Popular in town</h1>
        </div>
      </div>
      <div className="container">
        <div className="row text-gray">
          <p>Click item to see details and reservation</p>
        </div>
      </div>
        {vehicle.map(item=>(
      <div className="container">
        <div className="row-cols-5">

          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_Item
              src={item.image}
              className="card"
              location={item.vehicle_name}
              city={item.location}
            ></Card_Item>
          </div>
        </div>
      </div>
        ))}
    </Styles>
  );
};

export default View_more;
const Styles = styled.div`
  .navbar {
    margin-top: 20px;
  }
  .submenu {
    margin-top: 85px;
    margin-bottom: 30px;
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
  .text-gray {
    display: grid;
    justify-content: center;
    margin-bottom: 50px;
    p {
      font-family: "Nunito";
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 50px;
      align-items: center;
      text-align: center;
      color: #b8becd;
    }
  }
`;