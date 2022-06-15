import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HeaderMain = () => {
    return (
        <section className="h-100 container text-white d-flex align-items-center" id='header-main'>
            <div className="row">
                <div className="col-md-6 overflow-hidden header-text">
                    <h4 className='mb-3 text-danger'>Best IT Solution Agency</h4>
                    <h1 className='mb-4'>Best IT Solution Agency For Your Business</h1>
                    <p className='mb-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown took a galley of type and scrambled..</p>
                    <HashLink smooth to="#service"> <button className="btn-brand">Our service</button></HashLink>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;