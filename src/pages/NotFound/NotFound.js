import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './NotFound.css'

const NotFound = () => {
    return (
        <div className='  set-bg d-flex align-items-center justify-content-center  '>
         <div className=''>
             <NavLink to='/home'>
             <Button  variant='success'>Gp home</Button>
             </NavLink>
         </div>
        </div>
    );
};

export default NotFound;