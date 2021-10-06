import axios from "axios";
import router from "next/router";
import Swal from "sweetalert2";

export const addOrder = (data, totalPrice, date, day) => async (dispatch, getState)=>{
    const cartData = {...data, totalPrice:totalPrice, date, day: day}
    dispatch({type: 'ADD_ORDER', payload:cartData});
}

export const inputBook = (idCustommer, vehicle_name, totalprice, amount, rentalDay, image, reservationDate, payment, router) =>(dispatch, getState)=>{
    const dataBook = {
        idCustommer, 
        vehicle_name,
        totalprice, 
        amount, 
        rentalDay, 
        image, 
        reservationDate, 
        payment
    }
    axios.post(`http://localhost:4000/v1/order`, dataBook)
    .then((result)=>{
        const resultBook = result.data.data;
        console.log(resultBook, "action order");
        dispatch({ type: "INPUT_ORDER", payload: resultBook });
        localStorage.setItem("Order", resultBook.idOrder);
        localStorage.removeItem(
          "Cart",
          JSON.stringify(getState().cartItem.cart)
        );
        Swal.fire(
            "Booking Succes",
            "Please wait for seller confirmation",
            "success"
          );
          router.push('/home')
    })
    .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.message,
        });
      });
}