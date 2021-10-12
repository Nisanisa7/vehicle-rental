import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card_Item from "../../components/card_item";
import Navbar_after_login from "../../components/molecules/navbar_after_login";
import Link from "next/link";
import Footer from "../../components/molecules/footer";
import axios from "axios";
import { Layout } from "../../components/molecules/layout";
import { PrivateRoute } from "../../Route/PrivateRoute";
import cookies from 'next-cookies';
const Vehicle_type = () => {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/vehicle`)
      .then((data) => {
        setCategory(data.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Styles>
      <Navbar_after_login />
      <Layout title="Sewa Kendaraan" />
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            name=""
            placeholder="Search vehicle (ex. cars, cars name)"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search fa-2x"></i>
          </button>
        </div>
        <div className="card-content">
          <div className="row">
            {category
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.vehicle_name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, index) => (
                <>
                  {item.name !== category[index - 1]?.name && (
                    <div className="submenu">
                      <h1 className="h1-map">{item.name}</h1>
                      <div className="car-wrap">
                        <Link href={`/product_page/Vehicletype/${item.id}`}>
                          <a className="view">
                            View all{" "}
                            <i
                              className="fa fa-chevron-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <Card_Item
                      id={item.idvehicle}
                      src={item.image}
                      className="card1 card-map"
                      location={item.location}
                      city={item.vehicle_name}
                    ></Card_Item>
                  </div>
                </>
              ))}

            {/* <Card_Item src="/orang ngetrek.png" className="card" location="Teluk Bogam" city="Kalimantan"></Card_Item>
                    <Card_Item src="/ceue naik mobil.png" className="card" location="Bromo" city="Malang"></Card_Item>
                    <Card_Item src="/boncengan.png" className="card" location="Malioboro" city="Yogyakarya"></Card_Item> */}
          </div>
        </div>
      </div>
      {/* <Footer className="footer"/> */}
    </Styles>
  );
};

export default Vehicle_type;
export const getServerSideProps = PrivateRoute(async (ctx) => {
  try {
    const token = await cookies(ctx).token;
    const role = await cookies(ctx).user_role;
    let isCustommer = '';
    if (role === 'custommer') {
      isCustommer = true;
    }
    return{
      props: {
        role: role,
        token: token,
        isCustommer: isCustommer,
      }
    };
  } catch (error) {
    console.log(error);
  }
});
const Styles = styled.div`
.search{
    position: relative;
    margin-top: 55px;
    
    input[type="text"]
    {
        padding-left: 15px;
        width:100%;
        height: 63px;
        border: 0.8px solid #AFB0B9;
        box-sizing: border-box;
        border-radius: 6px;

        ::placeholder{
            color: #B8BECD;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 33px;
        }
        
    }
    .searchButton
    {
        position:absolute;
        width: 45px;
        height: 35px;
        left: 94%;
        top:10px;
        background:none;
        outline: none;
        border: none;
    
    }
}
.input-group{
    select{
        height: 50px;
        width: 200px;
        border: 0.8px solid #AFB0B9;
        color: #B8BECD;
    }
}

  .link-wrap{
      height: 50px;
      width: 250px;
      margin-left: 61%;
      text-align: right;
  }
  .popular-wrap{
      height: 50px;
      width: 185px;
      margin-left: 61%;
      text-align: right;
  }
  .car-wrap{
      height: 50px;
      width: 350px;
      margin-left: 61%;
      text-align: right;
  }
  .view{
      /* margin-left: 70%; */
      text-decoration: none;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 60px;
      color: #FB8F1D;
      mix-blend-mode: normal;
  }


}
.card-content{
  /* display: flex;
  flex-direction: row; */
  margin-top: 56px;

  /* gap: 1rem;
  flex-wrap: wrap; */
  /* .card1{
    width: 300px;
    height: 337px;
    gap: 1px;
  } */

  .card-map{
      /* width: 23%; */
      /* grid-gap: 50px; */
      /* padding: 30px; */
      /* margin: 10px;
      padding: 10px; */
  }
  .h1-map{
      width: 100%;
  }
  .submenu{
  display: flex;
  flex-direction: row;
  margin-top: 72px;
  width: 100%;
  h1{
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    color: #000000; 
    mix-blend-mode: normal;
  }
}
.car{
    margin-top: 55px;
}
.motor{
    margin-top: 55px;
}
.bie{
    margin-top: 55px;
}
.footer{
    margin-top: 90px;
}

`;
