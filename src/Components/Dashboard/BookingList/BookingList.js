import React, { useContext, useEffect, useState } from 'react';
import Dashbar from '../Dashbar/Dashbar';
import axios from 'axios';
import { userContex } from '../../../App';
import MyLoader from '../../Home/MyLoader/MyLoader';

const BookingList = () => {
    const [booking, setBooking] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { login } = useContext(userContex)
    const [logedInUser] = login
    
    useEffect(() => {
        axios.get('https://salty-bastion-98802.herokuapp.com/orders?email=' + sessionStorage.getItem('email'))
            .then(res => {
                setBooking(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [logedInUser.email])
    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row">
                <div className="col-md-2">
                    <Dashbar></Dashbar>
                </div>
                <div className="col-md-10 p-5">
                    <div className="row gap-2 dash-content">
                        {isLoading ? <MyLoader /> : booking.map(Book => <div key={Book._id} className='card  col-md-5'>
                            <div className="card-body">
                                <div className='d-flex justify-content-between align-items-ceneter'>
                                    <h4 className="card-title ">{Book.service.title}</h4>
                                    <h5 className={Book.status === "Done" ? "bg-success" : "bg-danger"}>{!Book.status ? "Pending" : Book.status}</h5>
                                </div>

                                <p className="card-text mt-2">{Book.service.des}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BookingList;