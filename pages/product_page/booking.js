import React, {useState} from 'react'
import styled from 'styled-components'
import copy from "copy-to-clipboard";

import Navbar_Bf_Login from '../../components/modules/navbar_bf_login'
import Smallcard from '../../components/smallcard';
import Footer from '../../components/modeules/footer';
const Booking = () => {

    const copyText = '#FG1209878YZS'
    
    const copyToClipboard = () =>{
        alert(`You have copied "${copyText}"`);
        copy(copyText);
    }
    return (
        <Styles>
            <Navbar_Bf_Login/>
            <div className="container">
            <div className="back-wrapper">
                <button type="submit" class="backButton">
                    <i class="fa fa-chevron-left fa-3x"></i>
                    <p>Reservation</p>
                </button>
            </div>
            <div className="main-wrapper">
                <div className="thumbnail">
                    <img src="/bike.png" alt="" />
                </div>
                <div className="detail-product">
                    <h1 className="title-name">Fixie - Gray Only</h1>
                    <h3 className="town-title">Yogyakarta</h3>
                    <h5 className="title">No Repayment</h5>
                
                <input type="hidden" readonly name="" value="FG1209878YZS" id="" />
                <span className="code">#FG1209878YZS</span>
                <button className="btn-copy" onClick={copyToClipboard}>Copy booking code</button>
    
                </div>
            </div>
            <div class="row first-row">
                <div class="col-sm-5">
                 <Smallcard className="card">
                     <p className="quantity">
                         Quantity : 2 bikes
                     </p>
                 </Smallcard>
                </div>
                <div class="col-sm">
                 <Smallcard className="card-right card-date">
                     <p className="reservation">
                         Reservation Date :
                     </p>
                     <p className="date">
                     Jan 18 - 20 2021
                     </p>
                 </Smallcard>
                </div>
            </div>
            <div class="row second-row">
                <div class="col-sm-5">
                 <Smallcard className="card card-detail">
                     <label className="title-detail">Order Details :</label>
                     <ul>
                         <li>1 Bike : Rp. 78.000</li>
                         <li>1 Bike : Rp. 78.000</li>
                     </ul>
                     <p className="total">Total : 178.000</p>
                 </Smallcard>
                </div>
                <div class="col-sm">
                 <Smallcard className="identity">
                     <p className="title-identity">Identity</p>
                        <p>
                            Samantha Doe (+6290987682)
                        </p> 
                        <p>samanthadoe@mail.com </p>
                 </Smallcard>
                </div>
            </div>
            <div className="payment">
                <p className="payment-code">Payment Code : </p>
                <div className="copy-code">
                    <input className="input" type="text" />
                    <span className="code">#FG1209878YZS</span>
                    <button className="btn-copy">Copy</button>

                </div>
                <select classNsme="custom-select" name="" id="inputGroupSelect01">
                    <option value="">Payment</option>
                    <option value="">Location</option>
                    <option value="">Location</option>
                    <option value="">Location</option>
                </select>
            </div>
            <button className="btn-pay">Finish Payment</button>
            </div>
            <Footer　className="footer"/>
        </Styles>
    )
}

export default Booking
const Styles = styled.div`
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
.main-wrapper{
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 340px;

        .thumbnail{
            width: 44%;
            object-fit: cover;
            /* background: black */
            
        }
        .thumbnail img{
            object-fit: cover;
            width: 452px;
            height: 317px;
            border-radius: 10px;
        }
        .detail-product{
            width: 46%;
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
            .title{
            margin-top: 40px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            color: #9B0A0A;
            }
            input[readonly] {
                border-style: dotted;
                cursor: not-allowed;

               
            }
            .code{
                margin-top: 50px;
                font-family: 'Playfair Display';
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 24px;
                display: flex;
                align-items: center;
                color: #393939;
            }
            .btn-copy{
                margin-top: 40px;
                width: 240px;
                height: 42px;
                border: 1px solid #FFCD61;
                background: #FFCD61;
                border-radius: 10px;
                color: #393939;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
            }
        }

    
}
.first-row{
   margin-top: 50px;
}
.second-row{
   margin-top: 30px;
}
.card{
    width: 452px;
    height: 107px;
        .quantity{
            padding: 42px 100px;
            color: #393939;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            line-height: 24px;
            font-size: 24px;
        }
      
}
.card-date{
    display: flex;
    gap: 4rem;
    padding: 42px 100px;
        .reservation{
            color: #393939;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            line-height: 24px;
            font-size: 24px;
        }
        .date{
            color: #393939;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 300;
            line-height: 18px;
            font-size: 18px;
        }
}
.card-detail{
    height: 180px;
    padding: 30px 100px;
    .title-detail{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
    }
    ul{
        list-style: none;
        list-style-position: inside;
        margin-top: 15px;
        ul li{
            color: #393939;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 300;
            line-height: 18px;
            font-size: 18px;
        }
    }
    .total{
        margin-top: 5px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
    }
}
.identity{
    width: 100%;
    height: 180px;
    padding: 50px 100px;   

    .title-identity{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
    }
}
.identity p{
    color: #393939;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    font-size: 18px;
}
.card-right{
    width: 100%;
    height: 107px;
}
.payment{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    .payment-code{
        padding-top: 15px;
        color: #393939;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 24px;
    }
    .copy-code{
            position: relative;
            .input{
                width: 481px;
                height: 59px;
                border-radius: 10px;
                border: 1px solid #acacac;
                outline: none;
            }
            .btn-copy{
                position:absolute;
                width: 124px;
                height: 39px;   
                left: 65%;
                top:10px;
                background: #393939;
                border-radius: 10px;
                border: 1px solid #393939;
                color: #FFCD61;
            }
            .code{
                position:absolute;
                left: 10%;
                padding-top: 8px;
                top:10px;
                font-family: 'Playfair Display';
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 24px;
                display: flex;
                align-items: center;
                color: #393939;
            }
        }
    select{
    width: 398px;
    height: 59px;
    border-radius: 10px;
    }
    
}
.btn-pay{
    margin-top: 90px;
    width: 100%;
    height: 65px;
    background: #FFCD61;
    box-shadow: 0px 0px 20px rgba(251, 143, 29, 0.4);
    border-radius: 10px;
    color: #393939;
    font-family:'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    border: none;
}
.footer{
    margin-top: 65px;
}

`