import axios from "axios";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Card_Item from "../../components/card_item";
import Card_ItemAdmin from "../../components/card_itemAdmin";
import { Layout } from "../../components/molecules/layout";
import Navbar_after_login from "../../components/molecules/navbar_after_login";

const Vehicle_type_admin = () => {
  const [category, setCategory] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
      axios.get("http://localhost:4000/v1/vehicle")
        .then((data)=>{
          setCategory(data.data.item)
        })
        .catch((err)=>{
          console.log(err);
        })
  }, [])
  return (
    <Styles>
      <Navbar_after_login />
      <Layout title="Rental Kendaraan"/>
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            name=""
            placeholder="Search vehicle (ex. cars, cars name)"
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
         />
          <button type="submit" className="searchButton">
            <i className="fa fa-search fa-2x"></i>
          </button>
        </div>
      </div>

    

      <div className="container submenu">
      
      </div>

      <div className="container submenu">
      <div className="row">
        {category.filter((item)=>{
          if(search == ""){
            return item
          } else if(item.vehicle_name.toLowerCase().includes(search.toLocaleLowerCase())){
            return item
          }
        }).map((item, index)=>(
          <>
          {item.name !== category[index-1]?.name && 
          (<div className="d-flex justify-content-between">
          <h1>{item.name}</h1>
          <Link href="">
            <a className="view">
              View all <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </Link>
        </div>)}
        
          
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card_ItemAdmin
              id={item.idvehicle}
              src={item.image}
              className="card1 card-map"
              location={item.location}
              city={item.vehicle_name}
              ></Card_ItemAdmin>
          </div>
        </>
        ))}
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
    .card1 {
    padding: 30px;
    width: 284px;
    height: 337px;
    }
    .card-map{

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
    .card-map{
      width: 23%;
  }
  }
`;
