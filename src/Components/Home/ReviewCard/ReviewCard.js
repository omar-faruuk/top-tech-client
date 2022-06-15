import React from 'react';
import reviewIcon from "../../../image/review.png";
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const { image, description, name } = review
    return (
        <div style={{ width: "21rem", height: "23rem" }} className="mb-5 card text-center p-2 shadow">
            <div className='img'>
                <img style={{ height: "120px", width: "120px", objectFit: "cover", borderRadius: "50%" }} className='' src={image} alt="" />
            </div>
            <div className="card-body">
                <img style={{ height: "20px", width: "20px", objectFit: "cover" }} src={reviewIcon} alt="" />
                <div className="card-text">
                    <p className='text-secondary text-center'>{description.slice(0, 80)}</p>
                </div>
                <h5>{name}</h5>
                <h4 className='text-danger'>Web developer</h4>
            </div>
        </div>
    );
};

export default ReviewCard;