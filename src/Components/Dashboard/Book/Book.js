import React, { useContext } from 'react';
import { userContex } from '../../../App';
import Dashbar from '../Dashbar/Dashbar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Kr1v0IpKtf17HlKFwMjAgVpq8tgRXVab3zW3w6Yvn1FIDtn99eBdstIRK1bVSUDD8ShPDXragdy0Kb7A4DmaroW00GqlzcXo0');

const Book = () => {
    const [show, setShow] = useState(true);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


    }
    const { login, selected } = useContext(userContex);
    const [logedInUser] = login
    const [selectedService] = selected
    console.log(selectedService);
    toast('hello')
    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row">
                <div className="col-md-2">
                    <Dashbar></Dashbar>
                </div>
                <div className="col-md-8 p-5 dash-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="col-md-6 mb-2">
                            <label htmlFor="" className='fw-bold'>Name</label>
                            <input type="text" class="form-control bg-white" defaultValue={logedInUser.name} />
                        </div>
                        <div class="col-md-6 mb-2">
                            <label htmlFor="" className='fw-bold'>Email</label>
                            <input type="email" class="form-control" defaultValue={logedInUser.email} />
                        </div>
                        <div class="col-md-6 mb-2">
                            <label htmlFor="" className='fw-bold'>Service</label>
                            <input type="text" class="form-control" defaultValue={selectedService.title} />
                        </div>

                    </form>
                    <h4 className='mt-3'>Payment with</h4>
                    <Toaster />
                    <Elements stripe={stripePromise} >
                        <Checkout selectedService={selectedService} />
                    </Elements>
                    <p className='text-secondary'>Use this Card Number to test the payment
                        <br />
                        <b>4242 4242 4242 4242</b></p>
                </div>

            </div>
        </section>
    );
};

export default Book;