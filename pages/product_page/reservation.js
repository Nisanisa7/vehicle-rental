import React, { useRef, useState } from "react";
import styled from 'styled-components'
import Footer from "../../components/molecules/footer";
import Navbar_Bf_Login from '../../components/molecules/navbar_bf_login'

const Reservation = () => {
    const[count, setCount] = useState(1);
    const handleMinus = () =>{
        setCount(count-1)
        if(count <= 1){
        setCount(1)
        } else{
            setCount((count -= 1))
        }
    }
    return (
        <Styles>
            <Navbar_Bf_Login/>
            <div className="container">
            <div className="back-wrapper">
                <button type="submit" className="backButton">
                    <i className="fa fa-chevron-left fa-3x"></i>
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
                    <div className="button-wrapper">
                        <button className="button-min" onClick={handleMinus}>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </button>

                        <span className="counter">{count}</span>

                        <button className="button-plus" onClick={()=>setCount(count+1)} >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>

                    </div>
                    <p>Reservation Date :</p>
                    <input type="date" name="" id="" />
                    <select className="custom-select" aria-label="Default select example">
                        <option selected>Rental Day</option>
                        <option value="">1 Day</option>
                        <option value="">2 Day</option>
                        <option value="">3 Day</option>
                        <option value="">4 Day</option>
                        <option value="">5 Day</option>
                    </select>
                </div>
            </div>
            <button className="btn-pay">Pay now : Rp. 178.000</button>



            </div>
            <Footer className="footer"/>
        </Styles>
    )
}

export default Reservation
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
    /* background: pink; */
    width: 100%;
    height: 500px;
    gap: 100px;
        .thumbnail{
            width: 50%;
            object-fit: cover;
            /* background: black */
            
        }
        .thumbnail img{
            object-fit: cover;
            width: 600px;
            height: 500px;
            border-radius: 10px;
        }
        .detail-product{
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
            .title{
            margin-top: 15px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            line-height: 24px;
            color: #9B0A0A;
            }
        }
        .button-wrapper{
            display: flex;
            flex-direction: row;
            margin-top: 89px;
            .counter{
                margin-left: 100px;
                padding-top: 35px;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 900;
                font-size: 44px;
                line-height: 25px;
                color: #000000;

            }
            .button-min{
                width: 75px;
                height: 76px;
                border: none;
                outline: none;
                cursor: pointer;
                background: #FFCD61;
                border-radius: 10px;
            }
            .button-plus{
                margin-left: 100px;
                width: 75px;
                height: 76px;
                border: none;
                outline: none;
                cursor: pointer;
                background: rgba(203, 203, 212, 0.2);
                border-radius: 10px;
            }
        }
        p{
            margin-top: 25px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            color: #393939;
        }
      
        input[type="date"] {
            position: relative;
            padding: 10px;
            width: 375px;
            height: 65px;
            color: #80918E;
            background: #EFEFEF;
            border-radius: 10px;
            border: none;
            outline: none;
            padding-left: 15px;
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
            color: transparent;
            background: none;
            z-index: 1;
        }

        input[type="date"]:before {
            color: transparent;
            background: none;
            font-family: 'FontAwesome';
            content: '\f078';
            /* This is the calendar icon in FontAwesome */
        
            position: absolute;
            top: 22px;
            right: 1px;
            color: #999;
        }
        .input-box{
            padding: 10px;
            width: 375px;
            height: 65px;
            color: #80918E;
            background: #EFEFEF;
            border-radius: 10px;
            border: none;
            outline: none;
        }
        .custom-select{
            padding-left: 15px;
            width: 375px;
            height: 65px;
            background: #EFEFEF;
            outline: none;
            border: none;
            color: #80918E;
            border-radius: 10px;
            margin-top: 20px;
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
    margin-top: 60px;
}

`