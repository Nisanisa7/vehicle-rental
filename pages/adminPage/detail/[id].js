import React, { useRef, useState, useEffect } from "react";
import Flickity from 'react-flickity-component'
import styled from 'styled-components'
import Navbar_after_login from '../../../components/molecules/navbar_after_login'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import router, { useRouter } from 'next/router'
// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
import Footer from "../../../components/molecules/footer";
import axios from "axios";
import Vehicle_type_admin from "../vehicle_type_admin";
import NavbarAdmin from "../../../components/molecules/navbar_admin";


// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);

const Detail_vehicle = ({detail}) => {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const[stock, setCount] = useState(1);

    const handleBack = () =>{
        router.push('/adminPage/vehicle_type_admin')
    }
    const handleEdit = () =>{
        router.push(`/adminPage/edit/${detail.idvehicle}`)
    }
    return (   
        <Styles>
            <p>{JSON.stringify(detail)}</p>
            <NavbarAdmin/>
        <div className="container">

            <div className="back-wrapper">
                <button onClick={handleBack} type="submit" className="backButton">
                    <i className="fa fa-chevron-left fa-3x"></i>
                    <p>Detail</p>
                </button>
            </div>
            <div className="main-wrapper">
                <div className="thumbnail">

                    <Swiper 
                        style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} 
                        spaceBetween={10} 
                        navigation={true} 
                        thumbs={{ swiper: thumbsSwiper }} 
                        className="mySwiper2">
                        <SwiperSlide><img src={detail.image} /></SwiperSlide>
                        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                        
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10} 
                        slidesPerView={3} 
                        freeMode={true} 
                        className="mySwiper">
                    <SwiperSlide><img src={detail.image} /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                    
    
                    </Swiper>
                </div>
                <div className="detail-product">
                    <h1 className="title-name">{detail.vehicle_name}</h1>
                    <h3 className="town-title">{detail.location}</h3>
                    <h6 className="status-title">{detail.status}</h6>
                    <div className="item-detail">
                            <span>{detail.description}</span> <br />
                            <span>Type : {detail.id}</span> <br />
                            <span>Reservation Before 2 PM</span> 
                    </div>
                    <h2 className="price">Rp. {detail.price}/day</h2>

                <div className="button-wrapper">
                    <button className="button-min" onClick={()=>setCount(stock-1)}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>

                    <span className="counter">{detail.stock}</span>

                    <button className="button-plus" onClick={()=>setCount(stock+1)} >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>

                </div>
                </div>
            </div>
            <div className="button-content">
                <button type="submit" className="btn-chat">
                    Add to home page
                </button>
                <button type="submit" className="btn-reservation" onClick={handleEdit}>
                    Edit item
                </button>
            </div>
        </div>
        <Footer className="footer"/>
     
        </Styles>
        
    )
}
export const getServerSideProps = async(context) => {
    const {id} = context.query;
    const {data} = await axios.get(`http://localhost:4000/v1/vehicle/${id}`)
    return{
        props:{

            detail : data.data[0]
        }
    }
}

export default Detail_vehicle
const Styles = styled.div`
.main-wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 120px;
    gap: 100px;

    .thumbnail{
        width: 50%;
        height: 463px;
        .main-image img{
            border-radius: 10px;
        }
        .sub-image{
            width: 100%;
            height: 150px;
            background: magenta;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }
    }
    .detail-product{
        /* background: pink; */
        width: 50%;
        height: 100%;
       
        .title-name{
            font-family: 'Playfair Display';
            font-style: normal;
            font-weight: 900;
            font-size: 40px;
            line-height: 25px;
            color: #042521;
            mix-blend-mode: normal;
        }
        .town-title{
            margin-top: 20px;
            font-size: 28px;
            font-family: 'Playfair Display';
            color: #042521;
        }
        .status-title{
            margin-top: 33px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #087E0D;
        }
        /* .title{
            margin-top: 15px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 300;
            font-size: 28px;
            line-height: 24px;
            color: #9B0A0A;
        } */
        .item-detail{
            margin-top: 25px;
        }
        .item-detail span {
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 24px;
            color: #393939;
        }
        .price{
            margin-top: 40px;
            text-align-last: right;
            font-family: 'Playfair Display';
            font-style: normal;
            font-weight: 900;
            font-size: 32px;
            color: #000000;           
        }
        .button-wrapper{
            display: flex;
            flex-direction: row;
            margin-top: 45px;
            .counter{
                margin-left: 140px;
                padding-top: 10px;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 900;
                font-size: 30px;
                line-height: 25px;

                color: #000000;

            }
            .button-min{
                width: 50px;
                height: 50px;
                border: none;
                outline: none;
                cursor: pointer;
                background: #FFCD61;
                border-radius: 10px;
            }
            .button-plus{
                margin-left: 140px;
                width: 50px;
                height: 50px;
                border: none;
                outline: none;
                cursor: pointer;
                background: rgba(203, 203, 212, 0.2);
                border-radius: 10px;
            }
        }
    }
}
.button-content{
    margin-top: 60px;
    .btn-chat{
        width: 400px;
        height:69px;
        background: #393939;
        border-radius: 10px;
        outline: none;
        border: 1px solid #393939;
        color: #FFCD61;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
    }
    .btn-reservation{
        margin-left: 35px;
        width: 450px;
        height:69px;
        background: #FFCD61;
        border-radius: 10px;
        outline: none;
        border: 1px solid #FFCD61;
        color: #393939;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
    }

}
.back-wrapper{
        .backButton{
            width: 250px;
            height: 28px;
            margin-top: 50px;
            border: none;
            outline: none;
            background: none;
            display: flex;
            flex-direction: row;
            .fa{
                color: #4A4C53;
                stroke-width: 10;
            }
            .fa-chevron-left g g path {
                stroke: black;
                stroke-width: 90px;
            }
            p{
            font-family:'Nunito';
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
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

body {
  background: #000;
  color: #000;
}

.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.footer{
    margin-top: 50px;
}

`