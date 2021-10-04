import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Footer from '../../../components/molecules/footer'
import { Layout } from '../../../components/molecules/layout'
// import Card_Item from '../../components/card_item'
import Navbar_after_login from '../../../components/molecules/navbar_after_login'
import axios from 'axios'
import Link from 'next/link'
import Card_Item from '../../../components/card_item'

const View_more = ({type}) => {
  // const [category, setCategory] = useState([])
  // useEffect(() => {
  //     axios.get("http://localhost:4000/v1/vehicle")
  //       .then((data)=>{
  //         setCategory(data.data.item)
  //       })
  //       .catch((err)=>{
  //         console.log(err);
  //       })
  // }, [])
    return (
        <Styles>
          <p>{JSON.stringify(type)}</p>
            <Layout title="detail"/>
            {/* <Navbar_Bf_Login> */}
              <Navbar_after_login/>
            {/* <div className="container"> */}

            {/* <h1>Popular in town</h1>
            <p>Click item to see details and reservation</p>
            <div className="card-content">
                    <Card_Item src="/Van.png" className="card1" location="Merapi" city="Yogyakarya"></Card_Item>
                    <Card_Item src="/orang ngetrek.png" className="card" location="Teluk Bogam" city="Kalimantan"></Card_Item>
                    <Card_Item src="/ceue naik mobil.png" className="card" location="Bromo" city="Malang"></Card_Item>
                    <Card_Item src="/boncengan.png" className="card" location="Malioboro" city="Yogyakarya"></Card_Item>
            </div> */}




            {/* </div> */}
            {/* <div className="container submenu">
      <div className="row">
        {category.map((item, index)=>(
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
        </div> 
      </div>      */}
            <Footer className="footer"/>
        </Styles>
    )
}
export const getServerSideProps = async(context) => {
  const {name} = context.query;
  const {data} = await axios.get(`http://localhost:4000/v1/vehicle/${name}`)
  return{
      props :{

          type : data
      }
  }
}

export default View_more
const Styles = styled.div`
  h1{
    margin-top: 50px;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    color: #000000; 
    mix-blend-mode: normal;
  }
  p{
    margin-top: 30px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 50px;
    align-items: center;
    text-align: center;
    color: #B8BECD;
  }
  .card-content{
  display: flex;
  flex-direction: row;
  margin-top: 56px;
  .card1{
    width: 284px;
    height: 337px;
  }
  .card{
    margin-left: 20px;
    width: 284px;
    height: 337px;

  }
}


`