import React from 'react';

const OrderItems = (props) => {
    const {model,company,price,orderDate} = props.order;
    const date =new Date(orderDate).toDateString('dd/MM/yyyy')
    return (
        <div>
            <ul className="table-body">
                <li>{model}</li>
                <li>{company}</li>
                <li>{date}</li>
                <li>{price}</li>
            </ul>
        </div>
    );
};

export default OrderItems;