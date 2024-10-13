import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkout from '../Checkout/Checkout';

const Payment = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_Payment_Api_Key)

    return (
        <div>
<div>
<h2 className="">Please pay</h2>
</div>

<Elements stripe={stripePromise}>

<Checkout></Checkout>

</Elements>



    </div>
    );
};

export default Payment;