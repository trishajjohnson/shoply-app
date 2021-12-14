import data from './data.json';
import { ADD, DELETE, REMOVE } from './actionTypes';
const INITIAL_STATE = { products: data.products, cartItems: {} };

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD: {
            const cart = {...state.cartItems};
            cart[action.id] = (cart[action.id] || 0) + 1;
            return {...state, cartItems: cart};
        }

        case REMOVE: {
            const cart = {...state.cartItems};
            delete cart[action.id];
            return {...state, cartItems: cart};
        }

        case DELETE: {
            const cart = {...state.cartItems};
            if (!cart[action.id]) {
                return state;
            }
            cart[action.id]--;
            if (cart[action.id] === 0) {
                delete cart[action.id];
            }
            return {...state, cartItems: cart};
        }

        default:
            return state;
    }
}

export default rootReducer;