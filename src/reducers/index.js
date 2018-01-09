import { CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR } from '../constants';
import composeReducers from 'compose-redux-reducers';

export function serviceNumber(state, action) {
    switch (action.type) {
        case CUSTOMER_FOUND:
            return {
                customerFound: true,
                serviceNumber: action.serviceNumber,
                customerName: action.customerName,
                messageHist: []
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
        const { customerFound, serviceNumber, customerName, messageHist } = state;
        return {
            customerFound,
            serviceNumber,
            customerName,
            messageHist,
            error: action.reason
        }
    }
    return state;
}

export function newMessage(state, action) {
    if (action.type === NEW_MESSAGE) {
        const { customerFound, serviceNumber, customerName } = state;
        const messageHist = state.messageHist.slice();
        messageHist.push({ sender: action.sender, content: action.message })
        return {
            customerFound,
            serviceNumber,
            customerName,
            messageHist
        }
    }
    return state;
}

export default composeReducers(newMessage, serviceNumber, onError, phoneNumber);