import React, { useRef, useState } from "react";
import Flickity from 'react-flickity-component'
import styled from 'styled-components'
import Navbar_Bf_Login from '../../components/navbar_bf_login'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
import Footer from "../../components/footer";


// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);


const Detail_vehicle = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const[count, setCount] = useState(1);
    return (
        <Styles>
            <Navbar_Bf_Login/>
        <div className="container">

            <div className="back-wrapper">
                <button type="submit" class="backButton">
                    <i class="fa fa-chevron-left fa-3x"></i>
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
                        <SwiperSlide><img src="/bike.png" /></SwiperSlide>
                        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                        
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10} 
                        slidesPerView={3} 
                        freeMode={true} 
                        className="mySwiper">
                    <SwiperSlide><img src="/bike.png" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                    
    
                    </Swiper>
                </div>
                <div className="detail-product">
                    <h1 className="title-name">Fixie-Gray Only</h1>
                    <h3 className="town-title">Yogyakarta</h3>
                    <h6 className="status-title">Available</h6>
                    <h5 className="title">No Repayment</h5>
                    <div className="item-detail">
                            <span>Capacity : 1 person</span> <br />
                            <span>Type : Bike</span> <br />
                            <span>Reservation Before 2 PM</span> 
                    </div>
                    <h2 className="price">Rp. 78.000/day</h2>

                <div className="button-wrapper">
                    <button className="button-min" onClick={()=>setCount(count-1)}>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>

                    <span className="counter">{count}</span>

                    <button className="button-plus" onClick={()=>setCount(count+1)} >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>

                </div>
                </div>
            </div>
            <div className="button-content">
                <button type="submit" className="btn-chat">
                    Chat Admin
                </button>
                <button type="submit" className="btn-reservation">
                    Reservation
                </button>
                <button type="submit" className="btn-like">
                    <i className="fa fa-heart fa-2x" aria-hidden="true">
                    <label>Like</label>
                    </i>
                    
                </button>
            </div>
        </div>
        <Footer className="footer"/>
     
        </Styles>
    )
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
            /* .first-section{
                width: 60px;
                background: tomato;
            }
            .sec-section{
                width: 150px;
                background: tomato;
            }
            .forth-section{
                width: 150px;
                background: tomato;
            }
            .forth-section  .sec-section img{
                width: 233px;
                height: 158px;
            }
            .third-section{
                width: 60px;
                background: tomato;
            } */
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
        .title{
            margin-top: 15px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 300;
            font-size: 28px;
            line-height: 24px;
            color: #9B0A0A;
        }
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
        width: 400px;
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
    .btn-like{
        margin-left: 35px;
        width: 225px;
        height: 69px;   
        background: #393939;
        border-radius: 10px;
        border: 1px solid #393939;
        .fa{
            color: #FFCD61;
        }
    }
    .btn-like label{
        padding-left: 10px;
        color: #FFCD61;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
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