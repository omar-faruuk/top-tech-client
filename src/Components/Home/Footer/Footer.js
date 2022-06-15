import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import insignt from '../../../image/analysis.png';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row g-4 justify-content-between">
                    <div className="col-md-4">
                        <div className='d-flex mb-4'>
                            <img className='me-2' style={{ height: "30px" }} src={insignt} alt="" />
                            <div className='d-flex flex-column'>
                                <h2 className='mb-0 text-white'>TOP-TECH</h2>
                                <small className='text-danger me-1 fs-5'>It solution</small>
                            </div>
                        </div>
                        <p className='lh-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div className="col-md-2">
                        <h3 className='mb-4 text-white'>Useful Links</h3>
                        <ul className='d-flex flex-md-column lh-lg text-center text-md-start'>
                            <li><a href="/">About</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">Latest news</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Story</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h3 className='mb-4 text-white'>Services</h3>
                        <ul className='lh-lg text-center text-md-start'>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Help</a></li>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Terms and use</a></li>
                            <li><a href="">Suppurt</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 social">
                        <h3 className='mb-4 text-white'>Follow us</h3>
                        <p className='lh-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <ul className='d-flex mt-4 text-center text-md-start justify-content-center'>
                            <li><a href="https://www.facebook.com/mohammad.omarfaruq.315"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                            <li><a href="">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            </li>
                            <li><a href="">
                                <FontAwesomeIcon icon={faGoogle} /></a></li>
                            <li><a href="">
                                <FontAwesomeIcon icon={faTwitter} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-danger text-center p-2 mt-5'>
                <p>Copyright © 2022 . All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;