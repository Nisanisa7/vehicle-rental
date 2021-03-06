import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Layout } from '../../components/molecules/layout'
import Link from 'next/link'
import Card from '../../components/card'
// import Footer from '../../components/footer'
import { useRouter } from 'next/dist/client/router'
import NavbarAdmin from '../../components/molecules/navbar_admin'
import cookies from "next-cookies";
import { PrivateRouteAdmin } from '../../Route/PrivateRouteAdmin'

const HomeAfterLogin = () => {
    const router = useRouter()
    const handleMove = () =>{
        router.push('/adminPage/add_item')
    }
    return (
        <Styles>
        <Layout title="home"/>
        <NavbarAdmin/>
        <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form">
                <h3 className="title">Explore and Travel</h3>
                <p>Vehicle Finder</p>
                <div className="underline">
                  <hr />
                </div>
                <div className="dropdown">
                  <div className="first-section">
                    <select
                      className="custom-select"
                      name=""
                      id="inputGroupSelect01"
                    >
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                    </select>
                    <select
                      className="custom-select"
                      name=""
                      id="inputGroupSelect01"
                    >
                      <option value="value">Type</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                    </select>
                  </div>
                  <div className="second-section">
                    <select
                      className="custom-select"
                      name=""
                      id="inputGroupSelect01"
                    >
                      <option value="value">Payment</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                    </select>
                    <select
                      className="custom-select"
                      name=""
                      id="inputGroupSelect01"
                    >
                      <option value="value">Date</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                      <option value="value">Location</option>
                    </select>
                  </div>
                </div>
                <input type="button" className="btn-explore" value="Explore" />
                <div className="hiddendiv">aaaa</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container submenu">
        <div className="d-flex justify-content-between">
          <h1>Popular in town</h1>
          <Link href="">
            <a className="view">View all <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
          </Link>
        </div>
      </div>

      <div className="container submenu">
        <div className="row">
            
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card src="/Van.png" className="card" location="Merapi" city="Yogyakarya"></Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card src="/orang ngetrek.png" className="card" location="Teluk Bogam" city="Kalimantan"></Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card src="/ceue naik mobil.png" className="card" location="Bromo" city="Malang"></Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card src="/boncengan.png" className="card" location="Malioboro" city="Yogyakarya"></Card>
            </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <button className="button-add" onClick={handleMove}>Add new item</button>
            </div>
        </div>

      <div className="container submenu">
        <div className="d-flex justify-content-between">
          <h1>Testimonials</h1>
          <Link href="">
            <a className="view">View all <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
          </Link>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-lg-6 side-wrapper">
            {/* <img src="/star.png" alt="" /> */}
            <img className="star" src="/star.png" alt="" />
            <img className="star" src="/star.png" alt="" />
            <img className="star" src="/star.png" alt="" />
            <img className="star" src="/star.png" alt="" />
            <img className="star" src="/star.png" alt="" />
            <p className="quote">
              ???It was the right decision to rent vehicle <br /> 
                here, I spent less money and enjoy the <br />
                trip. It was an amazing experience to <br />
                have a ride for wildlife trip!???
            </p>
            <span className="name">Edward Newgate <br /></span>
            <span className="job">Founder Circle</span>
        </div>
        <div className="col-lg-6">
          <div className="image-template">
                  <Image src="/image 6.png" className="image" width="400px" height="500px"/>
            </div>
        </div>
      </div>
    </div>
        </Styles>
    )
}

export default HomeAfterLogin
export const getServerSideProps = PrivateRouteAdmin(async (ctx) => {
  const token = await cookies(ctx).token;
  const role = await cookies(ctx).user_role;
  let isAdmin = '';
  if (role === 'admin') {
    isAdmin = true;
  }
  return{
    props: { role, token, isAdmin: isAdmin,}
  };
});
const Styles = styled.div`
.banner {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/homebg.png');
      .form {
        /* width: 400px; */
        /* margin-left: auto;
        margin-right: auto; */
        margin-top: 150px;
        /* overflow: none; */
        .title {
          margin-top: 107px;
          font-family: 'Playfair Display';
          font-style: normal;
          font-weight: bold;
          font-size: 64px;
          line-height: 85px;
          color: #202336;
        }
        p {
          font-family: "Nunito";
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 30px;
          color: #202336;
        }
        .underline {
          width: 32px;
          hr {
            border-radius: 4px;
            height: 2px;
            background: #202336;
          }
        }
        .dropdown {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          visibility: hidden;
          select {
            width: 220px;
            padding-left: 10px;
            outline: none;
            cursor: pointer;
            height: 52px;
            background: rgba(255, 255, 255, 0.5);
            border: 0.8px solid #afb0b9;
            box-sizing: border-box;
            border-radius: 6px;
          }
          .first-section {
            display: flex;
            flex-direction: row;
            gap: 2rem;
          }
          .second-section {
            display: flex;
            flex-direction: row;
            margin-top: 35px;
            gap: 2rem;
          }
        }
        .btn-explore {
          width: 180px;
          height: 52px;
          outline: none;
          border: none;
          background: #ffcd61;
          border-radius: 8px;
          cursor: pointer;
          visibility: hidden;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 900;
          font-size: 17px;
          color: #393939;
          mix-blend-mode: normal;
          margin-top: 51px;
        }
        .hiddendiv {
          margin-top: 10px;
          visibility: hidden;
        }
      }
  }
  .button-add{
      margin-top: 60px;
      background: #393939;
      width: 1118px;
      height: 89px;
      border-radius: 10px;
      font-size: 24px;
      line-height: 33px;
      color: #FFCD61;
  }
  .submenu {
    margin-top: 85px;
    margin-bottom: 55px;

    @media screen and (max-width: 768px) {
      margin-top: 40px;
      margin-bottom: 20px;
    }
    h1 {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 50px;
      color: #000000;
      mix-blend-mode: normal;
    }
    .view {
      text-decoration: none;
      font-family: "Nunito";
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 60px;
      color: #fb8f1d;
      mix-blend-mode: normal;
    }
  }
  .card-content {
    
    flex-direction: row;
    margin-top: 56px;
    .card {
      margin-left: 20px;
      width: 284px;
      height: 337px;
    }
  }
  .testimonial {
    margin-top: 130px;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    color: #000000;
    mix-blend-mode: normal;
    margin-bottom: 200px;
  }
  .star {
      margin-right: 15px;
      margin-bottom: 30px;
  }
  .quote {
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: #393939;

  }
  .name {
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 48px;
    color: #000000;
  }
  .job {
    font-family: "Nunito";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 48px;
    color: rgba(57, 57, 57, 0.85);
  }
  .side-wrapper{
    margin-top: 70px;
  }
  .image {
            border-radius: 8px;
  }


`

