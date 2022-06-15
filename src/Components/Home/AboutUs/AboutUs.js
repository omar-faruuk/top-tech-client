import React from 'react';
import bg1 from '../../../image/bg-2.jpg'
import bg2 from '../../../image/bg-3.jpg'
import research from '../../../image/target.png'
import consult from '../../../image/analysis.png'
import './AboutUs.css'


const AboutUs = () => {
    return (
        <section className='pt-md-5 pt-0 mb-5' id="about-us">
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <div className="img d-md-flex gap-4">
                            <div className='img-1  position-relative'>
                                <img className='me-4 rounded' style={{ height: "300px", width: "100%", objectFit: "cover" }} src={bg1} alt="" />
                                <div className="overlay-1"></div>
                            </div>
                            <div className='img-2  position-relative'>
                                <img className='rounded' style={{ height: "300px", width: "100%", objectFit: "cover" }} src={bg2} alt="" />
                                <div className="overlay-2"></div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5 text-center text-md-left mt-md-0 mt-3">
                        <h4 className="text-danger">About us</h4>
                        <h1 className='fs-1 fw-bold'>We help drive your business forward fast</h1>
                        <p className="text-secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </p>
                        <div className="mt-4 mb-3 research d-flex align-items-center">
                            <img className='me-4' style={{ height: "85px" }} src={research} alt="" />
                            <div className="text lh-base">
                                <h4>Research & Advisory</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, neque!
                                </p>
                            </div>
                        </div>
                        <div className="mb-4 consulting d-flex align-items-center">
                            <img className='me-4' style={{ height: "85px" }} src={consult} alt="" />
                            <div className="text">
                                <h4>Consulting & Insights</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, neque!
                                </p>
                            </div>
                        </div>
                        <button className="btn-brand">About more</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;