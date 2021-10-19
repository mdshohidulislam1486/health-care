import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ourSpecialist.css'

const OurSpecialist = (props) => {
    const {name, img, position, degree, workPlace} = props.singelSpecialist
    return (
        <>
            <div className='m-3 my-card text-center pb-3'>
                <div className=' w-100 doctor-img '><img className='rounded-circle img-fluid' src={img} alt="" /></div>
                <h6 className='fs-6'>{name}</h6>
                <p>{degree}</p>
                <p>{position}</p>
                <div><small>{workPlace}</small></div>
                <NavLink to='/contact'>
                <Button className='mt-2' variant='warning'>
                    Book an Appoinment
                </Button>
                </NavLink>
            </div>
        </>
    );
};

export default OurSpecialist;