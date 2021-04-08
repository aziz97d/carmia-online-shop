import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const ManageProductItem = (props) => {
    const { _id, model, company, price, imageUrl } = props.car;
    const history = useHistory();
    const editHandler = (id) => {
        history.push(`/admin/editCar/${id}`)
    }

    const deleteHandler = (id) => {
        fetch('https://cryptic-sierra-91774.herokuapp.com/deleteCar?id=' + _id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    props.loadCar();
                }

            })
    }
    return (
        <ul className="product-list">
            <li>{model}</li>
            <li>{company}</li>
            <li>{price}</li>
            <li>
                <button onClick={() => editHandler(_id)}>
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </button>
                <button onClick={() => deleteHandler(_id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </li>
        </ul>
    );
};

export default ManageProductItem;