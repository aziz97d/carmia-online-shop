import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderItems from '../OrderItems/OrderItems';
import './Order.css'
const Order = () => {
    const [orderList, setOrderList] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        console.log(loggedInUser)
        fetch("https://cryptic-sierra-91774.herokuapp.com/getOrders?email="+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [loggedInUser])
    // console.log(orderList);
    return (

        <div className="checkout-container">
            <div className="checkout-area">
                <div className="checkout-top">
                    <h2>My Orders</h2>
                </div>
                <div className="checkout-item-area">
                    <ul className="table-header">
                        <li>Model</li>
                        <li>Company</li>
                        <li>Date</li>
                        <li>Price</li>
                    </ul>
                    {
                        orderList.length == 0 && <ul className="table-body"><li>No Order Complete</li></ul>
                    }
                    {
                        orderList.map(order => <OrderItems order={order}></OrderItems>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Order;