import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OurService from '../OurService/OurService';

const Services = () => {
    const [ourServices, setOurServices] = useState([])
    useEffect(()=>{
        fetch('ourServices.json')
        .then(res => res.json())
        .then(data => setOurServices(data.ourService))
    },[])
    

  
    return (
        <div className='container'>
            <h2 className='text-center text-success'>All you need to know !</h2>
            <div className='row gy-3 gx-2'>
                {
                    ourServices.map(ourService =><OurService
                        key={ourService.key}
                        ourService={ourService} ></OurService>)
                }
            </div>
        </div>
    );
};

export default Services;