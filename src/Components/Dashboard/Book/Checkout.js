import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useContext, useState } from "react";
import { userContex } from "../../../App";
// import "./Checkout.css";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Checkout({ selectedService }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useContext(userContex);
  const [logedInUser, setLogedInUser] = login
  const [paymentDetails, setPaymentDetails] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const pay = async () => {
    setIsLoading(true)
    setPaymentDetails(null)
    try {
      const response = await fetch("https://salty-bastion-98802.herokuapp.com/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedService })
      });
      const data = await response.json();
      const cardElement = elements.getElement(CardElement);
      const confirmPayment = await stripe.confirmCardPayment(
        data.clientSecret,
        { payment_method: { card: cardElement } }
      );

      const { paymentIntent } = confirmPayment;
      if (paymentIntent.status === "succeeded") {
        // alert(`Payment successful!`);
        cardElement.clear();
        console.log(paymentIntent);
        const paymentInfo = { ...paymentDetails }
        paymentInfo.amount = paymentIntent.amount
        paymentInfo.status = paymentIntent.status
        paymentInfo.method = paymentIntent.payment_method_types
        setPaymentDetails(paymentInfo)
        const service = { ...selectedService }
        service.status = ["pending", "done"]
        const orderDetails = { ...logedInUser, service, paymentDetails }
        if (paymentDetails) {
          axios.post('https://salty-bastion-98802.herokuapp.com/addOrder', orderDetails)
            .then(res => {
              console.log(res);
              if (res.data === true) {

                swal({
                  title: "Success!",
                  text: "Your payment was successful for this order!",
                  icon: "success",
                  button: "ok"
                });
                navigate("/dashboard/booking")


              }

            })
            .catch(err => console.log(err))
        }
      }
      else alert(`Payment failed!`);
    } catch (err) {
      console.error(err);
      setIsLoading(false)
      swal({
        title: "Hello!",
        text: "Unfortunately, the payment for this order has failed!",
        icon: "warning",
        button: "ok"
      })
    }
  };

  return (
    <div>
      <div className="checkout col-md-6 mt-4" >
        <CardElement />
        <button className="btn-success border-0 px-3 mt-3" onClick={pay}>Pay</button>
        {isLoading && !paymentDetails && <div class="spinner-border text-primary text-center mx-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>}
      </div>

    </div>
  );
}

export default Checkout;