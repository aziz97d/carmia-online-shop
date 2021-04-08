import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    console.log(imageUrl);
    
    const history = useHistory();

    const onSubmit = data => {
        const carData = {
            model: data.model,
            company: data.company,
            price: data.price,
            imageUrl: imageUrl
        }
        fetch('https://cryptic-sierra-91774.herokuapp.com/addCar', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(carData)
        })
            .then(res => res.json())
            .then(data => {
                alert("Product Added Successfully");
                history.push('/admin/manageCar')
            })
    };
    const handleImageUpload = (event) => {
        // console.log(event.target.files);
        const imageData = new FormData()
        imageData.set('key', 'e650539e6c992c4623860686cedbab5b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="item-group">
                    <label htmlFor="model">Model Number</label>
                    <input type="text" name="model"  {...register("model",{ required: true })} id="" placeholder="Enter Model Number" />
                    {errors.model && <span>Model required</span>}
                </div>
                <div className="item-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company"  {...register("company",{ required: true })} id="" placeholder="Enter Company Name" />
                    {errors.company && <span>Company Name required</span>}
                </div>
                <div className="item-group">
                    <label htmlFor="model">Price</label>
                    <input type="text" name="price"  {...register("price",{ required: true })} id="" placeholder="Enter Price" />
                    {errors.price && <span>Price required</span>}
                </div>
                <div className="item-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" onChange={handleImageUpload} name="image" id="" />
                </div>

                <input type="submit" value="Add Product" />
            </form>

            
        </div>
    );
};

export default AddCar;