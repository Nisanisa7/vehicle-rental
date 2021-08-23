import React from 'react'
import styled from 'styled-components'

const Card_Item = (props) => {
    return (
        <Styles className={props.className}>
                <img src={props.src} alt="" className="image" />
            <div className="card-small">
                <div className="location">
                    {props.location}
                </div>
                <div className="city">
                    {props.city}
                </div>
            </div>
        </Styles>
    )
}

export default Card_Item
const Styles = styled.div`
position: relative;
width: 100%;
height: 100%;

.image{
    width: 100%;
    height: 100%;
    border-radius:6px;
}

.card-small{
    background: white;
    width: 120px;
    height: 56px;
    /* background: black; */
    position: absolute;
    top:84%;
    padding-left: 1px;
    z-index: 1;
  
    border-radius: 0px 6px 0px 0px;
    .location{
        padding-top: 5px;
        padding-left: 5px;
        font-family: 'Nunito';
        font-style: normal;
        font-size: 17px;
        color: #042521;
    
    }
    .city{
    
        padding-left: 5px;
        font-family: 'Nunito';
        font-style: normal;
        font-size: 15px;
        color: #ADADAD;
    
        }
}

`