import React, { useEffect } from 'react';
import './Cottage.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {

    const { title, image, country, decoration } = props.info;

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleCtgButton = (data) =>{
        console.log(data);
    }

    return (
        <div>
            <div class="card ctg-img" data-aos="zoom-out">
                <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body ctg-item">
                        <h5 class="card-title">{title}</h5>
                        <small>Country: {country}</small>
                        <p>{decoration}</p>
                        <Link to='/host'><button class="btn btn-dark" onClick={()=> handleCtgButton(props.info)}>See Details</button></Link>
                    </div>
            </div>
        </div>
    );
};

            export default Card;