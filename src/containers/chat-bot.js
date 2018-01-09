import ChatBot from '../components/chat-bot';
import { connect } from 'react-redux';
import * as api from '../api'

import { sendMessage } from '../actions';

const mapStateToProps = (state, ownProps) => {
    const messageHistory = state.messageHist;
    const conversationID = state.conversationID;
    return {
        messageHistory,
        conversationID
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const sendMessageProp = (message, conversationID) => dispatch(sendMessage(api, message, conversationID))
    return {
        sendMessage: sendMessageProp
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatBot); 
