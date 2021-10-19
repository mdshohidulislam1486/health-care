import React, { useEffect, useState } from 'react';
import OurSpecialist from '../OurSpecialist/OurSpecialist';

const OurSpecialists = () => {
    const [ourSpecialists, setSpecialists] = useState([])

   useEffect(()=>{
       fetch('/ourSpecialists.json')
       .then(res => res.json())
       .then(data => setSpecialists(data))
   },[])
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {
             ourSpecialists?.map(singelSpecialist =><OurSpecialist
             key={singelSpecialist.key}
             singelSpecialist={singelSpecialist}
             >

             </OurSpecialist>)
            }
        </div>
    );
};

export default OurSpecialists;