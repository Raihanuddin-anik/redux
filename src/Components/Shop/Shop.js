import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { AddToCart } from '../redux/actions/CartActions';

const Shop = (props) => {

    const {product,AddToCart} = props;
    return (
        <div>
            
            {product.map(pd =><Product
             product={pd}
             key = {pd.id}
             AddToCart = {AddToCart}
             ></Product>)}
        </div>
    );
};

const mapStateToProps = state =>{
    
    return{
        cart: state.cart, 
        product: state.product
    }
}

const mapDispatchToProps = {
    AddToCart : AddToCart
}

// const connectToStore = connect(mapStateToProps,mapDispatchToProps);
// connect(mapStateToProps,mapDispatchToProps)(Shop)

export default connect(mapStateToProps,mapDispatchToProps)(Shop);