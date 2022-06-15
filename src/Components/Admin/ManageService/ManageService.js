import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import AddService from './../AddService/AddService';
import MyLoader from '../../Home/MyLoader/MyLoader';
import swal from 'sweetalert';
import './ManageService.css'

const ManageService = () => {
    const [services, setServices] = useState([])
    const [isAdmin, setIsAdmin] = useState(true)
    const [updateService, setUpdateService] = useState({})
    useEffect(() => {
        axios.get('https://salty-bastion-98802.herokuapp.com/services')
            .then(res => {
                setServices(res.data)
                setIsAdmin(false)
            })
            .catch(err => console.log(err))
    }, [updateService])

    const handleUpdate = (e, service) => {
        e.target.parentNode.parentNode.parentNode.innerHTML = "";
        setUpdateService(service)
    }
    const handleDelete = (event, id) => {
        console.log(event.target.parentNode.parentNode.parentNode);
        axios.delete(`https://salty-bastion-98802.herokuapp.com/deleteServices/${id}`)
            .then(res => {
                if (res.data) {
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        });
                    event.target.parentNode.parentNode.parentNode.style.display = "none"
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>

                </div>
                {updateService._id ? <AddService updateService={updateService} setUpdateService={setUpdateService} /> : <div className="col-md-8 service-list">
                    <h4>Service list</h4>

                    <div className="table-responsive">
                        <table className='table  bg-white '>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            {isAdmin ? <MyLoader /> : services.map(service => <tbody className='' key={service._id}>
                                <tr>
                                    <td>{service.title}</td>
                                    <td>{service.des.slice(0, 60)}</td>
                                    <td>${service.price}</td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <button onClick={(event) => handleUpdate(event, service)} className="btn-outline-info border-1 d-flex gap-2 align-items-center">
                                                <FontAwesomeIcon icon={faEdit} />edit</button>
                                            <button onClick={(e) => handleDelete(e, service._id)} className="btn-outline-danger border-1 d-flex gap-2 align-items-center">
                                                <FontAwesomeIcon icon={faDeleteLeft} />delete</button>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>)}

                        </table>
                    </div>
                </div>}

            </div>
        </section>
    );
};

export default ManageService;