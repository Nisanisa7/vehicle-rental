import axios from "axios";
import Swal from "sweetalert2";
import * as Types from "../types";
import cookies from 'next-cookies'
export const AdminLogin = (data, router) => (dispatch) => {
    axios
      .post(`https://vehicle-rental-omega.vercel.app/api/adminlogin`, data, {
        withCredentials: true,
      })
      .then((res) => {
        const isAuth = true;
        const status = res.data.data.status;
        const email = res.data.data.email;
        const role = res.data.data.role;
        const idAdmin = res.data.data.idAdmin;
        const address = res.data.data.address;
        const display_name = res.data.data.display_name;
        const gender = res.data.data.gender;
        const datebirth = res.data.data.datebirth;
        const name = res.data.data.name;
        const phone_number = res.data.data.phone_number;
        const image = res.data.data.image;
        const token = res.data.data.token;
        const createdAt = res.data.data.createdAt;
  
        if (status === "inactive") {
          Swal.fire({
            icon: "error",
            title: "Boo Boo",
            text: "Please activate your account first!",
          });
          return;
        }
        const resultLogin = res.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("status", status);
        localStorage.setItem("email", email);
        localStorage.setItem("isAuth", isAuth);
        localStorage.setItem("role", role);
        localStorage.setItem("idAdmin", idAdmin);
        localStorage.setItem("address", address);
        localStorage.setItem("display_name", display_name);
        localStorage.setItem("gender", gender);
        localStorage.setItem("datebirth", datebirth);
        localStorage.setItem("name", name);
        localStorage.setItem("phone_number", phone_number);
        localStorage.setItem("image", image);
        localStorage.setItem("createdAt", createdAt);
  
        dispatch({ type: 'LOGIN', payload: resultLogin });
        Swal.fire(
          "Login Success!",
          "Welcome to Vehicle Rental !!",
          "success",
          );
          router.push("/adminPage/homeAfterLogin")
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'LOGIN', payload: error.response.data.error.message });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.error.message || 'login error',
        });
      });
  };

  export const RegisterAdmin = (data, router) => (dispatch) => {
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/authadmin/register`, data)
    .then((res) => {
      const result = res.data.data;
      dispatch({ type: Types.ADMIN_REGISTER, payload: result });
      Swal.fire(
        "Registration success!",
        "check your email for activation",
        "success"
        );
        router.push("/auth_admin/")
    })
    .catch((error)=>{
      dispatch({type: Types.ADMIN_REGISTER, payload: error.response.data.error.message})
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error.message,
      })
    })
  };
  