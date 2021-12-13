import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart  } from './actions';
import './ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const product = useSelector(store => ({ ...store.products[id] }), shallowEqual);
    const dispatch = useDispatch();

    function addItem(id) {
        dispatch(addToCart(id));
    }

    function removeItem(id) {
        dispatch(removeFromCart(id));
    }

    return (
        <div className="ProductDetail">
            <h1>{product.name}</h1>
            <img className="Product-img" src={product.image_url} alt={product.name} />
            <h4>Product Description</h4>
            <p>{product.description}</p>
            <p className="lead">Price: ${product.price}</p>
            <button onClick={() => addItem(id)} className="btn btn-primary m-1">Add to Cart</button>
            <button onClick={() => removeItem(id)} className="btn btn-primary m-1">Delete</button>
        </div>
    );
}

export default ProductDetails;