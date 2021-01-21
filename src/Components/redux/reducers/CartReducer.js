import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions"

const initialState = {
    cart : [],
    product: [  
     {name: "lenevo laptop", id:1},
    {name: "asus laptop", id:2},
    {name: "dell laptop", id:3},
    {name: "hp laptop", id:4},
    {name: "toshiba laptop", id:5}
]
}

const cartReducers = (state=initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            
            const newItem ={
                productId: action.id,
                productName: action.name,
                cartId: state.cart.length + 1

            }
            const newCart = [...state.cart, newItem];
            return {...state, cart:newCart}
        case REMOVE_FROM_CART:
            const id = action.id;
            const remaingCart = state.cart.filter(item => item.cartId !== id)
            return {...state, cart: remaingCart}
       default:
            return state;  
    }
}
export default cartReducers;