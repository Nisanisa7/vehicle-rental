import axios from "axios";
import React from "react";
import styled from "styled-components";
import Card_Item from "../../../components/card_item";
import Navbar_after_login from "../../../components/molecules/navbar_after_login";

const VehicleType = ({ vehicle }) => {
  return (
    <Styles>
      <Navbar_after_login/>
      <div className="container submenu">
        <div className="row">
          {vehicle.map((dataVehicle) => {
            return (
              <>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <Card_Item
                    id={dataVehicle.idvehicle}
                    src={dataVehicle.image}
                    className="card1 card-map"
                    location={dataVehicle.location}
                    city={dataVehicle.vehicle_name}
                  ></Card_Item>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const { data } = await axios.get(
    `http://localhost:4000/v1/vehicle/type/${id}`
  );
  return {
    props: {
      vehicle: data.item,
    },
  };
};
export default VehicleType;
const Styles = styled.div`
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
    .card1 {
    padding: 30px;
    width: 284px;
    height: 337px;
    }
    .card-map{

  }
  }

` 