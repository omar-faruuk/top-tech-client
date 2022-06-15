import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { faAdd, faBagShopping, faEdit, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {

    return (
        <nav id='sidebar' className='pt-md-5 mt-md-2'>
            <ul className=''>
                <li>
                    <NavLink to="/admin/orderlist">
                        <FontAwesomeIcon icon={faBagShopping} />
                        Order list
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/addservice">
                        <FontAwesomeIcon icon={faPlus} />
                        Add services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/makeAdmin">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Make admin
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/manageService">
                        <FontAwesomeIcon icon={faEdit} />
                        Manage servie
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;