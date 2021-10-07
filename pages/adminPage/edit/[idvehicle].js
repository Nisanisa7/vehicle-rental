import FormData from "form-data";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inputfield from "../../../components/atoms/inputfield";

import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/dist/client/router";
import NavbarAdmin from "../../../components/molecules/navbar_admin";
import Head from "next/head"

const EditItem = () => {
  const router = useRouter();
  const headers = {
    "Content-Type": "form-data",
  };
  const [form, setForm] = useState({
    vehicle_name: "",
    location: "",
    description: "",
    price: "",
    status: "Available",
    stock: "",
    id: "",
    image: "",
    imagePreview: null,
  });
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/vehicle_type/")
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleShowImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // let formData = new FormData([form]);
  const formData = new FormData();

  formData.append("vehicle_name", form.vehicle_name);
  formData.append("location", form.location);
  formData.append("description", form.description);
  formData.append("price", form.price);
  formData.append("status", form.status);
  formData.append("stock", form.stock);
  formData.append("id", form.id);
  formData.append("image", form.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/v1/vehicle", formData)
      .then((res) => {
        console.log(res);
        Swal.fire("Success!", "Data has been added!", "success");
        router.push("/adminPage/homeAfterLogin");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/v1/vehicle/${query.idVehicle}`)
      .then((res) => {
        alert("delete", push.router("/adminPage/homeAfterLogin"));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You cant delete this data!",
        });
      });
  };
  return (
    <Styles>
      {/* <p>{JSON.stringify(dataVehicle)}</p> */}
      <NavbarAdmin />
      <Head>
        <title>Update Product</title>
        <link rel="icon" href="/Footer-image.png" />
      </Head>
      <div className="container">
        <div className="back-wrapper">
          <button type="submit" className="backButton">
            <i className="fa fa-chevron-left fa-3x"></i>
            <p>Edit Item</p>
          </button>
          <button type="submit" className="delete-btn">
            Delete
          </button>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <div className="container">
        <div className="row ">
          <div className="col">
            <Inputfield
              className="input-field"
              label="Name (max up to 50 words)"
              name="vehicle_name"
              onChange={handleChange}
              type="text"
            />
            {/* <label className="error">{errors.vehicle_name?.message}</label> */}
            <div className="image-content">
              <div className="image-main">
                <img className="images" src={form.imagePreview} alt="" />
              </div>
              <div className="d-flex thumbnail-group">
                <div className="thumbnail-image"></div>
                <div className="thumbnail-image-side">
                  <label htmlFor="upload-button">
                    <img className="image-thumb" src="/ADDMOAR.png" alt="" />
                  </label>
                  <input
                    type="file"
                    id="upload-button"
                    name="image"
                    style={{ display: "none" }}
                    onChange={handleShowImage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form">
              <Inputfield
                className="input-location"
                // value={dataVehicle.location}
                name="location"
                onChange={handleChange}
                type="text"
              />
              {/* <label className="error">{errors.location?.message}</label> */}
              <Inputfield
                className="input-description"
                label="Description (max up to 150 words)"
                name="description"
                onChange={handleChange}
                type="text"
              />
              {/* <label className="error">{errors.description?.message}</label> */}
              <h5>Price :</h5>
              <input
                className="input-Text"
                type="text"
                name="price"
                placeholder="Type the price"
                id=""
                onChange={handleChange}
              />

              <h5>Status :</h5>
              <select
                className="custom-select button-status"
                name="id"
                id="inputGroupSelect01"
                onChange={handleChange}
              >
                {/* {items.map((item) => ( */}
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                {/* ))} */}
              </select>

              <h5>Stock :</h5>
              <input
                className="input-Text"
                type="text"
                name="stock"
                placeholder="Type the price"
                id=""
                onChange={handleChange}
              />
              {/* <label className="error">{errors.stock?.message}</label> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row button-wrapper">
          <div className="col-lg-6 col-md-4 ">
            <select
              className="custom-select"
              name="id"
              id="inputGroupSelect01"
              onChange={handleChange}
            >
              {/* {items.map((item) => ( */}
              <option value="">Halo</option>
              {/* ))} */}
            </select>
          </div>
          {/* <div className="col-lg-5 col-md-4">
           
          </div> */}
          <div className="col-lg-6 col-md-4">
            {/* <button type="submit" className="btn-save">Save item</button> */}
            <button className="btn-save" color="shine">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </Styles>
  );
};
// export const getServerSideProps = async (context) => {
//   const { idVehicle } = context.query.idVehicle;
//   const { data } = await axios.get(
//     `http://localhost:4000/v1/vehicle/${idVehicle}`
//   );
//   return {
//     props: {
//       dataVehicle: data.data,
//     },
//   };
// };
export default EditItem;
const Styles = styled.div`
  .back-wrapper {
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    .backButton {
      width: 400px;
      height: 28px;
      margin-top: 50px;
      border: none;
      outline: none;
      background: none;
      display: flex;
      flex-direction: row;
      .fa {
        color: #4a4c53;
        stroke-width: 10;
      }
      .fa-chevron-left g g path {
        stroke: black;
        stroke-width: 90px;
      }
      p {
        font-family: "Nunito";
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 24px;
        color: #000000;
        padding-left: 45px;
        padding-top: 12px;
      }
    }
    .delete-btn {
      margin-top: 60px;
      width: 135px;
      height: 46px;
      margin-left: auto;
      background: #393939;
      outline: none;
      border: none;
      color: #ffcd61;
      border-radius: 10px;
    }
  }
  .input-field {
    /* margin-bottom: 45px; */
  }
  .image-content {
    margin-top: 45px;
    @media screen and (max-width: 920px) {
      display: grid;
      justify-content: center;
    }
    .image-main {
      background: #f5f5f6;
      border-radius: 10px;
      width: 616px;
      height: 250px;
      margin-bottom: 30px;
      background-size: 95px;
      background-position: center;
      background-image: url("/camera.png");
      background-repeat: no-repeat;
      .images {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    .thumbnail-group {
      gap: 2rem;
      .thumbnail-image {
        background: #f5f5f6;
        border-radius: 7px;
        width: 290px;
        height: 150px;
        background-size: 45px;
        background-position: center;
        background-image: url("/camera.png");
        background-repeat: no-repeat;
      }
      .thumbnail-image-side {
        background: #f5f5f6;
        border-radius: 7px;
        width: 290px;
        height: 150px;
        .image-thumb {
          padding: 42px 100px;
          cursor: pointer;
        }
      }
    }
  }
  .form {
    margin-top: 15px;
    .button-status {
      width: 100%;
      height: 60px;
      padding: 15px;
      background: #f5f5f6;
      border-radius: 10px;
      outline: none;
      border: 1px solid #f5f5f6;
      display: flex;
      color: #80918e;
      margin-bottom: 17px;
      .fa {
        margin-left: auto;
        color: #80918e;
      }
    }
    .input-location {
      margin-bottom: 37px;
    }
    .input-description {
      margin-bottom: 34px;
    }
    .input-Text {
      width: 100%;
      height: 60px;
      background: #f5f5f6;
      border-radius: 10px;
      outline: none;
      border: 1px solid #f5f5f6;
      padding-left: 15px;
      margin-bottom: 17px;
    }
    h5 {
      margin-bottom: 20px;
      color: #393939;
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
    }
  }
  .button-wrapper {
    margin-top: 70px;
    select {
      /* @media screen and (max-width: 920px) {
        width: 350px;
        height: 89px;
      } */
      width: 100%;
      height: 89px;
      background: #393939;
      border-radius: 10px;
      outline: none;
      text-align: center;
      border: 1px solid #393939;
      color: #ffcd61;
      font-size: 24px;
      margin-bottom: 17px;
      .fa {
        /* float: right; */
        color: #ffcd61;
      }
    }
    .btn-save {
      /* @media screen and (max-width: 920px) {
        width: 350px;
        height: 89px;
      } */
      width: 100%;
      height: 89px;
      background: #ffcd61;
      border-radius: 10px;
      outline: none;
      text-align: center;
      border: 1px solid #ffcd61;
      color: #393939;
      font-size: 24px;
      margin-bottom: 17px;
    }
    .delete {
      width: 100%;
      height: 89px;
      outline: none;
      text-align: center;
      font-size: 24px;
    }
  }
  .error {
    color: red;
  }
`;
