import React from 'react';

const Product = (props) => {
    const {AddToCart,product} = props;
   
    return (
        <div  style={{border:'1px solid tomato'}}>
            <h2>{product.name}</h2>
            <button onClick={()=>AddToCart(product.id,product.name)}>Add to Cart</button>
        </div>
    );
};

export default Product;