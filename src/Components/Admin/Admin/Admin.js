import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css'

const Admin = () => {
    return (
        <section id='admin' className='container-fluid bg-light'>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

            </div>
        </section>
    );
};

export default Admin;