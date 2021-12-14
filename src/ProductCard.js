import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart  } from './actions';
import { Link } from "react-router-dom";
import './ProductCard.css';

function ProductCard({product, id}) {
    const dispatch = useDispatch();
    
    function addItem(id) {
        dispatch(addToCart(id));
    }

    function removeItem(id) {
        dispatch(removeFromCart(id));
    }

    return (
        <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
                <Link to={`/products/${id}`}>
                    <img className="card-img-top ProductCard-img" src={product["image_url"]} alt={product.name} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title mb-0">{product.name}</h5>
                    <a href={`products/${id}`}><small className="detail-link">See Details</small></a>
                    <p className="lead mt-3">Price: ${product.price}</p>
                    <button onClick={() => addItem(id)} className="btn btn-primary m-1">Add to Cart</button>
                    <button onClick={() => removeItem(id)} className="btn btn-primary m-1">Delete</button>
                </div>
            </div>
        </div>
        
    );
}

export default ProductCard;