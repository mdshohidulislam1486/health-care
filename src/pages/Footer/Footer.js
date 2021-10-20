import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
     <div className='bg-success pt-3'>
        <div className='d-flex flex-column flex-sm-row justify-content-sm-around'>
            <div className='lh-1'>
                <h5>Contact us</h5>
                <p>Phone: 01343429882</p>
                <p>Email: disha@gmail.com</p>
            </div>
            <h4>Disha mediacal care</h4>
            <div className='lh-1'>
                <h5>Address</h5>
                <p>1 Gulshan Ave, Dhaka 1212</p>
                <p>Open: Saturday to thrusday</p>
            </div>
        </div>
        <div className='text-center'><small>© All rights reserved</small></div>
    </div>
    );
};

export default Footer;