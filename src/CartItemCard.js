import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeEntireItemFromCart  } from './actions';
import './CartItemCard.css';

function CartItemCard({product, id}) {
    const cartItems = useSelector(store => store.cartItems, shallowEqual);
    const numItems = cartItems[id];
    const dispatch = useDispatch();
    
    function addItem(id) {
        dispatch(addToCart(id));
    }

    function removeItem(id) {
        dispatch(removeFromCart(id));
    }

    function removeEntireItem(id) {
        dispatch(removeEntireItemFromCart(id));
    }

    return (
        <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid" src={product.image_url} /></div>
                    <div className="col">
                        <div className="row text-muted">{product.name}</div>
                        {/* <div className="row">Cotton T-shirt</div> */}
                    </div>
                    <div className="col"> <button onClick={() => removeItem(id)} className="Cart-btn m-2">-</button><a href="#" className="border">{numItems}</a><button onClick={() => addItem(id)} className="Cart-btn m-2">+</button></div>
                    <div className="col">${product.price} <button onClick={() => removeEntireItem(id)} className="Cart-btn m-2"><span className="close">    &#10005;</span></button></div>
                </div>
        </div>
    )
}

export default CartItemCard;