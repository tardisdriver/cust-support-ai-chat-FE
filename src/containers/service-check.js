import ServiceCheck from '../components/service-check';
import { connect } from 'react-redux';
import api from '../api'

import { submitServiceNumber } from '../actions'

const mapStateToProps = (state, ownProps) => {
    const isErrorMessage = state.invalidNumber;
    return {
        isErrorMessage
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const submitServiceNumberProp = (number) => dispatch(submitServiceNumber(api, number))
    return {
        submitServiceNumber: submitServiceNumberProp
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCheck); 