import React from 'react';
import Footer from '../../Footer/Footer';
import Cottage from '../Cottages/Cottage';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Cottage></Cottage>
            <Footer></Footer>
        </div>
    );
};

export default Home;