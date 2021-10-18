import React from 'react';
import psycho from '../../../images/section/psycho.jpg'
import gyno from '../../../images/section/gynocology.jpg'
import peditri from '../../../images/section/peditrician.png'
import cardio from '../../../images/section/cardio.jpg'
import Section from '../Section/Section';

const sectionsPic = [
    {name:'Psychological', description:'Aenean facilisis sodales est neciMorbi vitapurus on convallis commodo velante', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmVUYPyuws-9G5TXEas_hBIecMSZAJT6N3TxY-QRACF4r71KUXGR-U9FFLspdc3JU9og&usqp=CAU' },
    {name:'Cardiology', description:'Aenean facilisis sodales est neciMorbi vitapurus on convallis commodo velante', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_mXWxPfCi_yfYDAg6qHw4iBTUUjwvRr9ZkbHiQUqs1RIBQ0Ov-2Z5Zt_mxBH_wLQAks&usqp=CAU" },
    {name:'Gynecology', description:'Aenean facilisis sodales est neciMorbi vitapurus on convallis commodo velante', img:'https://www.yourchanakya.com/wp-content/uploads/2019/11/images-1.jpg' },
    {name:'Pediatrician', description:'Aenean facilisis sodales est neciMorbi vitapurus on convallis commodo velante', img:'https://tallypress.com/wp-content/uploads/2018/09/top-10-child-specialist-clinics-in-kl-selangor.jpg' },
    {name:'Neurology', description:'Aenean facilisis sodales est neciMorbi vitapurus on convallis commodo velante', img:'https://lh3.googleusercontent.com/proxy/ZesZ3TO_Vrr9qtIO19ME6wx7OtJwG351uyW11sY-Y7hLatFU-e-hdXt2TVa-vuzFianUmAq2R6xx1ukqRLdOBL9xq9OEPDDKS9-a9-ZACRc-NOgcN8mmHUvM3pNFjqY8Xt4' }
]


const Sections = () => {

    return (
            <div className='container  my-5'>
                <div className='row text-center gy-3 justify-content-center'>
                {
                    sectionsPic.map(sectionPic =><Section key={sectionPic.name} sectionPic={sectionPic}></Section>)
                }
                </div>
            </div>
    );
};

export default Sections;