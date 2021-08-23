import { TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/footer'
import Inputfield from '../../components/inputfield'
import Navbar_Bf_Login from '../../components/navbar_bf_login'

const Profile = () => {
    return (
        <Styles>
            {/* <Inputfield label="Email Address"/> */}
            <Navbar_Bf_Login/>
            <div className="container">
            <h1>Profile</h1>
                <div className="profile-group">
                        <div className="profile-wrapper">
                            <img className="images" src="/lady di.jpg" alt="" />
                            
                            <div className="profile-btn">            
                                <input id="upload" type="file"/>
                                <label class="button" for="upload">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                </label>
                                {/* <button>
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </button> */}
                            </div>
                        </div>
                        <h1 className="username">Alcina</h1>
                        <div className="text-wrap">
                            <h6>alcinadimitrescu@gmail.com</h6>
                            <h6>+6289389123</h6>
                            <h6>Has been active since 2019</h6>
                        </div>
                        <div className="radio-button-group">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>
                </div>
            <h2>Contacts</h2>
                    <Inputfield
                    className="input"
                    label="Email Address"
                    type="email"
                    value=""
                    name="email"
                    onChange=""
                    />
                    <Inputfield
                    className="input"
                    label="Address"
                    type="text"
                    value=""
                    name="address"
                    onChange=""
                    />
                    <Inputfield
                    className="input"
                    label="Mobile Number"
                    type="text"
                    value=""
                    name="phone_number"
                    onChange=""
                    />
            <h2>Identity</h2>
            <div className="identity-group">
                <div className="identity-name">

                    <Inputfield
                    className="input-name"
                    label="Display Name"
                    type="text"
                    value=""
                    name="display_name"
                    onChange=""
                    />
                </div>
                <div className="identity-date">

                      <Inputfield
                    className="input-date"
                    type="date"
                    name="datebirth"
                    onChange=""
                    defaultValue="2017-05-24T10:30"
                    label="date"
                    />
                </div>
            </div>
            <div className="container">
                <div className="row sub-menu">
                    <div className="col">
                        <button className="btn-save">Save Changes</button>
                    </div>
                    <div className="col">
                        <button className="btn-password">Edit Password</button>
                    </div>
                    <div className="col">
                        <button className="btn-cancel">Cancel</button>
                    </div>
                </div>
            </div>
            {/* <div className="button-group">
            </div> */}
            </div>
            <Footer className="footer"/>
        </Styles>
    )
}

export default Profile
const Styles = styled.div`
  h1{
    margin-top: 50px;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    color: #000000; 
    mix-blend-mode: normal;
  }
.profile-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
        .profile-wrapper{
            width: 150px;
            height: 150px;
            margin-top: 35px;
            background: #D4D4D4;
            border-radius: 100%;
            position: relative;
        .images{
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            }
        }
        h1{
            text-align: center;
            font-size: 48px;
            font-family: 'Playfair Display';
            line-height: 24px;
            font-weight: bold;
            margin-top: 50px;
        }
        .text-wrap{
            margin-top: 40px;
            h6{
                text-align: center;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                color: #B8BECD;
            }
        }
        .profile-btn{
            position: relative;
            display: flex;
            input[type="file"] {
                position: absolute;
                top: 15px;
                left: 20px;
                visibility: hidden;
                font-size: 17px;
                color: #b8b8b8;
            }
            .button {
                display: inline-block;
                background-color: #FFCD61;
                border-radius: 50%;
                color: #ffffff;
                text-align: center;
                font-size: 20px;
                padding: 8px;
                width: 50px;
                height: 50px;
                transition: all 0.5s;
                cursor: pointer;
                margin: 5px;
                position:absolute;
                left: 65%;
                top:1;
                bottom: 0;
            }
            .button:hover {
                    background-color: #dd9a08;
                }
        }
        .radio-button-group{
            display: flex;
            flex-direction: row;
            gap: 20rem;
            margin-top: 50px;
        }        
}
h2{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #4F5665;
    margin-top: 50px;
}
.input{
    width: 100%;
    margin-top: 30px;
}
.identity-group{
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 15rem;
        .identity-name{
            width: 40%;
            height: 25%;
            
        }
        .identity-date{
            width: 40%;
            height: 25%;
            
        }
}
.sub-menu{

    .btn-save{
        @media screen and (max-width: 920px) {
            width: 200px;
            height: 70px;
        
        }
        border: none;
        outline: none;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 33px;
        color: #393939;
        background: #FFCD61;
        width: 322px;
        height: 70px;
        border-radius: 10px;
    }
    .btn-password{
        @media screen and (max-width: 920px) {
            width: 200px;
            height: 70px;
        
        }
        border: none;
        outline: none;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 33px;
        color: #FFCD61;
        width: 322px;
        height: 70px;
        background: #393939;
        border-radius: 10px;
    }
    .btn-cancel{
        @media screen and (max-width: 920px) {
            width: 200px;
            height: 70px;
        
        }
        border: none;
        outline: none;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 33px;
        color: #393939;
        width: 322px;
        height: 70px;
        background: rgba(203, 203, 212, 0.27);
        border-radius: 10px;
    }
    /* .button-group{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    } */
}
.footer{
    margin-top: 100px;
}
`



