import React from 'react';
import design from '../../../image/design.png'
import coding from '../../../image/coding.png'
import marketing from '../../../image/digital-marketing.png'
import Fade from 'react-reveal/Fade';
import { Flip } from 'react-reveal';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import { AnimationWrapper } from 'react-hover-animation'


const Features = () => {
    return (
        <section className='container mt-5 text-center'>
            <h4 className='text-danger'>Our features</h4>
            <h1 className='fs-md-0 fs-2'>Features we can help you with</h1>
            <div className="row  d-flex justify-content-around mt-md-5 mt-4">

                <Zoom effect="fadeInUp">

                    <div style={{ width: "20rem" }} className="col-md-3 card p-1 shadow-sm mb-md-0 mb-5">
                        <div className="card-body">
                            <div className="icon mb-4">
                                <img style={{ height: "50px" }} src={design} alt="" />
                            </div>
                            <div className="card-title">
                                <h4>Clean Design</h4>
                            </div>
                            <div className="card-text">
                                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, nihil. Placeat odit beatae mollitia saepe harum quasi natus incidunt voluptatum suscipit adipisci. Autem quidem, voluptas suscipit voluptatum neque illo !</p>
                            </div>
                        </div>
                    </div>

                </Zoom>


                <Zoom effect="fadeInUp">

                    <div style={{ width: "20rem" }} className="col-md-3  card p-1 shadow-sm rounded mb-md-0 mb-5">
                        <div className="card-body">
                            <div className="icon mb-4">
                                <img style={{ height: "50px" }} src={coding} alt="" />
                            </div>
                            <div className="card-title">
                                <h4>Web development</h4>
                            </div>
                            <div className="card-text">
                                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, nihil. Placeat odit beatae mollitia saepe harum quasi natus incidunt voluptatum suscipit adipisci. Autem quidem, voluptas suscipit voluptatum neque illo !</p>
                            </div>
                        </div>
                    </div>

                </Zoom>


                <Zoom effect="fadeInUp">

                    <div style={{ width: "20rem" }} className="col-md-3 card p-1 shadow-sm mb-md-0 mb-5">
                        <div className="card-body">
                            <div className="icon mb-4">
                                <img style={{ height: "50px" }} src={marketing} alt="" />
                            </div>
                            <div className="card-title">
                                <h4>Digital marketing</h4>
                            </div>
                            <div className="card-text">
                                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, nihil. Placeat odit beatae mollitia saepe harum quasi natus incidunt voluptatum suscipit adipisci. Autem quidem, voluptas suscipit voluptatum neque illo !</p>
                            </div>
                        </div>
                    </div>

                </Zoom>


            </div>
        </section>
    );
};

export default Features;