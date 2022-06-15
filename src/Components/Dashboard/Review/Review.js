import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContex } from '../../../App';
import Dashbar from '../Dashbar/Dashbar';
import swal from 'sweetalert';

const Review = () => {
    const { login } = useContext(userContex);
    const [logedInUser, setLogedInUser] = login
    // console.log(logedInUser);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...data }
        newData.image = logedInUser.image
        console.log(newData);
        axios.post('https://salty-bastion-98802.herokuapp.com/addReview', newData)
            .then(res => {
                if (res.data === true) {
                    reset()
                    swal({
                        title: "success!",
                        text: "Thanks for your feedback!",
                        icon: "success",
                        button: "ok"
                    })
                }
            })
            .catch(err => {
                console.log(err)
                swal({
                    title: "failed!",
                    text: "Something wrong!",
                    icon: "warning",
                    button: "ok"
                })
            })
    }
    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row h-100vh">
                <div className="col-md-2">
                    <Dashbar></Dashbar>
                </div>
                <div className="col-md-8 p-5">
                    <form className='row g-3 bg-white rounded-4 p-md-3 dash-content' onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 mb-md-3">
                            <input placeholder='Your name' className='form-control p-2' {...register("name")} />
                        </div>
                        <div className="col-md-6 mb-md-3">
                            <input placeholder="company's name" className='form-control p-2' {...register("company")} />
                        </div>
                        <div className="col-md-12 mb-md-3">
                            <textarea rows="4" placeholder='Write description...' className='form-control' {...register("description")} />
                        </div>
                        <button type='submit' className="btn-brand">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;