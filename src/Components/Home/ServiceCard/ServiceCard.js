import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { userContex } from '../../../App';



const ServiceCard = ({ service }) => {
    const { title, des, image, price } = service;
    const { selected } = useContext(userContex);
    const [selectedService, setSelectedService] = selected
    const handleOrder = (service) => {
        setSelectedService(service)
    }
    return (
        <div style={{ width: "20rem" }} className="card mb-5">
            <img style={{ height: "220px", width: "100%", objectFit: "cover" }} src={`data:image/jpeg;base64,${image}`} className="card-img-top img-fluid hover-zoom" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{des.slice(0, 50)}</p>
                <div className="card-footer  d-flex align-items-center justify-content-between">
                    <Link to={"/dashboard/book"}>
                        <button onClick={() => handleOrder(service)} className="btn-brand">Get a service</button>
                    </Link>
                    <p><small className='text-secondary mt-1'>Starting at</small> ${price}</p>
                </div>
            </div>
        </div>



    );
};

export default ServiceCard;