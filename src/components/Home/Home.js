import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css';
import { BoxLoading } from 'react-loadingg';

const Home = () => {
    const [cars, setCars] = useState([])
    useEffect(()=>{
        fetch('https://cryptic-sierra-91774.herokuapp.com/getcars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <div className="gird-container">
            {
                cars.length === 0 && <BoxLoading />
            }
            {
                cars.map(car => <Card carInfo={car}></Card>)
            }
        </div>
    );
};

export default Home;