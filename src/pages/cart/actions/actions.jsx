import { SET_ITEM, ADD_ITEM } from "../constants/constants";

export const setItem = (payload) => {
    return {
        type: SET_ITEM,
        payload
    }
}

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload
    }
}