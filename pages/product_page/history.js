import React, {useState} from 'react'
import styled from 'styled-components'
import CardHistory from '../../components/cardHistory'
import CardHistoryVehicle from '../../components/cardHistoryVehicle'
import Cardwrapper from '../../components/cardWrapper'
import Checkbox from '../../components/checkbox'
import Footer from '../../components/molecules/footer'
import Navbar_after_login from '../../components/molecules/navbar_after_login'
import Navbar_Bf_Login from '../../components/molecules/navbar_after_login'

const History = () => {
    const [checked, setChecked] = useState(false);

    const handleShow = () =>{
        setChecked(!checked);
    };
    return (
        <Styles>
            <Navbar_after_login/>
            <div className="wrapper">
                <div className="content-group">

                
                <div className="main-content">
                    <div class="search">
                        <input type="text" class="searchTerm" name="" placeholder="Search History"/>
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search fa-2x"></i>
                        </button>
                    </div>
                    <div class="select" tabindex="1">
                        <input class="selectopt" name="test" type="radio" id="opt1" checked/>
                        <label for="opt1" class="option">Types</label>
                        <input class="selectopt" name="test" type="radio" id="opt2"/>
                        <label for="opt2" class="option">Date Added</label>
                        <input class="selectopt" name="test" type="radio" id="opt3"/>
                        <label for="opt3" class="option">Name</label>
                        <input class="selectopt" name="test" type="radio" id="opt4"/>
                        <label for="opt4" class="option">Favorite Product</label>
                    </div>
                    <h6>Today</h6>
                        <CardHistory
                        content="Please finish your payment for vespa for Vespa Rental Jogja"
                        className="card-history"/>
                        <CardHistory
                        content="Your payment has been confirmed!"
                        className="card-history"/>
                    <h6>A week ago</h6>
                    <Cardwrapper className="card-wrapper">
                        <div className="wrapper-profile">
                            <div className="image-wrapper">
                                <img src="/bike.png" alt="" />
                            </div>
                            <div className="detail-profile-wrap">
                                <h5 className="text-name">Vespa Matic</h5>
                                <p>Jan 18 to 21 2021</p>
                                <h5>Prepayment : Rp. 245.000</h5>
                                <p className="status-rental">Has Been Returned</p>
                            </div>
                        </div>
                    </Cardwrapper>
                    <Cardwrapper className="card-wrapper">
                        <div className="wrapper-profile">
                            <div className="image-wrapper">
                                <img src="/bike.png" alt="" />
                            </div>
                            <div className="detail-profile-wrap">
                                <h5 className="text-name">Vespa Matic</h5>
                                <p>Jan 18 to 21 2021</p>
                                <h5>Prepayment : Rp. 245.000</h5>
                                <p className="status-rental">Has Been Returned</p>
                            </div>
                        </div>
                    </Cardwrapper>
                    { checked && (
                        <button className="btn-pay">Delete Selected Item</button>
                    )}
                </div>
                <div className="center-check">
                    Select
                    <div className="">
                        <Checkbox/>
                    </div>
                    <div className="check-second">
                        <Checkbox/>
                    </div>
                    <div className="check-third">
                        <Checkbox/>
                    </div>
                    <div className="check-fourth">
                        <Checkbox 
                        checked={checked}
                        onChange={handleShow}/>
                    </div>
                    <div className="check-fifth">
                        <Checkbox/>
                    </div>
                </div>
                
                </div>
                
                <div className="right-slide">
                    ini buat slider vertical
                </div>
            </div>
           
            <Footer className="footer"/>
        </Styles>
    )
}

export default History
const Styles = styled.div`
.wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* background-color: aquamarine; */
    margin-top: 25px;
    .content-group{
        width: 60%;
        display: flex;
        flex-direction: row;
        padding-left: 30px;
  
        .main-content{
            width: 100% ;
            height: 100%;
        .search{
            position: relative;
    
         input[type="text"]{
            padding-left: 15px;
            width:100%;
            height: 63px;
            border: 0.8px solid #AFB0B9;
            box-sizing: border-box;
            border-radius: 6px;
            background: rgba(218, 218, 218, 0.27);
            outline: none;

        ::placeholder{
            color: #B8BECD;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 33px;
        }
        
        }
        .searchButton
        {
            position:absolute;
            width: 45px;
            height: 35px;
            left: 90%;
            top:10px;
            background:none;
            outline: none;
            border: none;
        
        }
        }
        .select {
            margin-top: 25px;
            display:flex;
            flex-direction: column;
            position:relative;
            border-radius: 6px;
            width:150px;
            height:79px;
            .option {
                padding:0 30px 0 10px;
                min-height:40px;
                display:flex;
                align-items:center;
                background: #FFF;
                border-top:#DADADA solid 1px;
                position:absolute;
                top:0;
                width: 100%;
                pointer-events:none;
                order:2;
                z-index:1;
                transition:background .4s ease-in-out;
                box-sizing:border-box;
                overflow:hidden;
                white-space:nowrap;
            
            }
            .option:hover {
                background: rgba(218, 218, 218, 0.685);
            }
            input {
                opacity:0;
                position:absolute;
                left:-99999px;
                
                
            }
            input:checked + label {
                order: 1;
                z-index:2;
                background:#DADADA;
                border-top:none;
                position:relative;
                color: #25262b83;
            }
            input:checked + label:after {
                content:'';
                width: 0; 
                height: 0; 
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid white;
                position:absolute;
                right:10px;
                top:calc(50% - 2.5px);
                pointer-events:none;
                z-index:3;
            }
            input:checked + label:before {
            position:absolute;
            right:0;
            height: 40px;
            width: 40px;
            content: '';
            background:#DADADA;
        }
        }
        .select:focus .option {
            position:relative;
            pointer-events:all;
        }
        h6{
            margin-top: 45px;
            color: #C4C4C4;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 180%;
        }
        .card-wrapper{
            height: 170px;
            padding-top: 20px;
            margin-top: 25px;
        }
        .wrapper-profile {
            display: flex;
            flex-direction: row;
        }
        .image-wrapper {
            width: 197px;
            height: 165px;
            margin-left: 20px;
            border-radius: 10px;
        }
        .image-wrapper img {
            border-radius: 20px;
            width: 100%;
        }
        .detail-profile-wrap {
            padding-top: 10px;
            margin-left: 20px;
            height: 69px;
            /* width: 200px; */
        }
        .status-rental{
            color: #00ff00;
        }
        .card-history{
            margin-top: 35px;
        }
        .btn-pay{
            margin-top: 90px;
            width: 100%;
            height: 65px;
            background: #FFCD61;
            box-shadow: 0px 0px 20px rgba(251, 143, 29, 0.4);
            border-radius: 10px;
            color: #393939;
            font-family:'Nunito';
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 25px;
            border: none;
        }

    }
    .center-check{
        height: 100%;
        margin-left: 50px;
        font-family:'Poppins';
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: #393939;
        .check-second{
            margin-top: 210px;
        }
        .check-third{
            margin-top: 50px;
        }
        .check-fourth{
            margin-top: 195px;
        }
        .check-fifth{
            margin-top: 155px;
        }
   
    }
}
        .right-slide{
            width: 28%;
            height: 100%;
            background: pink;
        }
}
.footer{
    margin-top: 200px;
}

`
