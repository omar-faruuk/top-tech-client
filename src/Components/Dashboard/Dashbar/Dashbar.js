import { faBagShopping, faList, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashbar = () => {
    return (
        <nav id='sidebar' className='pt-2'>
            <ul>
                <li>
                    <NavLink to="/dashboard/book">
                        <FontAwesomeIcon icon={faBagShopping} />
                        Book
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/booking">
                        <FontAwesomeIcon icon={faList} />
                        Booking list
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/review">
                        <FontAwesomeIcon icon={faNotesMedical} />
                        Review
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Dashbar;