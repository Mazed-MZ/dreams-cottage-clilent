import React, { useEffect } from 'react';
import fakeData from '../../Shared/FakeData/FakeData.json';
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cottage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const cottageData = fakeData;
    

    return (
        <div>
            <div className='icon-img d-flex justify-content-around'>
                <div className='icon-img' data-aos="fade-left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCPC-Im0qfrNSRPG0tEzdMgQVO1-6lWuLBG-cRA5JHAAe4aFxkeo_x5y4n0h0lfWgBcQ&usqp=CAU" alt="" />
                    <h5>Property Choice</h5>
                    <small>Over 7,000 properties across the UK.</small>
                </div>
                <div className='icon-img' data-aos="fade-left">
                    <img src="https://i.pinimg.com/originals/0b/85/93/0b859335d6a77c54cebbf8bcf367ef15.png" alt="" />
                    <h5>Inspected by us</h5>
                    <small>Every property we list has been visited and checked by us.</small>
                </div>
                <div className='icon-img' data-aos="fade-right">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyOfvzrT60THh1ksLlPS7zKfy50JOv_kQEBk2ikwNh2yH2sp_2XuGk-nVfeUXsaDSfOU&usqp=CAU" alt="" />
                    <h5>Safe and secure</h5>
                    <small>Your booking is handled with all the care you expect.</small>
                </div>
                <div className='icon-img' data-aos="fade-right">
                    <img src="https://previews.123rf.com/images/martialred/martialred1808/martialred180800011/106890636-customer-experience-or-5-star-satisfaction-rating-line-art-vector-icon-for-review-apps-and-websites.jpg" alt="" />
                    <h5>Industry experience</h5>
                    <small>More than 30 years experience.</small>
                </div>
            </div>
            <div className='cottages'>
                <h1>Most Popular Cottages</h1>
                <div className='card-item justify-content-center carts'>
                    {
                        cottageData.map(data => <Card info={data}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cottage;