import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Navbar_Bf_Login = () => {
    return (
        <Styles>
        <nav>
            <input type="checkbox" id="check"/>
            <label for="check">
                <i class="fa fa-bars" aria-hidden="true" id="btn"></i>
                <i class="fa fa-times" aria-hidden="true" id="close"></i>
            </label>
          
            <div class="logo">
                <Image src="/Footer-image.png" alt="footer" width="43px" height="43px"/>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Vehicle Type</a></li>
                <li><a href="">History</a></li>
                <li><a href="">About</a></li>
                <li><a href=""><input type="submit" class="btn-login" value="Login"/></a></li>
                <li><a href=""><input type="submit" class="btn-sign" value="Sign up"/></a></li>
            </ul>
        </nav>
        </Styles>
    )
}

export default Navbar_Bf_Login
const Styles = styled.div`
 height: 90px;
 margin-top: 10px;
 background-color: #FFFF;
 box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
 nav{
    display: flex;
    flex-direction: row;

    .logo{
    /* background-color: violet; */
    margin-top: 20px;
    display: inline-block;
    margin-left: 40px;
    }
    ul{
    /* background-color: turquoise; */
    margin-left: 40%;
    margin-right: 48px;
    list-style: none;
    }
    ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 10px;
    }
    ul li a{
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #B8BECD;
        .btn-login{
    width: 132px;
    height: 44px;
    outline: none;
    background: none;
    border: 1px solid #FFCD61;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
    transition: .5s;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #393939;
    mix-blend-mode: normal;
}
.btn-login:hover{
    color: white;
    background: #FFCD61;
}
.btn-sign{
    width: 132px;
    height: 44px;
    outline: none;
    border: none;
    background: #FFCD61;
    border-radius: 8px;
    cursor: pointer;
    transition: .5s;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #FFFF;
    mix-blend-mode: normal;
}
label #btn,
label #close {
    color: rgb(52, 50,64);
    font-size: 30px;
    margin-left: 35px;
    line-height: 80px;
    cursor: pointer;
    display: none;
}
#check{
    display: none;
}
    }
    ul li a:hover{
        color: #FFCD61;
    }
}
`
