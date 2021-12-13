import { ADD, DELETE } from "./actionTypes";

export function addToCart(id) {
    return { type: ADD, id: id }
}

export function removeFromCart(id) {
    return { type: DELETE, id: id }
}