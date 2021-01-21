import React from 'react';
import { connect } from 'react-redux';
import { RemoveFromCart } from '../redux/actions/CartActions';

const Cart = (props) => {
    console.log(props)
    const {cart, RemoveFromCart} = props
    return (
        <div>
            <h1>this is cart</h1>
            <ul>
                {
                    cart.map(pd => <li>{pd.productName}<button
                    onClick={()=>RemoveFromCart(pd.cartId)}
                    >X</button></li>)
                }
            </ul>
        </div>
    );
};
const mapStateToProps = state =>{
    return{
        cart: state.cart,
        product: state.product
    }
}
const mapDispatchToProps ={
   RemoveFromCart: RemoveFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);