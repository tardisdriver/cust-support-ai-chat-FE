import ChatBot from '../components/chat-bot';
import { connect } from 'react-redux';
import * as api from '../api'

import { sendMessage, startNewConversation } from '../actions';

const mapStateToProps = (state, ownProps) => {
    const messageHistory = state.messageHist;
    const conversationID = state.conversationID;
    const loadingConversation = state.loadingConversation;
    const serviceNumber = state.serviceNumber;
    return {
        messageHistory,
        conversationID,
        loadingConversation,
        serviceNumber
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const sendMessageProp = (message, number, conversationID) => dispatch(sendMessage(api, message, number, conversationID));
    const startConversationProp = (number) => dispatch(startNewConversation(api, number));
    return {
        sendMessage: sendMessageProp,
        startConversation: startConversationProp
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const sendMessageProp = (message) => dispatchProps.sendMessage(message, stateProps.serviceNumber, stateProps.conversationID);
    const startConversationProp = () => dispatchProps.startConversation(stateProps.serviceNumber);
    const messageHistory = stateProps.messageHistory;
    const loadingConversation = stateProps.loadingConversation;
    return {
        sendMessage: sendMessageProp,
        startConversation: startConversationProp,
        messageHistory,
        loadingConversation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatBot); 
