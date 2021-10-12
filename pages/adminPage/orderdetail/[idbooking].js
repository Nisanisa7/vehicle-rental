import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import copy from "copy-to-clipboard";
import randomString from 'random-string';
import Smallcard from '../../../components/smallcard';
import Footer from '../../../components/molecules/footer';
import { PrivateRouteAdmin } from '../../../Route/PrivateRouteAdmin';
import cookies from 'next-cookies';
import axios from 'axios';
import { Router, useRouter } from 'next/dist/client/router';
import Swal from 'sweetalert2';

const OrderDetail = ({detail}) => {
    const [orders, setOrders] = useState([])
    const { query } = useRouter();
    const router = useRouter()
    const id = (query.idbooking);
    const [form, setForm] = useState({
        status_order: "",
      });
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${detail.idCustommer}`)
        .then((res) => {
            setOrders(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/order/${id}`, form)
        .then(() => {
          Swal.fire("Succes", "Status order has been changed", "success");
          router.push('/adminPage/historyAdmin')
          axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/order`)
            .then((res) => {
              setOrders(res.data.data);
              
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response?.data?.message,
          });
        });
    }
    const handleMove = () =>{
        router.push('/adminPage/historyAdmin')
    }
    return (
        <Styles>
        <div className="container">
            
            <div className="back-wrapper">
                <button type="submit" className="backButton" onClick={handleMove}>
                    <i className="fa fa-chevron-left fa-3x"></i>
                    <p>History</p>
                </button>
            </div>
            <div className="row main-wrapper">
                <div className="col">

                <div className="thumbnail">
                    <img className="image" src={detail.image_order ? detail.image_order : "/bike.png"} alt="" />
                </div>
                </div>
                <div className="col detail-product">
                    <h1 className="title-name">{detail.vehicle_name}</h1>
                    <h3 className="town-title">{detail.amount}</h3>
                    <h3 className="town-title">{detail.status_order}</h3>
                    <h3 className="town-title">{detail.reservationDate}</h3>
    
                </div>
            </div>

            <div className="row second-row">
                 <Smallcard className="col  card-detail">
                     <p className="title-detail">Order Details :</p>
                         <p>For : {detail.rentalDay} Day</p>
                         <p>Total Price : Rp. {detail.totalprice}</p>

                 </Smallcard>
                 <Smallcard className="col identity">
                 {orders.map((item, index) => (
                     <>
                     <p className="title-identity">Identity</p>
                        <p>
                         {item.name}
                        </p> 
                        <p>{item.phone_number} </p>
                        <p>{item.email} </p>
                        </>
                        ))}
                 </Smallcard>
            </div>
            <div className="payment">
                <p className="payment-code"> Order Status : </p>
                <select className="custom-select" name="status_order" onChange={handleChange} id="inputGroupSelect01">
                    <option value="" disabled>Status</option>
                    <option value="Payment Finished and Taked">Payment Finished and Taked</option>
                    <option value="Payment Pending">Payment Pending</option>
                    <option value="Payment Finished Waiting to Taked">Payment Finished Waiting to Take</option>
                    <option value="On Going Rent">On Going Rent</option>
                    <option value="Returned">Returned</option>
                    <option value="canceled">Canceled</option>
                 </select>
            </div>
            <button className="btn-pay" type="button" onClick={handleUpdate}>Save Change</button>
            </div>
            <Footer　className="footer"/>
        </Styles>
    )
}

export default OrderDetail
export const getServerSideProps = PrivateRouteAdmin(async (ctx) => {
    const { idbooking } = ctx.query;
    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/order/${idbooking}`);
    const [detail] = result.data.data
    const token = await cookies(ctx).token;
    const role = await cookies(ctx).user_role;
    let isAdmin = "";
    if (role === "admin") {
      isAdmin = true;
    }
    return {
      props: {
        detail,
        token,
        isAdmin: isAdmin,
      },
    };
  });
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
   
        .thumbnail{
            width: 452px;
            height: 317px;
            object-fit: cover;
            /* background: black */
            margin-bottom: 20px;
            @media screen and (max-width: 600px) {
                justify-content: center;
            }
            
            .image{
                object-fit: cover;
                width:100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        .detail-product{
           border: 1px solid black;
           width: 100%;
           height: 100%;
           padding: 15px;
            .title-name{
            font-size: 28px;
            font-family: 'Playfair Display';
            color: #042521;
            }  
            .town-title{
            margin-top: 20px;     
            font-family: 'Nunito';
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #393939;
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
.second-row{
   margin-top: 30px;
   gap: 5%;
.card-detail{
    width: 100%;
    height: 180px;
    padding: 30px 100px;
    margin-bottom: 10px;
    .title-detail{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
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
.card-detail p{
    color: #393939;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    font-size: 18px;
}
.identity{
    width: 100%;
    height: 180px;
    padding: 20px 100px;

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
}
.card-right{
    width: 100%;
    height: 107px;
}
.payment{
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
    background: #393939;
    border-radius: 10px;
    color: #FFCD61;
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