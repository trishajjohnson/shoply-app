import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CartItemCard from './CartItemCard';

function Cart() {
    const { cartItems, products } = useSelector(store => ({cartItems: store.cartItems, products: store.products}), shallowEqual);
    console.log(cartItems);
    console.log("products", products);
    const cartIds = Object.keys(cartItems);
    
    const cartItemCards = cartIds.map(id => (
        <CartItemCard product={products[id]} key={id} id={id} />
    ));

    return (
        <div className="Cart">
            <h1>Your Cart</h1>
            <div className="container">
                {cartItemCards}
            </div>
        </div>
    )
}

export default Cart;