import React from 'react'
import styled from 'styled-components'

const CardHistoryVehicle = ({className}) => {
    return (
        <Styles className={className}>
            <div className="left">
                <div className="image-item-wrap">
                    <img src="/bike.png" alt="" />
                </div>
            </div>
            <div className="vehicle-detail">
                    <h6 className="text-heading">Vespa Matic</h6>
                    <p>Jan 18 to 21 2021</p>
                    <h6>Prepayment : Rp. 245.000</h6>
                    <p>Has been returned</p>
            </div>
        </Styles>
    )
}

export default CardHistoryVehicle
const Styles = styled.div`
display: flex;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    .left{
        display: flex;
        width: 100%;
    }
    .image-item-wrap{
        width: 197px;
        height: 165px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .vehicle-detail{
        .text-heading {
            margin: 0;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            color:#393939 ;
            margin-bottom: 10px;
        }
    p {
      margin: 0;
    }
  }

`
