import React from 'react';
import { Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const OurService = ({ourService}) => {
    const {name, description, img} = ourService;
    
    return (
                <div className='col-12 col-md-4 custom-shadow '>
                <div className='m-3'>
                    <div className='row'><img className='img-fluid col-12' src={img} alt="" /></div>
                    <h5>{name}</h5>
                    <p>{description.slice(0,250)}</p>
                    <NavLink to={`/serviceDetails/${ourService.key}`}>
                    <Button >Read more..</Button>
                    </NavLink>
                </div>
                </div>
    );
};

export default OurService;