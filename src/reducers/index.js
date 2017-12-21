import { CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR } from '../constants';
import composeReducers from 'compose-redux-reducers';

export function serviceNumber(state, action) {
    switch (action.type) {
        case CUSTOMER_FOUND:
            return {
                customerData: action.customerData
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

export function onError(state, action) {
    if (action.type === ERROR) {
        return {
            customerData: state.customerData,
            error: action.reason
        }
    }
    return state;
}

export default composeReducers(serviceNumber, onError);