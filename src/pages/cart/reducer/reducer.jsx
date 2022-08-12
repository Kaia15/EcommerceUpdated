import { SET_ITEM, ADD_ITEM } from "../constants/constants";

export const initState = {
    item: {},
    cart: []
}

export const reducer = (state, action) => {
    let updated;
    switch(action.type) {
        case SET_ITEM: 
            return {...state, item: {
                id: action.payload.id,
                price: action.payload.price,
                quantity: action.payload.quantity,
                subtotal: action.payload.subtotal
            }}
        case ADD_ITEM:
            return {
                ...state,
                cart: [...state.cart, {
                    id: action.payload.id,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                    subtotal: action.payload.subtotal
                }]
            }
    }
}

export default reducer