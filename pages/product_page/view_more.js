import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/footer'
import { Layout } from '../../components/layout'
import Card_Item from '../../components/card_item'
import Navbar_Bf_Login from '../../components/navbar_bf_login'

const View_more = () => {
    return (
        <Styles>
            <Layout title="detail"/>
            <Navbar_Bf_Login/>
            <div className="container">

            <h1>Popular in town</h1>
            <p>Click item to see details and reservation</p>
            <div className="card-content">
                    <Card_Item src="/Van.png" className="card1" location="Merapi" city="Yogyakarya"></Card_Item>
                    <Card_Item src="/orang ngetrek.png" className="card" location="Teluk Bogam" city="Kalimantan"></Card_Item>
                    <Card_Item src="/ceue naik mobil.png" className="card" location="Bromo" city="Malang"></Card_Item>
                    <Card_Item src="/boncengan.png" className="card" location="Malioboro" city="Yogyakarya"></Card_Item>
            </div>




            </div>
            <Footer className="footer"/>
        </Styles>
    )
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