import { SUBMIT_SERVICE_NUMBER, CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR, NEW_MESSAGE, START_CONVERSATION, LOADING_CONVERSATION } from '../constants';

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

function startConversation(conversationID) {
    return {
        type: START_CONVERSATION,
        conversationID
    }
}

function loadingConversation() {
    return {
        type: LOADING_CONVERSATION
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

export const sendMessage = (api, message, number, conversationID) => dispatch => {
    dispatch(newMessage('customer', message));
    api.sendMessage(message, number, conversationID)
        .then(resMessage => {
            dispatch(newMessage('bot', resMessage))
        })
        .catch((reason) => {
            dispatch(sendError(reason.message))
        })
}

export const startNewConversation = (api, number) => dispatch => {
    dispatch(loadingConversation());
    api.startConversation(number)
        .then(conversationID => {
            dispatch(startConversation(conversationID))
        })
        .catch((reason) => {
            dispatch(sendError(reason.message))
        })
}