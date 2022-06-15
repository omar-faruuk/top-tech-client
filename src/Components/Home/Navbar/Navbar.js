import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userContex } from '../../../App';
import navIcon from '../../../image/analysis.png'
import './Navbar.css'
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, fas, faS } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            swal(
                {
                    title: "success sign out!",
                    icon: "success",
                    button: "ok"
                }
            )
            sessionStorage.clear()
            window.location.reload(false);
        }).catch((error) => {
            swal("Something wrong!")
        });
    }


    const { login } = useContext(userContex);
    const [logedInUser, setLogedInUser] = login;
    
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        axios.post('https://salty-bastion-98802.herokuapp.com/isAdmin', { email: sessionStorage.getItem('email') })
            .then(res => setIsAdmin(res.data))
    }, [logedInUser.email])
    return (
        <section>
            <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">

                    <NavLink to="/" ><img className='me-1' style={{ height: "30px", width: "30px" }} src={navIcon} alt="" /><span class="navbar-brand text-warning fs-3">TOP-TECH</span></NavLink>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav" >
                        <ul class="navbar-nav navlink ms-auto">
                            <li class="nav-item">
                                <HashLink smooth class="nav-link active" aria-current="page" to="/#top">Home</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink smooth class="nav-link active" to="/#about-us">About us</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} class="nav-link active" to="/#service">Services</HashLink>
                            </li>
                            {sessionStorage.getItem('email') &&
                                <li class="nav-item">
                                    <HashLink smooth class="nav-link active" to="/dashboard/booking">Dashboard</HashLink>
                                </li>}
                            <li class="nav-item">
                                <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} class="nav-link active" to="/#contact-us">Contact</HashLink>
                            </li>
                            {isAdmin &&
                                <li class="nav-item">
                                    <HashLink class="nav-link active" to="/admin">Admin</HashLink>
                                </li>}
                            <li class="nav-item">
                                {sessionStorage.getItem('image') && <img style={{ height: "40px", width: "40px", borderRadius: "50%" }} src={sessionStorage.getItem('image')} alt="" />}
                            </li>
                            <li>{!sessionStorage.getItem('email') ? <HashLink class="nav-link active" to="/login">Login</HashLink> : <HashLink onClick={() => handleSignOut()} class="nav-link active" to="/">log out <FontAwesomeIcon icon={faArrowAltCircleRight} /></HashLink>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    );
};

export default Navbar;