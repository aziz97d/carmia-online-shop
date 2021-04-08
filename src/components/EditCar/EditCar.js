import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const EditCar = () => {
    const { id } = useParams();
    const [carInfo, setCarInfo] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://cryptic-sierra-91774.herokuapp.com/car/${id}`)
            .then(res => res.json())
            .then(data => setCarInfo(data))
    }, [])
    
    const onSubmit = data => {
       
    };

    return (
        <div>
            <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="item-group">
                    <label htmlFor="model">Model Number</label>
                    <input type="text" name="model"  {...register("model")} id="" placeholder="Enter Model Number" />
                </div>
                <div className="item-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company"  {...register("company")} id="" placeholder="Enter Company Name" />
                </div>
                <div className="item-group">
                    <label htmlFor="model">Price</label>
                    <input type="text" name="price"  {...register("price")} id="" placeholder="Enter Price" />
                </div>
                <div className="item-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="" />
                </div>

                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditCar;