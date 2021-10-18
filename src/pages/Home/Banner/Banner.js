import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'
import bannerImg from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='bg-liner'>
            <div className='container mt-5 d-lg-flex'>
            <div className='me-md-5'>
                <h5 className='text-success pt-3'>Why is Disha so Special!!!</h5>
                <h1 className='fw-bolder m5-3'>Book Online For Doctor's Appointment</h1>
                <p className='custom-shadow mt-5'>State of the art technology and expertise combined with the support of our friendly staff, we strive each day to be the top healthcare provider, not only in Bangladesh but within the Asia-Pacific region.</p>
                <Button className='custom-button mt-3 mb-2' variant='warning rounded-pill'>Get Started</Button>
            </div>
            <div className='ms-md-auto '>
                <img className='img-fluid' src={bannerImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;