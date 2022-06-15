import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import toast, { Toaster } from 'react-hot-toast';
import MyLoader from '../../Home/MyLoader/MyLoader';


const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('https://salty-bastion-98802.herokuapp.com/orders')
            .then(res => {
                setOrders(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])
    // const {selectedService, logedInUser, paymentDetails} = orders;
    const handleStatusChange = (id, status) => {

        console.log(id, status);
        let updateStatus = []
        orders.forEach(order => {
            if (order._id === id) {
                order.status = status
                updateStatus.push(order)
            }
            setOrders(updateStatus)
            const modifiedStatus = { id, status }

            axios.patch('https://salty-bastion-98802.herokuapp.com/updateOrderStatus', modifiedStatus)
                .then(res => {
                    res.data && toast.success(`Set to ${status}`)
                    window.location.reload()
                })
                .catch(error => toast.error(error.message));

        })
    }
    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>

                </div>
                {/* <Toaster /> */}
                <div className="col-md-8 mt-5">
                    <h4 className='mt-5 mt-md-4 pt-4 pt-md-0'>Order list</h4>

                    <div className="table-responsive">
                        <table className='table bg-white'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th scope='col'>Payment with</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {isLoading ? <MyLoader /> : orders.map(order => <tbody key={order._id}>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.service.title}</td>
                                    <td>credit card</td>
                                    <td><select
                                        className={order.status === "Pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                        defaultValue={order.status}
                                        onChange={e => handleStatusChange(order._id, e.target.value)}>
                                        <option className="bg-white text-muted">Pending</option>
                                        <option className="bg-white text-muted">On going</option>
                                        <option className="bg-white text-muted">Done</option>
                                    </select></td>
                                </tr>
                            </tbody>)}

                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;