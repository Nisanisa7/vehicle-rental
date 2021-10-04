import axios from "axios";
import Swal from "sweetalert2";
import * as Types from "../types";

export const LoginCust = (data, router) => (dispatch) => {
  console.log(data);
  axios
    .post("http://localhost:4000/v1/authcust/login", data, {
      withCredentials: true,
    })
    .then((res) => {
      const isAuth = true;
      const status = res.data.data.status;
      const role = res.data.data.role;
      const image = res.data.data.image;

      if (status === "inactive") {
        Swal.fire({
          icon: "error",
          title: "Boo Boo",
          text: "Please activate your account first!",
        });
        return;
      }
      const resultLogin = res.data.data;
      console.log(resultLogin);
      localStorage.setItem("status", status);
      localStorage.setItem("isAuth", isAuth);
      localStorage.setItem("role", role);
      localStorage.setItem("image", image);

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
      dispatch({ type: Types.CUST_LOGIN, payload: error?.response?.message });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.error.message,
      });
    });
};

export const RegisterCustommer = (data, router) => (dispatch) => {
  axios.post("http://localhost:4000/v1/authcust/register", data)
  .then((res) => {
    const result = res.data.data;
    console.log(result);
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
