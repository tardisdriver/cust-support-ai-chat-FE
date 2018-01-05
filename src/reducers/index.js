import { CHECK_PHONE_NUMBER, PHONE_NUMBER_VERIFIED, INVALID_PHONE_NUMBER, CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR } from '../constants';
import composeReducers from 'compose-redux-reducers';

export function serviceNumber(state, action) {
    switch (action.type) {
        case CUSTOMER_FOUND:
            return {
                customerFound: true,
                serviceNumber: action.serviceNumber,
                customerName: action.customerName
            }
        case CHECK_SERVICE_NUMBER:
            return {
                checkingServiceNumber: true
            }
        case INVALID_SERVICE_NUMBER:
            return {
                invalidNumber: true
            }
        default:
            return state;
    }
}

export function phoneNumber(state, action) {
    switch (action.type) {
        case CHECK_PHONE_NUMBER:
            return {
                ...state, checkingPhoneNumber: true
            }
        case INVALID_PHONE_NUMBER:
            return {
                ...state, invalidPhone: true
            }
        case PHONE_NUMBER_VERIFIED:
            return {
                ...state, phoneVerified: true,
                customerPhone: action.customerPhone
            }
        default:
            return state;
    }
}

export function onError(state, action) {
    if (action.type === ERROR) {
        return {
            customerData: state.customerData,
            error: action.reason
        }
    }
    return state;
}

export default composeReducers(serviceNumber, onError, phoneNumber);