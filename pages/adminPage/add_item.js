import FormData from "form-data";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inputfield from "../../components/atoms/inputfield";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/dist/client/router";
import NavbarAdmin from "../../components/molecules/navbar_admin";
import cookies from "next-cookies"
import { PrivateRouteAdmin } from "../../Route/PrivateRouteAdmin";
const Add_item = () => {
  const [empty, setEmpty] = useState(false)
  const [errSize, setErrSize] = useState(false);
  const [errType, setErrType] = useState(false);
  const router = useRouter();
  const headers = {
    "Content-Type": "form-data",
  };
  const [form, setForm] = useState({
    vehicle_name: "",
    location: "",
    description: "",
    price: "",
    status: "",
    stock: "",
    id: "",
    image: "",
    imagePreview: null,
  });
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/vehicle_type/`)
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleShowImage = (e) => {
    e.preventDefault();
    if (e.target.files[0].size > 2000000) {
      setErrSize(true);
      setErrType(false);
    } else if (
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpg" &&
      e.target.files[0].type !== "image/jpeg"
    ) {
      setErrType(true);
      setErrSize(false);
     } else if(e.target.files.length === 0){
      setEmpty(true)
      setErrSize(false);
      setErrType(false);
     } 
    else if (e.target.files.length !== 0) {
      setErrSize(false);
      setErrType(false);
       setForm({
      ...form,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  }
  setForm({
    ...form,
    image: e.target.files[0],
    imagePreview: URL.createObjectURL(e.target.files[0]),
  });
    // setForm({
    //   ...form,
    //   image: e.target.files[0],
    //   imagePreview: URL.createObjectURL(e.target.files[0]),
    // });
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
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/vehicle`, formData)
      .then((res) => {
        console.log(!res.ok);
        Swal.fire("Success!", "Data has been added!", "success");
        router.push("/adminPage/homeAfterLogin");
      })
      .catch((err) => {
        if (err.response) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
          // client received an error response (5xx, 4xx)
        } else {
          // anything else
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "you may miss something.. go check again!!",
          });
        }
      });
  };
  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: yupResolver(schema),
  // });

  return (
    <Styles>
      <NavbarAdmin />
      <div className="container">
        <div className="back-wrapper">
          <button type="submit" className="backButton">
            <i className="fa fa-chevron-left fa-3x"></i>
            <p>Add new item</p>
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
              {empty ? (
                <p className="error">
                  Image Can&apos;t be empty
                </p>
              ) : (
                ""
              )}
              {errSize ? (
                <p className="error">
                  Image size is too large. max 1mb
                </p>
              ) : (
                ""
              )}
              {errType ? (
                <p className="error">
                  Invalid file type. only png, jpg, and jpeg format
                  allowed
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col">
            <div className="form">
              <Inputfield
                className="input-location"
                label="Location"
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
              {/* <label className="error">{errors.price?.message}</label> */}
              <h5>Status :</h5>
              <select name="status" className="button-status" onChange={handleChange}>
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
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
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row button-wrapper">
          <div className="col-lg-5 col-md-6 ">
            <select
              className="custom-select button-status"
              name="id"
              id="inputGroupSelect01"
              onChange={handleChange}
            >
              {items.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
            {/* <p className="error">{errors.id?.message}</p> */}
          </div>
          <div className="col-lg-7 col-md-6">
            {/* <button type="submit" className="btn-save">Save item</button> */}
            <button onClick={(e) => handleSubmit(e)} className="btn-save">
              Save item
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </Styles>
  );
};

export default Add_item;
export const getServerSideProps = PrivateRouteAdmin(async (ctx) => {
  const token = await cookies(ctx).token;
  const role = await cookies(ctx).user_role;
  let isAdmin = "";
  if (role === "admin") {
    isAdmin = true;
  }
  return {
    props: { token, isAdmin: isAdmin, },
    
  };
});
const Styles = styled.div`
  .back-wrapper {
    margin-bottom: 100px;
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
      @media screen and (max-width: 920px) {
        width: 350px;
        height: 89px;
      }
      width: 443px;
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
        float: right;
        color: #ffcd61;
      }
    }
    .btn-save {
      @media screen and (max-width: 920px) {
        width: 350px;
        height: 89px;
      }
      width: 100%;
      height: 89px;
      border-radius: 10px;
      outline: none;
      text-align: center;
      font-size: 24px;
      margin-bottom: 17px;
      background: #ffcd61;
      border: none;
      box-shadow: 0px 0px 20px rgba(251, 143, 29, 0.4);
    }
  }
  .error {
    color: red;
  }
`;
