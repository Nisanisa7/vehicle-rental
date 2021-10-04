import { TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/molecules/footer'
import Inputfield from '../../components/atoms/inputfield'
// import Navbar_Bf_Login from '../../components/molecules/navbar_bf_login'
// import router from 'next/router'
import router, { useRouter } from 'next/router'
import Navbar_after_login from '../../components/molecules/navbar_after_login'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Profile = ({custommer}) => {
    const [form, setForm] = useState({
        // email : custommer.email,
        'address': '',
        'phone_number': '',
        'display_name': '',
        'datebirth' : '',
        'image': "",
        "imagePreview": null,
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    //
    const handleCancel = () =>{
        router.push('/adminPage/homeAfterLogin')
    }
    const formData = new FormData();

    formData.append('email', form.email);
    formData.append('address', form.address);
    formData.append('phone_number', form.phone_number);
    formData.append('display_name', form.display_name);
    formData.append('datebirth', form.datebirth);
    formData.append('image', form.image);

    const handleUpdate= () =>{
        e.preventDefault()
        axios.post('', formData)
        .then((res)=>{

        })
        .catch((err)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oof',
                text: 'Something wrong! try again!',
              })
        })
    }
    const handleShowImage = (e) => {
        setForm({
            ...form,
            image: e.target.files[0],
            imagePreview: URL.createObjectURL(e.target.files[0]),
        });
    };
    return (
        <Styles>
            <p>{JSON.stringify(custommer)}</p>
            {/* <Inputfield label="Email Address"/> */}
            <Navbar_after_login/>
            <div className="container">
            <h1>Profile</h1>
                <div className="profile-group">
                        <div className="profile-wrapper">
                            <img className="images" src={form.imagePreview} alt="" />
                            
                            <div className="profile-btn">            
                                <input id="upload" type="file" onChange={handleShowImage}/>
                                <label className="button" for="upload">
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                </label>
                                {/* <button>
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </button> */}
                            </div>
                        </div>
                        <h1 className="username">Name</h1>
                        <div className="text-wrap">
                            <h6>Email</h6>
                            <h6>08xxxxx</h6>
                            <h6>Has been active since ?</h6>
                        </div>
                        <div className="radio-button-group">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label" for="flexRadioDefault2">
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
                    name="email"
                    onChange={handleChange}
                    />
                    <Inputfield
                    className="input"
                    label="Address"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    />
                    <Inputfield
                    className="input"
                    label="Mobile Number"
                    type="text"
                    name="phone_number"
                    onChange={handleChange}
                    />
            <h2>Identity</h2>
            <div className="identity-group">
                <div className="identity-name">

                    <Inputfield
                    className="input-name"
                    label="Display Name"
                    type="text"
                    name="display_name"
                    onChange={handleChange}
                    />
                </div>
                <div className="identity-date">

                      <Inputfield
                    className="input-date"
                    type="date"
                    name="datebirth"
                    onChange={handleChange}
                    defaultValue="2017-05-24T10:30"
                    label="date"
                    />
                </div>
            </div>
            <div className="container">
                <div className="row sub-menu">
                    <div className="col col-md-4">
                        <button className="btn-save" onClick={handleUpdate}>Save Changes</button>
                    </div>
                    <div className="col col-md-4">
                        <button className="btn-password">Edit Password</button>
                    </div>
                    <div className="col col-md-4">
                        <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
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
export const getServerSideProps = async (context) => {
    try {
      const cookie = context.req.headers.cookie;
    //   console.log(cookie);
      const user = await axios.get(`http://localhost:4000/v1/authcust/checktoken`, {
        withCredentials: true,
        headers: {cookie},
      });
    
      return {
        props: {
            custommer: user.data.data
        }
      };
    } catch (error) {
      console.log(error);
      return {
        props: {},
      };
    }
  };

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
        width: 300px;
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
        width: 300px;
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
        width: 300px;
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



