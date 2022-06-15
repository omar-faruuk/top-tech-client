import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import fileICon from '../../../image/fileIcon.png';
import axios from 'axios';
import { ErrorMessage } from '@hookform/error-message';
import swal from 'sweetalert';
import { useState } from 'react';
import './AddService.css'

const AddService = ({ updateService, setUpdateService }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setIsLoading(false)
        if (!updateService && !data.image[0]) {
            return swal('Please upload an image!');
        }
        // const loading = toast.loading('Uploading...Please wait!');
        // let imageURL = updateService ? updateService.image : "";
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('image', !updateService || (updateService && data.image[0]) ? data.image[0] : updateService.image);
        formData.append('des', data.description);
        formData.append('price', data.price);

        if (!updateService) {
            axios.post('https://salty-bastion-98802.herokuapp.com/addservice', formData)
                .then(res => {
                    if (res.data === true) {
                        swal({
                            title: 'service added seccesfully',
                            icon: "success",
                            button: "ok"
                        })
                        reset()
                        setIsLoading(true)
                    }
                })
                .catch(err => swal({
                    title: 'Something wrong!',
                    icon: "warning",
                    button: "ok"
                }))
        } else {
            axios.patch(`https://salty-bastion-98802.herokuapp.com/updateService/${updateService._id}`, formData)
                .then(res => {
                    console.log(res.data);
                    if (res.data) {
                        reset()
                        setUpdateService({})
                    }
                })
        }





        // const updateInfo = {
        //     title: data.title,
        //     des: data.description,
        //     price: data.price,
        //     image: imageURL
        // }

        //     .catch(err => console.log(err))

    };

    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 add-service-content">
                    {updateService ? <h4>update service</h4> : <h4 className=''>Add service</h4>}
                    <form className='row g-3 bg-white mt-3 rounded-4 p-md-3 p-2' onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 mb-md-3 mb-0">
                            <input defaultValue={updateService && updateService.title} placeholder='title' className='form-control p-2' {...register("title")} />
                        </div>
                        <div className="col-md-6 w-md-25 w-50">
                            <label className='d-flex border' htmlFor="file-upload">
                                <img style={{ height: "2.5rem", width: "3rem" }} className='img-fluid me-2' src={fileICon} alt="" />
                                <span className='align-self-center'>Upload image</span>
                            </label>
                            <input id='file-upload' className='form-control d-none' type="file" {...register("image")} />
                            <ErrorMessage errors={errors} name="image" />
                        </div>
                        <div className="col-md-6 mb-md-3 mb-0">
                            <input defaultValue={updateService && updateService.price} placeholder='price:$' className='form-control p-2' {...register("price")} />
                            <ErrorMessage errors={errors} name="price" />
                        </div>
                        <div className="col-md-12 mb-md-3 mb-0">
                            <textarea defaultValue={updateService && updateService.des} rows="4" placeholder='Write description...' className='form-control' {...register("description")} />
                        </div>
                        {/* {errors.image && <span>This field is required</span>} */}

                        {updateService ? <button type='submit' className="btn-brand w-100">update</button> :
                            <button type='submit' className="btn-brand w-100">Send</button>}

                    </form>
                    {!isLoading && <div class="spinner-border text-primary d-block mx-auto" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>}
                </div>

            </div>

        </section>
    );
};

export default AddService;