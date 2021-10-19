import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = (props) => {

let {key} = useParams()
    return (
        <div>
            <h2>This is service details</h2>
            <h1>{key}</h1>

            
        </div>
    );
};

export default ServiceDetails;