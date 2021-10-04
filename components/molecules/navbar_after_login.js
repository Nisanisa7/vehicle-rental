import React from 'react'
import styled from "styled-components";
import Link from "next/link";
const Navbar_after_login = () => {
    return (
        <Styles>
        <div className="container">
            <nav>
                    <div className="logo">
                        <img
                            src="/Footer-image.png"
                            alt="footer"
                            width="43px"
                            height="43px"
                        />
                    </div>

                    <input type="checkbox" id="check" />
                    <label for="check">
                        <i className="fa fa-bars" aria-hidden="true" id="btn"></i>
                        <i className="fa fa-times" aria-hidden="true" id="close"></i>
                    </label>
                    <ul>
                        <li>
                        <Link href="/home">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                        <Link href="/product_page/vehicle_type">
                                <a>
                                   Vehicle Type
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="">History</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                     
                            <li> 
                                <a href=""> <img src="/email 2.png" alt="" /> </a>
                            </li>
                            <li>
                            <Link href="/profile_user/profile/">
                                <a>
                                    <img className="image" src="/image 39.png" alt="" />
                                </a>
                            </Link>
                          </li>
                    </ul>
                    {/* <div className="last-item">
                        <ul>
                        </ul>
                    </div> */}
            </nav>
        </div>
    </Styles>
    )
}

export default Navbar_after_login
const Styles = styled.div`
	
	width: 100%;
  height: 90px;
  background-color: #ffff;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */
  nav {
    display: flex;
		align-items: center;
		justify-content: space-between;
    flex-direction: row;
		width: 100%;

    .logo {
      /* background-color: violet; */
     display: inline-block;
    }
    ul {
      /* background-color: turquoise; */
      margin: 0;
			list-style: none;
      @media screen and (max-width: 992px) {
        position: fixed;
        width: 100%;
        height: 100vh;
        margin-left: 0;
        left: -100%;
        top: 80px;
        background-color: rgb(240, 246, 247);
				color: black;
        text-align: center;
        transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }
    ul li {
      display: inline-block;
      line-height: 80px;
      margin: 0 10px;
      @media screen and (max-width: 992px) {
        display: block;
        line-height: 10px;
        margin: 50px 0;
      }
    }
    ul li a {
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #b8becd;
      ul li a:hover {
        color: #ffcd61;
      }
      ul li Link a img{
        border-radius: 80% !important;
      }
    }
    label #btn,
    label #close {
      color: rgb(52, 50, 64);
      font-size: 30px;
      margin-left: 35px;
      line-height: 80px;
      cursor: pointer;
      display: none;
    }

    label #btn {
      @media (max-width: 992px) {
        display: flex;
        align-items: flex-end;
      }
    }

    #check {
      display: none;
    }
    #check:checked ~ ul {
      @media screen and (max-width: 992px) {
        left: 0;
      }
    }
    #check:checked ~ label #btn {
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
    #check:checked ~ label #close {
      @media screen and (max-width: 992px) {
				display: block;
      }
    }
  }
.last-item img{
    .image{
      border-radius: 50%;
  }
}
`;
