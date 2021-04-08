import React, { createContext, useEffect, useState } from 'react';
import ManageProductItem from '../ManageProductItem/ManageProductItem';
import './ManageProduct.css';
import { BoxLoading } from 'react-loadingg';

const ManageProduct = () => {
    const [cars, setCars] = useState([])

    const loadCars = () => {
        fetch('https://cryptic-sierra-91774.herokuapp.com/getcars')
            .then(res => res.json())
            .then(data => setCars(data))
    }

    useEffect(() => {
        loadCars();
    }, [])
    return (

        <div className="manage-area">
            {
                cars.length === 0 && <BoxLoading/>
            }
            
            <ul className="product-list header">
                <li>Model</li>
                <li>Company</li>
                <li>Price</li>
                <li>Action</li>
            </ul>
            {
                cars.map(car => <ManageProductItem car={car} loadCar={loadCars}></ManageProductItem>)
            }
        </div>
    );
};

export default ManageProduct;