import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SingleCard from '../singleCard/SingleCard';

const myCards = [
    {
        name: 'Nurse Practitioner (NP) Program', description:'Delivery of comprehensive health care in the comfort of your own home.'
    },
    {
        name: 'Around The Clock Care', description:'All the care and support you need, in the home you love.'
    },
    {
        name: 'Nursing', description:'Our experienced nurses deliver the highest quality of care.'
    },
    {
        name: 'Serious Injury Care', description:'Home Care Assistance for your speedy recovery.'
    },
    {
        name: 'Care after Surgery or Hospitalization', description:'By your side, providing peace of mind and care.'
    },
    {
        name: 'Therapy & Rehab Services', description:'Therapy and Rehab Services at home or in the community.'
    },
    {
        name: 'End-of-Life / Palliative Care', description:'Care and support for patients and families dealing with life-threatening illness.'
    },
    {
        name: 'Wound Care', description:'High-quality wound care expertise and hands-on care wherever you need it.'
    }
]


const ServiceDetails = () => {


let {key} = useParams()
const [serviceDetail, setServiceDetails] = useState();
const [singleServiceDetails , setSingleServiceDetails] = useState({});
useEffect(()=>{
    fetch('/ourServices.json')
    .then(res => res.json())
    .then(data => setServiceDetails(data.ourService))
},[])

useEffect(()=>{
   const singleServiceDetails =  serviceDetail?.find(singleService => singleService.key === key )
   setSingleServiceDetails(singleServiceDetails)
},[serviceDetail])


    return (
        <div className='d-flex justify-content-center'>
            <div className='row container'>
            <div className='d-flex flex-column  mt-3 col-12 col-md-8'>
                <div><img className='img-fluid' src={singleServiceDetails?.img} alt="" /></div>
                <h2>{singleServiceDetails?.name}</h2>
                <p>{singleServiceDetails?.description}</p>
            </div>
            <div className='col-12 row gy-3 justify-content-center'>
                {
                   myCards.map(card=><SingleCard key={card.name} card={card}></SingleCard>)
                }
                
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;