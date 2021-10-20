import React from 'react';
import Section from '../Section/Section';

const sectionsPic = [
    {name:'Psychological', description:'We have differenbt therepy section with higly experienced therpist', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmVUYPyuws-9G5TXEas_hBIecMSZAJT6N3TxY-QRACF4r71KUXGR-U9FFLspdc3JU9og&usqp=CAU' },
    {name:'Cardiology', description:'All the latest cardilogy operation teachnology is available now', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_mXWxPfCi_yfYDAg6qHw4iBTUUjwvRr9ZkbHiQUqs1RIBQ0Ov-2Z5Zt_mxBH_wLQAks&usqp=CAU" },
    {name:'Gynecology', description:'We have full dedicated unit for mother care during preagnency ', img:'https://www.yourchanakya.com/wp-content/uploads/2019/11/images-1.jpg' },
    {name:'Pediatrician', description:'We have expart pediatricians from renewoed coutnries', img:'https://tallypress.com/wp-content/uploads/2018/09/top-10-child-specialist-clinics-in-kl-selangor.jpg' },
    {name:'Neurology', description:'Coplex nero surgry is possible in Bangladesh, contact us to know details', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7p69syGuVpmzTQKSF9Zlb0aIUYb-dN40MthGnuvd-OdM9-7xCk4WysTWSxz5TX-nBTro&usqp=CAU' }
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