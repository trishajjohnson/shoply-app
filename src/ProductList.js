import React from 'react';
import ProductCard from './ProductCard';
import { useSelector, shallowEqual } from 'react-redux';
import './ProductList.css';


function ProductList() {
    const products = useSelector(store => store.products, shallowEqual);
    const productCards = Object.keys(products).map(id => (
        <ProductCard product={products[id]} id={id} />
    ));

    return (
        
        <div className="ProductList container">
            <h2>Products</h2>
            <div className="row">
                {productCards}
            </div>
        </div>
       
    );
}

export default ProductList;