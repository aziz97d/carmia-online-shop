import React from 'react';
import { useHistory, useLocation } from 'react-router';
import './Card.css'
const Card = (props) => {
    const {_id,model,company,price,imageUrl} = props.carInfo;
    const location = useLocation();
    const history  = useHistory();
    // console.log(car);
    const buyNowHandler = (id)=>{
        console.log(id)
        history.push(`/checkout/${id}`)
    }
    return (

        <div className="card">
            <img
                className="card-img"
                // src="https://images.hgmsites.net/med/tesla-model-x_100777013_m.jpg"
                src={imageUrl}
                alt="Grand Canyon"
            />
            <div className="card-content">
                <h1 className="card-header">{model}</h1>
                {/* <p >{company}</p> */}
                <div className="card-bottom">
                    <p className="price">${price}</p>
                    <button onClick={()=>{buyNowHandler(_id)}} className="card-btn">BUY <span>&rarr;</span></button>
                </div>
            </div>
        </div>

    );
};

export default Card;