import React, { useEffect, useState } from 'react';
import './Service.css'
import axios from 'axios';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay } from 'swiper';
import ContentLoader, { Facebook, Instagram } from 'react-content-loader'
import { AnimationWrapper } from 'react-hover-animation'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MyLoader from '../MyLoader/MyLoader';
import Zoom from 'react-reveal/Zoom';


const Service = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://salty-bastion-98802.herokuapp.com/services')
            .then(res => {
                setServices(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <section className="pt-md-5 pt-0" id='service'>
            <div className="container text-center">
                <h4 className="text-danger">Our best services</h4>
                <h1 className='fs-0 fw-bold'>We're ready to share our <br /> advice and experience.</h1>
                <div className="mt-5">

                    <Swiper
                        modules={[Navigation, Autoplay, Virtual, Pagination]}
                        navigation
                        autoplay={{ delay: 8000, }}
                        pagination={{ clickable: true }}
                        loop={true}
                        // autoplayDisableOnInteraction ={true}
                        slidesPerView={3}
                        onSwiper={(swiper) => {}}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}

                        className="mySwiper"
                    >

                        {isLoading ? <MyLoader /> :
                            services.map(service => <SwiperSlide key={service._id}>
                                <AnimationWrapper>
                                    <Zoom>
                                        <ServiceCard service={service}></ServiceCard>
                                    </Zoom>
                                </AnimationWrapper>

                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>

        </section >
    );
};

export default Service;