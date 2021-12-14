import { ADD, DELETE, REMOVE } from "./actionTypes";

export function addToCart(id) {
    return { type: ADD, id: id }
}

export function removeFromCart(id) {
    return { type: DELETE, id: id }
}

export function removeEntireItemFromCart(id) {
    return { type: REMOVE, id: id }
}