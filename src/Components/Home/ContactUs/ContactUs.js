import { faCoffee, faLocation, faMailBulk, faMap, faMapLocation, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactUs.css';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const ContactUs = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.message && data.email) {
            swal({
                title: "Thank you for getting in touch!",
                text: `We appreciate you contacting us/ ${data.company}. One of our colleagues will get back in touch with you soon!Have a great day!`,
                icon: "success",
                button: "ok",
            });
            reset()
        }
        console.log(data);
    }
    return (
        <section className='mt-5 pb-5' id='contact-us'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6">
                        <h5 className='text-danger text-md-start text-center'>Let's contact us</h5>
                        <h1 className="fs-0 text-md-start text-center">Ready to Get Started?</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="row g-3 mt-4">
                            <div className="col-md-6 mb-md-3">
                                <input placeholder='Name' type="text" className="form-control p-2" {...register("name")} />
                            </div>
                            <div className="col-md-6 mb-md-3">
                                <input placeholder='Email' type="email" className="form-control p-2" {...register("email")} />
                            </div>
                            <div className="col-12 mb-md-3">
                                <input placeholder='Company name' type="text" className='form-control p-2' {...register("company")} />
                            </div>
                            <div className="col-12">
                                <textarea placeholder='send message' className='form-control' name="" id="" {...register("message")} rows="5"></textarea>
                            </div>

                            <button type='submit' className="btn-brand">Get start</button>
                        </form>

                    </div>
                    <div className="col-md-6 fs-5 lh-md-lg lh-sm ">
                        <h1 className='mt-md-5'>Quick connect</h1>
                        <p className="text-secondary mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting is the orem Ipsum has been the industry's standard dummy text ever sincethe 1500s</p>

                        <p className="text-secondary mb-3"><FontAwesomeIcon className='me-2' icon={faMapMarker} />60, 29th Street, San Francisco, CA 94110 Union Centre, United States of America</p>
                        <p className='text-secondary mb-3'><FontAwesomeIcon icon={faPhone} /> 0261-12345</p>
                        <p className='text-secondary'><FontAwesomeIcon icon={faMailBulk} /> demo@demo.com</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;