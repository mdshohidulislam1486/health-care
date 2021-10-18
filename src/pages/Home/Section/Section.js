import React from 'react';
import './Section.css'

const Section = ({sectionPic}) => {
    const {name, img, description} = sectionPic
    return (

            <div className='col-12 col-md-6 mx-2 col-lg-3 custom-shadow'>
                <div className='section-img mx-auto'><img className='img-fluid' src={img} alt="" /></div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        
    );
};

export default Section;