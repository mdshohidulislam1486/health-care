import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container mt-5'>
           <div >
               <h5 className='text-success'>Why is Disha so Special!!!</h5>
               <h1 className='fw-bolder'>Book Online For Doctor's Appointment</h1>
               <p className='custom-shdow'>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
               <Button className='custom-button' variant='warning rounded-pill'>Get Started</Button>
           </div>
           <div>
               <img src="" alt="" />
           </div>
        </div>
    );
};

export default Banner;