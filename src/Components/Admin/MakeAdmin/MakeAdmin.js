import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';
import './MakeAdmin.css'


const MakeAdmin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://salty-bastion-98802.herokuapp.com/admin', data)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    swal({
                        title: 'seccesfully added an admin!',
                        icon: "success",
                        button: "ok"
                    });
                    reset()
                }
            })
            .catch(err => swal("Something went wrong!"))
    }
    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8  make-admin">
                    <h4>Make admin</h4>
                    <form className='row g-3 bg-white mt-3 rounded-4 p-3' onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 d-flex gap-2">
                            <input type="email" placeholder='Enter email' className='form-control' {...register('adminEmail')} />
                            <button className='btn-brand' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;