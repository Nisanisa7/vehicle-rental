import React from 'react'
import styled from 'styled-components'
import Card_Item from '../../components/card_item'
import Navbar_Bf_Login from '../../components/navbar_bf_login'
import Link from 'next/link'
import Footer from '../../components/footer'

const Vehicle_type = () => {
    return (
        <Styles>
            <Navbar_Bf_Login/>
            <div className="container">
           
                <div class="search">
                    <input type="text" class="searchTerm" name="" placeholder="Search vehicle (ex. cars, cars name)"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search fa-2x"></i>
                    </button>
                </div>

                <div className="submenu">
                <h1>Popular in town</h1>
                    <div className="popular-wrap">
                        <Link href="">
                        <a className="view">View all <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                        </Link>             
                    </div>
                </div>

                <div className="card-content">
                    <Card_Item src="/Van.png" className="card1" location="Merapi" city="Yogyakarya"></Card_Item>
                    <Card_Item src="/orang ngetrek.png" className="card" location="Teluk Bogam" city="Kalimantan"></Card_Item>
                    <Card_Item src="/ceue naik mobil.png" className="card" location="Bromo" city="Malang"></Card_Item>
                    <Card_Item src="/boncengan.png" className="card" location="Malioboro" city="Yogyakarya"></Card_Item>

                </div>
                
                <div className="submenu">
                <h1>Cars</h1>        
                    <div className="car-wrap">
                        <Link href="">
                        <a className="view">View all <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                        </Link>             
                    </div>
                </div>
                <div className="card-content car">
                    <Card_Item src="/Van.png" className="card1" location="Merapi" city="Yogyakarya"></Card_Item>
                    <Card_Item src="/orang ngetrek.png" className="card" location="Teluk Bogam" city="Kalimantan"></Card_Item>
                    <Card_Item src="/ceue naik mobil.png" className="card" location="Bromo" city="Malang"></Card_Item>
                    <Card_Item src="/boncengan.png" className="card" location="Malioboro" city="Yogyakarya"></Card_Item>

                </div>

                <div className="submenu">
                <h1>Motor Bike</h1>
                    <div className="link-wrap">
                        <Link href="">
                        <a className="view">View all <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                        </Link>             
                    </div>
                </div>

                <div className="card-content motor">
                    <Card_Item src="/Van.png" className="card1" location="Merapi" city="Yogyakarya"></Card_Item>
                    <Card_Item src="/orang ngetrek.png" className="card" location="Teluk Bogam" city="Kalimantan"></Card_Item>
                    <Card_Item src="/ceue naik mobil.png" className="card" location="Bromo" city="Malang"></Card_Item>
                    <Card_Item src="/boncengan.png" className="card" location="Malioboro" city="Yogyakarya"></Card_Item>

                </div>
                <div className="submenu">
                <h1>Bike</h1>
                    <div className="car-wrap">
                        <Link href="">
                        <a className="view">View all <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                        </Link>             
                </div>
                </div>
                <div className="card-content bike">
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

export default Vehicle_type
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
.submenu{
  display: flex;
  flex-direction: row;
  margin-top: 72px;
  h1{
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    color: #000000; 
    mix-blend-mode: normal;
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

`