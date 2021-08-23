import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
const Footer = (props) => {
    return (
        <Styles className={props.className}>
            <div className="first-section">
                <div className="about">
                    <div className="small-logo">
                    <Image src="/Footer-image.png" alt="footer" width="43px" height="43px"/>
                    </div>
                    <p className="text-about">
                        Plan and book your perfect trip with <br/>
                        expert advice, travel tips for vehicle <br/>
                        information from us
                    </p>
                    <p className="credit">©2020 Vehicle Rental Center. All rights reserved</p>
                </div>
                <div class="destination">
                    <p className="footer-title">Destinations</p>
                    <ul>
                        <li>Bali</li>
                        <li>Yogyakarta</li>
                        <li>Jakarta</li>
                        <li>Kalimantan</li>
                        <li>Malang</li>
                    </ul>
                </div>
                <div class="vehicle">
                    <p className="footer-title">Vehicle</p>
                    <ul>
                        <li>Bike</li>
                        <li>Cars</li>
                        <li>Motorbike</li>
                        <li>Return Times</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div class="interest">
                    <p className="footer-title">Interests</p>
                    <ul>
                        <li>Adventure Travel</li>
                        <li>Art and Culture</li>
                        <li>Wildlife and Nature</li>
                        <li>Family Holidays</li>
                        <li>Culinary Tip</li>
                    </ul>
                </div>
            </div>

            <div className="second-section">
                <hr />
                <ul class="social">
                    <li><img src="/twitter.png" alt=""/></li>
                    <li><img src="/Facebook.png" alt=""/></li>
                    <li><img src="/instagram.png" alt=""/></li>
                    <li><img src="/In.png" alt=""/></li>
                    <li>  <img src="/Youtube.png" alt=""/></li>            
                </ul>
            </div>
        </Styles>
    )
}

export default Footer
const Styles = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #F9F9FB;
    .first-section{
        display: flex;
        flex-direction: row;
        padding: 50px 50px;
            .about{
                height: 200px;
                width: 400px;
                /* background: #FFCD61; */
                .text-about{
                        margin-top: 24px;
                        font-style: normal;
                        font-weight: 300;
                        font-size: 18px;
                        color: #848484;
                        mix-blend-mode: normal;
                    }
                    .credit{
                        padding-top: 10px;
                        font-weight: 300;
                        font-size: 17px;
                        color: #848484;
                        mix-blend-mode: normal;
                    }
            }
            .destination{
                height: 200px;
                width: 200px;
                margin-left: 90px;
                .footer-title{
                    padding-left: 40px;
                    font-weight: bold;
                    font-size: 19px;
                    color: #393939;
                    mix-blend-mode: normal;
                }
                ul {
                    list-style-type: none;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    color: #848484;
                    mix-blend-mode: normal;
                }
                ul li{
                        padding-top: 2px;
                    }
            }
            .vehicle{
                height: 200px;
                width: 200px;
                margin-left: 25px;
                    .footer-title{
                        padding-left: 40px;
                        font-weight: bold;
                        font-size: 19px;
                        color: #393939;
                        mix-blend-mode: normal;
                    }
                    ul {
                        list-style-type: none;
                        font-style: normal;
                        font-weight: 300;
                        font-size: 18px;
                        color: #848484;
                        mix-blend-mode: normal;
                    }
                    ul li{
                        padding-top: 2px;
                    }
            }
            .interest{
                height: 200px;
                width: 200px;
                    .footer-title{
                        padding-left: 40px;
                        font-weight: bold;
                        font-size: 19px;
                        color: #393939;
                        mix-blend-mode: normal;
                    }
                    ul {
                        list-style-type: none;
                        font-style: normal;
                        font-weight: 300;
                        font-size: 18px;
                        color: #848484;
                        mix-blend-mode: normal;
                    }
                    ul li{
                        padding-top: 2px;
                    }
            }

    }
    .second-section{
        margin-left: auto;
        margin-right: auto;
        padding: 25px 50px;
        width: 100%;
        hr{
            height: 5px;
            background: #C4C4C4;
        }
        .social{
            display: flex;
            align-items: center;
            justify-content: center;
            list-style-type: none;
            /* margin: 1rem 0 3rem 0; */
        }
        .social li{
            margin: 15px 20px;
        }
    }
`