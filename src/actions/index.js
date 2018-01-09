import { SUBMIT_SERVICE_NUMBER, CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR, INVALID_PHONE_NUMBER, PHONE_NUMBER_VERIFIED, CHECK_PHONE_NUMBER, NEW_MESSAGE } from '../constants';

function checkingServiceNumber() {
    return {
        type: CHECK_SERVICE_NUMBER
    }
}

function customerFound(customerData) {
    return {
        type: CUSTOMER_FOUND,
        serviceNumber: customerData.id,
        customerName: customerData.name
    }
}

function invalidServiceNumber() {
    return {
        type: INVALID_SERVICE_NUMBER
    }
}

function sendError(reason) {
    return {
        type: ERROR,
        reason
    }
}

function newMessage(sender, message) {
    return {
        type: NEW_MESSAGE,
        sender,
        message
    }
}


export const submitServiceNumber = (api, number) => dispatch => {
    dispatch(checkingServiceNumber());
    api.checkServiceNumber(number)
        .then((customerData) => {
            if (customerData) {
                dispatch(customerFound(customerData))
            } else {
                dispatch(invalidServiceNumber())
            }
        })
        .catch((reason) => {
            dispatch(sendError(reason.message))
        })
}

export const sendMessage = (api, message, conversationID) => dispatch => {
    dispatch(newMessage('customer', message));
    api.sendMessage(message, conversationID)
        .then(resMessage => {
            dispatch(newMessage('bot', resMessage))
        })
        .catch((reason) => {
            dispatch(sendError(reason.message))
        })
} 
