import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Button from '../components/atoms/button'
const Email = () => {
    const router = useRouter()
    const toLogin = () =>{
        router.push('/auth_user')
    }
    return (
        <Styles>
        <div className="inner-wrap">
        
        <h1>
            Congratulation !  <br />  
            Your account has been 
            successfully <br /> activated             
        </h1>

        <div className="centerImage">
            <img src="car.gif"alt=""/>
        </div>

        <div className="text">
        Now you can enjoy all the features of Vehicle.<br/>
        </div>
   
            {/* <Button color="shine" name="" id="" className="Btn" onClick={toLogin}>Back to Login</Button> */}

        </div>
        <div className="footer"></div>
        </Styles>
    )
}

export default Email
const Styles = styled.div`
width: 600px;
height: 707px;
background: #FFFFFF; 
padding-top: 40px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
border-radius: 20px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));  
.inner-wrap{
    padding-left: 70px;
    padding-right: 70px;
    h1{
        margin-top: 35px;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: #7E98DF;
        }
    .centerImage{
        margin-top: 4px;
            img{
                height: 315px;
                width: 450px;
            }
    }
    .text{
        margin-top: 39px;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #46505C;
        }
    .Btn{
        width: 204px;
        height: 36px;
        margin-top: 28px;
        cursor: pointer;
        margin-left: 28%;
        margin-right: 28%;
    }
    
}










`