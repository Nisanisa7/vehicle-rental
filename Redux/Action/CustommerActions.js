import axios from "axios";
import Swal from "sweetalert2";
import * as Types from "../types";

export const LoginCust = (data, router) => (dispatch) => {
  axios
    .post(`https://vehicle-rental-omega.vercel.app/api/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      const isAuth = true;
      const status = res.data.data.status;
      const role = res.data.data.role;
      const email = res.data.data.email;
      const idCustommer = res.data.data.idCustommer;
      const image = res.data.data.image;
      const token = res.data.data.token;
      const createdAt = res.data.data.createdAt;

      // if (status === "inactive") {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Boo Boo",
      //     text: "Please activate your account first!",
      //   });
      //   return;
      // }
      const resultLogin = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("status", status);
      localStorage.setItem("isAuth", isAuth);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);
      localStorage.setItem("idCustommer", idCustommer);
      localStorage.setItem("image", image);
      localStorage.setItem("createdAt", createdAt);

      dispatch({ type: Types.CUST_LOGIN, payload: resultLogin });
      Swal.fire(
        "Login Success!",
        "Welcome to Vehicle Rental !!",
        "success",
        router.push("/home")
      );
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: Types.CUST_LOGIN, payload: error?.response?.data?.message });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message || 'login error',
      });
    });
};

export const RegisterCustommer = (data, router) => (dispatch) => {
  axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/authcust/register`, data)
  .then((res) => {
    const result = res.data.data;
    dispatch({ type: Types.CUST_REGISTER, payload: result });
    Swal.fire(
      "Registration success!",
      "check your email for activation",
      "success"
      );
      router.push("/auth_user/")
  })
  .catch((error)=>{
    dispatch({type: Types.CUST_REGISTER, payload: error.response.data.error.message})
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.error.message,
    })
  })
};

export const updateProfile = (data, idCustommer) => (dispatch) =>{
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('display_name', data.display_name)
  formData.append('address', data.address)
  formData.append('phone_number', data.phone_number)
  formData.append('gender', data.gender)
  formData.append('datebirth', data.datebirth)
  formData.append('image', data.image)

  axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${idCustommer}`, formData)
  .then((res)=>{
    const ResultData = res.data.data
    dispatch({type: Types.UPDATE_CUSTOMMER, payload: ResultData})
    Swal.fire(
      'Update Success',
      'update profile success',
      'success'
    )   
  })
  .catch((err)=>{
    console.log(err);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err.response?.data?.message,
    })
  })
}
