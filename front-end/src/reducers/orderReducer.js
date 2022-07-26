import { switchClasses } from "@mui/material";
import { ALL_ORDERS_FAIL, ALL_ORDERS_SUC, CREATE_ORDER_FAIL, CREATE_ORDER_REQ, CREATE_ORDER_SUC, MY_ORDER_FAIL, MY_ORDER_REQ, MY_ORDER_SUC, SINGLE_ORDER_FAIL, SINGLE_ORDER_SUC } from "../constants/orderConstant";
import { CLEAR_ERR } from "../constants/productConstants";

export const newOrderReducer = (state = { orderStatus: {} }, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQ:
            return {
                ...state,
                loading: true,
            }
        case CREATE_ORDER_SUC:
            return {
                loading: false,
                orderStatus: action.payload
            }

        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const myOrderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case MY_ORDER_SUC:
            return {
                orders: action.payload
            }
        case MY_ORDER_FAIL:
            return {
                error: action.payload
            }
        case CLEAR_ERR:
            return {
                ...state,
                error: null
            }
        default:
            return state

    }
}

export const orderDetailsReducer = (state = { orderDetails: {} }, action) => {
    switch (action.type) {
        case SINGLE_ORDER_SUC:
            return {
                loading: true,
                orderDetails: action.payload
            }
        case SINGLE_ORDER_FAIL:
            return {
                error: action.payload
            }
        case CLEAR_ERR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const allOrdersReducer = (state = { allOrders: [] }, action) => {
    switch (action.type) {
        case ALL_ORDERS_SUC:
            return {
                allOrders: action.payload
            }
        case ALL_ORDERS_FAIL:
            return {
                error: action.payload
            }
        case CLEAR_ERR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}