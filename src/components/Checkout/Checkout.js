import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';
import Popup from 'react-popup';

const CheckOut = () => {

  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [carInfo, setCarInfo] = useState({});
  const history = useHistory();
  useEffect(() => {
    fetch(`https://cryptic-sierra-91774.herokuapp.com/car/${id}`)
      .then(res => res.json())
      .then(data => setCarInfo(data))
  }, [carInfo])

  const continueShoppingHandler =() =>{
    // Popup.alert('I am alert, nice to meet you');
    history.push('/home');
    
  }

  const handleCheckOut = () =>{
    const selectedProducts = {...loggedInUser,...carInfo,orderDate:new Date()}
    fetch('https://cryptic-sierra-91774.herokuapp.com/addOrder',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(selectedProducts)
        })
        .then(res => res.json())
        .then(data => {
          alert("Thank you for shopping")
          history.push('/home');
        })
  }
  return (
    <div className="checkout-container">
      
      <div className="checkout-area">
        <div className="checkout-top">
          <h2>My Cart</h2>
          <button onClick={continueShoppingHandler} className="checkout-button">Continue Shopping</button>
        </div>
        <div className="checkout-item-area">
          <ul className="table-header">
            <li>Model</li>
            <li>Company</li>
            <li>Price</li>
          </ul>
          <ul className="table-body">
            <li>{carInfo.model}</li>
            <li>{carInfo.company}</li>
            <li>{carInfo.price}</li>
          </ul>
          
        </div>
        <ul className="table-bottom">
            <li>Total</li>
            <li></li>
            <li>{carInfo.price}</li>
          </ul>
        <div className="checkout-bottom">
          <button onClick={handleCheckOut} className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;