import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import {  useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return 
    }
    return (
        <div>
         
            
            <div className='my-6 w-100 xl:w-80 md:w-80 lg:w-80'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;