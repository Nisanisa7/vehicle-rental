import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
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

export default Card
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
    width: 129px;
    height: 72px;
    margin-left: 50px;
    margin-right: 50px;
    /* background: black; */
    position: absolute;
    top: 90%;
    padding-left: 1px;
    z-index: 1;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    .location{
        font-family: 'Nunito';
        font-style: bold;
        font-size: 17px;
        color: #042521;
        text-align: center;
        padding-top: 10px;
    
    }
    .city{
        padding-top: 5px;
        font-family: 'Nunito';
        font-style: normal;
        font-size: 15px;
        color: #ADADAD;
        text-align: center;
    
        }
}



`
