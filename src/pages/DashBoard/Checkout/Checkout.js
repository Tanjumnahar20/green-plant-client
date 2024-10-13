import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useCartItem from '../../../CustomHooks/useCartItem';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxios from '../../../CustomHooks/useAxios';

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState();
    const [cart, refetch] = useCartItem();
    const axiosSecure = useAxios();
    const navigate = useNavigate()
    const {user} = useAuth();
    const [ clientSecret, setClientSecret] = useState('');
    const [ transactionId, setTransactionId] = useState();
    
    const totalPrice = cart.reduce((total,item)=>(total+item.price),0)
  
    useEffect(()=>{
      if(totalPrice>0){
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then(res=>{
         console.log(res.data.clientSecret);
         setClientSecret(res.data.clientSecret)
      } )
      }
  
    },[ axiosSecure,totalPrice])
       
      const handleSubmit = async(e)=>{
          e.preventDefault();
           if(!stripe || !elements){
              return;
           }
  
           const card = elements.getElement(CardElement);
           if (card == null) {
              return;
            }
  
            const {error, paymentMethod} = await stripe.createPaymentMethod({
              type: 'card',
              card
            })
  
            if(error){
              console.log('error in payment ', error);
              setError(error.message)
            }
  
            else{
              console.log('payment method creating', paymentMethod);
              setError('')
            }
  
            // payment confirm
             const { paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
              payment_method:{
                card: card,
                billing_details:{
                  email: user?.email || 'not signed in',
                  name: user?.displayName || 'anonymous'
                }
              }
             })
             if(confirmError){
              console.log('error in payment intent', confirmError);
             }
  
             else{
               console.log('payment intent', paymentIntent);
  
              if(paymentIntent.status ==='succeeded'){
                  setTransactionId(paymentIntent.id)
  
                  // save payment info to the database
                  const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartId : cart.map(item=>item._id),
                    menuItemId:cart.map(item=>item.menuId) ,
                    status: 'paid'
                  }

                  console.log("payment cart", payment);
  
                  const res = await axiosSecure.post('/payment', payment)
                  const dataId = res?.data?.paymentResult?.insertedId;
                  console.log( 'saved payment info', dataId);
                  if(dataId){
                    refetch();
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Paid successfully!",
                      showConfirmButton: false,
                      timer: 1500
                    });
  
                    // navigate('/paymentHistory')
                    
                  }
                
  
              }
  
             }
  
      }
    return (
        <div className="mx-6 my-6">
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       <button className="my-6" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="">{error}</p>
      {transactionId && <p className="">your transaction id is:{transactionId}</p>}
            </form>
        </div>
    );
};

export default Checkout;