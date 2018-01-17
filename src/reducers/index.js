import { NEW_MESSAGE, CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR, START_CONVERSATION, LOADING_CONVERSATION } from '../constants';
import composeReducers from 'compose-redux-reducers';

export function serviceNumber(state, action) {
    switch (action.type) {
        case CUSTOMER_FOUND:
            return {
                customerFound: true,
                serviceNumber: action.serviceNumber,
                customerName: action.customerName,

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

export function startConversation(state, action) {
    const { customerFound, serviceNumber, customerName } = state;
    switch (action.type) {
        case START_CONVERSATION:
            const conversationID = action.conversationID;
            const message = { content: action.message, sender: 'bot' };
            return {
                conversationID,
                customerFound,
                serviceNumber,
                customerName,
                messageHist: [message]
            }
        case LOADING_CONVERSATION:
            return {
                customerFound,
                serviceNumber,
                customerName,
                loadingConversation: true
            }
    }
    return state;
}

export default composeReducers(startConversation, newMessage, serviceNumber, onError);