// import FormData from "form-data";
// import React, { useState , useEffect} from "react";
// import styled from "styled-components";
// import Inputfield from "../../components/atoms/inputfield";
// import Navbar_Bf_Login from "../../components/molecules/navbar_bf_login";
// import axios from 'axios'
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';





// const Add_item = () => {
//     const headers = {
//         "Content-Type": "form-data",
//     };
//     const [form, setForm] = useState({
//         "vehicle_name": "",
//         "location": "",
//         "description": "",
//         "price": "",
//         "status": "Available",
//         "stock": "",
//         "id": "",
//         "image": "",
//         "imagePreview": null
//     });
//     const [items, setItems] = useState([])
//     useEffect(() => {
//         axios.get("http://localhost:4000/v1/vehicle_type/")
//           .then((res)=>{
//             setItems(res.data.data)
//           })
//           .catch((err)=>{
//             console.log(err);
//           })
//     }, [])
//     const handleShowImage = (e) => {
//         setForm({
//             ...form,
//             image: e.target.files[0],
//             imagePreview: URL.createObjectURL(e.target.files[0]),
//         });
//     };
//         const handleChange = (e) => {
//             setForm({
//                 ...form,
//                 [e.target.name] : e.target.value
//             })
//         }
//         // let formData = new FormData([form]);
//         const formData = new FormData();

//         formData.append('vehicle_name', form.vehicle_name);
//         formData.append('location', form.location);
//         formData.append('description', form.description);
//         formData.append('price', form.price);
//         formData.append('status', form.status);
//         formData.append('stock', form.stock);
//         formData.append('id', form.id);
//         formData.append('image', form.image);

//         const onSubmit = (data, e) =>{
//             e.preventDefault()
//             axios.post('http://localhost:4000/v1/vehicle', formData, data)
//             .then((res)=>{
//                 alert('Success');
//                 // setTimeout(() => productList(), 3000);
//             })
//             .catch((err)=>{
//                 alert(err);
//             })
//         }
//         const { register, handleSubmit, formState: { errors } } = useForm({
//           resolver: yupResolver(schema),
//         });

//     return (
//         <Styles>
//             <Navbar_Bf_Login />
//             <div className="container">
//                 <div className="back-wrapper">
//                     <button type="submit" class="backButton">
//                         <i class="fa fa-chevron-left fa-3x"></i>
//                         <p>Add new item</p>
//                     </button>
//                 </div>
//             </div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="container">
//                 <div className="row ">
//                     <div className="col">
//                         <Inputfield
//                             className="input-field"
//                             label="Name (max up to 50 words)"
//                             {...register('vehicle_name')}

//                             onChange={handleChange}
//                             type="text"
                            
//                         />
//                          <label className="error">{errors.vehicle_name?.message}</label>
//                         <div className="image-content">
//                             <div className="image-main">
//                                 <img className="images" src={form.imagePreview} alt="" />
//                             </div>
//                             <div className="d-flex thumbnail-group">
//                                 <div className="thumbnail-image"></div>
//                                 <div className="thumbnail-image-side">
//                                     <label htmlFor="upload-button">
//                                         <img className="image-thumb" src="/ADDMOAR.png" alt="" />
//                                     </label>
//                                     <input
//                                         type="file"
//                                         id="upload-button"
//                                         name="image"
//                                         style={{ display: "none" }}
//                                         onChange={handleShowImage}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="form">
//                             <Inputfield
//                                 className="input-location"
//                                 label="Location"
//                                 {...register('location')}
    
//                                 onChange={handleChange}
//                                 type="text"
                                
//                             />
//                              <p className="error">{errors.location?.message}</p>
//                             <Inputfield
//                                 className="input-description"
//                                 label="Description (max up to 150 words)"
//                                 {...register('description')}
    
//                                 onChange={handleChange}
//                                 type="text"
                                
//                             />
//                              <p className="error">{errors.description?.message}</p>
//                             <h5>Price :</h5>
//                             <input
//                                 className="input-Text"
//                                 type="text"
//                                 {...register('price')}
//                                 placeholder="Type the price"
//                                 id=""
//                                 onChange={handleChange}
//                             />
//                              <p className="error">{errors.price?.message}</p>
//                             <h5>Status :</h5>
//                             {/* <button className="button-status">
//                                 Select Status
//                                 <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
//                             </button> */}
//                            <input className="button-status" type="text" placeholder="available" name="status" onChange={handleChange} id="" readOnly />
//                             <h5>Stock :</h5>
//                             <input
//                                 className="input-Text"
//                                 type="text"
//                                 {...register('stock')}
//                                 placeholder="Type the price"
//                                 id=""
//                                 onChange={handleChange}
//                             />
//                              <label className="error">{errors.stock?.message}</label>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row button-wrapper">
//                     <div className="col-lg-5 col-md-6 ">
//                         {/* <button className="button-category">
//                             Add item to
//                             <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
//                         </button> */}
//                         <select
//                                 classNsme="custom-select button-status"
//                                 {...register('id')}
//                                 id="inputGroupSelect01"
//                                 onChange={handleChange}
//                             >
//                                   {items.map((item)=>(
//                                             <option value={item.id}>{item.name}</option>
//                                 ))}
//                         </select>
//                         <p className="error">{errors.id?.message}</p>
//                     </div>
//                     <div className="col-lg-7 col-md-6">
//                         <button type="submit" className="btn-save">Save item</button>
//                     </div>
//                 </div>
//             </div>
//             </form>
//         </Styles>
//     );
// };

// export default Add_item;
// const Styles = styled.div`
//   .back-wrapper {
//     margin-bottom: 100px;
//     .backButton {
//       width: 400px;
//       height: 28px;
//       margin-top: 50px;
//       border: none;
//       outline: none;
//       background: none;
//       display: flex;
//       flex-direction: row;
//       .fa {
//         color: #4a4c53;
//         stroke-width: 10;
//       }
//       .fa-chevron-left g g path {
//         stroke: black;
//         stroke-width: 90px;
//       }
//       p {
//         font-family: "Nunito";
//         font-style: normal;
//         font-weight: bold;
//         font-size: 30px;
//         line-height: 24px;
//         color: #000000;
//         padding-left: 45px;
//         padding-top: 12px;
//       }
//     }
//   }
//   .input-field {
//     /* margin-bottom: 45px; */
//   }
// .image-content{
//   margin-top: 45px;
//     @media screen and (max-width: 920px) {
//         display: grid;
//         justify-content: center;
//     }
//     .image-main {
//       background: #f5f5f6;
//       border-radius: 10px;
//       width: 616px;
//       height: 250px;
//       margin-bottom: 30px;
//       background-size: 95px;
//       background-position: center;
//       background-image: url("/camera.png");
//       background-repeat: no-repeat;
//       .images {
//         object-fit: cover;
//         width: 100%;
//         height: 100%;
//         border-radius: 4px;
//       }
//     }
//     .thumbnail-group {
//       gap: 2rem;
//       .thumbnail-image {
//         background: #f5f5f6;
//         border-radius: 7px;
//         width: 290px;
//         height: 150px;
//         background-size: 45px;
//         background-position: center;
//         background-image: url("/camera.png");
//         background-repeat: no-repeat;
//       }
//       .thumbnail-image-side {
//         background: #f5f5f6;
//         border-radius: 7px;
//         width: 290px;
//         height: 150px;
//         .image-thumb {
//           padding: 42px 100px;
//           cursor: pointer;
//         }
//       }
//     }
// }
//   .form {
//     .button-status {
//       width: 100%;
//       height: 60px;
//       padding: 15px;
//       background: #f5f5f6;
//       border-radius: 10px;
//       outline: none;
//       border: 1px solid #f5f5f6;
//       display: flex;
//       color: #80918e;
//       margin-bottom: 17px;
//       .fa {
//         margin-left: auto;
//         color: #80918e;
//       }
//     }
//     .input-location {
//       margin-bottom: 37px;
//     }
//     .input-description {
//       margin-bottom: 34px;
//     }
//     .input-Text {
//       width: 100%;
//       height: 60px;
//       background: #f5f5f6;
//       border-radius: 10px;
//       outline: none;
//       border: 1px solid #f5f5f6;
//       padding-left: 15px;
//       margin-bottom: 17px;
//     }
//     h5 {
//       margin-bottom: 20px;
//       color: #393939;
//       font-family: "Playfair Display";
//       font-style: normal;
//       font-weight: bold;
//       font-size: 24px;
//       line-height: 24px;
//     }
//   }
// .button-wrapper{
//     margin-top: 70px;
//     select {
//         @media screen and (max-width: 920px) {
//             width: 350px;
//             height: 89px;
//         }
//         width: 443px;
//         height: 89px;
//         background:  #393939;;
//         border-radius: 10px;
//         outline: none;
//         text-align:center;
//         border: 1px solid  #393939;;
//         color: #FFCD61;
//         font-size: 24px;
//         margin-bottom: 17px;
//         .fa {
//           float: right;
//           color: #FFCD61;
//         }
//       }
//   .btn-save{
//         @media screen and (max-width: 920px) {
//             width: 350px;
//             height: 89px;
        
//         }
//         width: 100%;
//         height: 89px;
//         border-radius: 10px;
//         outline: none;
//         text-align:center;
//         font-size: 24px;
//         margin-bottom: 17px;
//         background: #FFCD61;
//         border: none;
//         box-shadow: 0px 0px 20px rgba(251, 143, 29, 0.4);
//   }
// }
// .error{
//   color: red;
// }
// `;