import { CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER } from '../constants';

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

export default serviceNumber;