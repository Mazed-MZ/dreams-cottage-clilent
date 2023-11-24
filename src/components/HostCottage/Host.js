import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Host.css';
import Nav from './../Home/Navigation/Nav';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCheckSquare, faSprayCan, faUser, faArrowAltCircleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Host = () => {

    const [cottage, setCottage] = useState([])
    const { apiKey } = useParams();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        fetch('https://mocki.io/v1/a48b4151-ebfe-4beb-9dbb-0f8c4438142f')
            .then(res => res.json())
            .then(data => {
                const ctgInfo = data.find(cd => cd.id === apiKey);
                setCottage(ctgInfo);
            })
    }, [apiKey]);

    return (
        <div className='host'>
            <Nav></Nav>
            <div className='slider'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cottage.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{cottage.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cottage.image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>{cottage.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cottage.image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>{cottage.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='row ctg-details'>
                <div className='col-md-8'>
                    <h1 data-aos="fade-up">{cottage.title}</h1>
                    <p data-aos="fade-in">{cottage.country}</p>
                    <h5 data-aos="flip-up">{cottage.decoration}</h5>
                    <div className='ctg-info' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='short-info'>
                            <h5><FontAwesomeIcon style={{ color: 'darkblue' }} icon={faHome} /> Entire Home</h5>
                            <p>You'll have the condominium yourself</p>
                        </div>
                        <div className='short-info'>
                            <h5><FontAwesomeIcon style={{ color: 'darkblue' }} icon={faCheckSquare} /> Self check-in</h5>
                            <p>You can check in with the doorman</p>
                        </div>
                        <div className='short-info'>
                            <h5><FontAwesomeIcon style={{ color: 'darkblue' }} icon={faSprayCan} /> Sparkling Clean</h5>
                            <p>10 recent guests said this place was sparkling clean</p>
                        </div>
                        <div className='short-info'>
                            <h5><FontAwesomeIcon style={{ color: 'darkblue' }} icon={faUser} /> Rowdraw is a Superhost</h5>
                            <p>Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests</p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, nesciunt aliquid deleniti perspiciatis facilis eligendi consectetur sapiente? Cum sunt natus voluptatum doloremque magnam. Optio quidem nihil deserunt libero ex culpa.  Asperiores, nesciunt aliquid deleniti perspiciatis facilis eligendi consectetur sapiente? Cum sunt natus voluptatum doloremque magnam. Optio quidem nihil deserunt libero ex culpa,  Asperiores, nesciunt aliquid deleniti perspiciatis facilis eligendi consectetur sapiente? Cum sunt natus voluptatum doloremque magnam. Optio quidem nihil deserunt libero ex culpa.  Asperiores, nesciunt aliquid deleniti perspiciatis facilis eligendi consectetur sapiente? Cum sunt natus voluptatum doloremque magnam. Optio quidem nihil deserunt libero ex culpa.  Asperiores, nesciunt aliquid deleniti perspiciatis facilis eligendi consectetur sapiente? Cum sunt natus voluptatum doloremque magnam. Optio quidem nihil deserunt libero ex culpa.  Asperiores, nesciunt aliquid deleniti perspiciatis facilis eligendi consectetur sapiente? Cum sunt natus voluptatum doloremque magnam. Optio quidem nihil deserunt libero ex culpa.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='requir-cart' data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1>Requirments</h1>
                        <p><FontAwesomeIcon style={{ color: 'darkred' }} icon={faArrowAltCircleRight} /> {cottage.facility1}</p>
                        <p><FontAwesomeIcon style={{ color: 'darkred' }} icon={faArrowAltCircleRight} /> {cottage.facility2}</p>
                        <p><FontAwesomeIcon style={{ color: 'darkred' }} icon={faArrowAltCircleRight} /> {cottage.facility3}</p>
                        <p><FontAwesomeIcon style={{ color: 'darkred' }} icon={faArrowAltCircleRight} /> {cottage.facility4}</p>
                    </div>
                    <div className='rent-cart' data-aos="zoom-in"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1>{cottage.rent}/<small>night</small></h1>
                        <p><FontAwesomeIcon icon={faStar} style={{ color: 'lightgreen' }} />{cottage.reviews}</p>
                        <div class="inputs">
                            <div class="input-group">
                                <label>Check in</label>
                                <input class="inp-style" type="date" name="" />
                            </div>
                            <div class="input-group">
                                <label>Check out</label>
                                <input class="inp-style" type="date" name="" />
                            </div>
                        </div>
                        <div>
                            <div className='cart-tag'>
                                <div className='d-flex cart-tag'>
                                    <p>maximum guest</p><h4 style={{ marginLeft: '145px' }}>{cottage.guest}</h4>
                                </div>
                                <div className='d-flex cart-tag'>
                                    <p>per night</p><h4 style={{ marginLeft: '135px' }}>{cottage.rent}</h4>
                                </div>
                                <div className='d-flex cart-tag'>
                                    <p>Cleaning fee</p><h4 style={{ marginLeft: '150px' }}>{cottage.cleaning}</h4>
                                </div>
                                <div className='d-flex cart-tag'>
                                    <p>Service</p><h4 style={{ marginLeft: '195px' }}>{cottage.service}</h4>
                                </div>
                                <div className='d-flex cart-tag'>
                                    <p>total</p><h4 style={{ marginLeft: '175px' }}>{cottage.total}</h4>
                                </div>
                                <button class='btn btn-dark'>Reserve {cottage.title}</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Host;