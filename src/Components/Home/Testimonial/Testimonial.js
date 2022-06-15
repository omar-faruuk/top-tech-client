import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay } from 'swiper';
import './Testimonial.css'
import { AnimationWrapper } from 'react-hover-animation'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import ReviewCard from '../ReviewCard/ReviewCard';
import MyLoader from '../MyLoader/MyLoader';
import { Zoom } from 'react-reveal';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://salty-bastion-98802.herokuapp.com/reviews')
            .then(res => {
                setReviews(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <section className='mt-md-5 pb-md-5'>
            <div className="container testimonial">
                <h4 className='text-danger'>Our testimonial</h4>
                <h1 className="fs-0">What Our Client Said</h1>
                <div className="mt-5 justify-content-between">
                    <Swiper
                        modules={[Navigation, Autoplay, Virtual, Pagination]}
                        navigation
                        // autoplay={{ delay: 3000, }}
                        pagination={{ clickable: true }}
                        loop={true}
                        // autoplayDisableOnInteraction={true}
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
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <AnimationWrapper>
                                    <Zoom>
                                        <ReviewCard review={review}></ReviewCard>
                                    </Zoom>
                                </AnimationWrapper>

                            </SwiperSlide>)
                        }

                    </Swiper>

                </div>
            </div>

        </section>

    );
};

export default Testimonial;