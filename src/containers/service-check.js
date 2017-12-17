import ServiceCheck from '../components/service-check';
import { connect } from 'react-redux';

import { submitServiceNumber } from '../actions'

const mapStateToProps = (state, ownProps) => {
    const isErrorMessage = state.serviceNumberError;
    return {
        isErrorMessage
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const submitServiceNumberProp = (number) => dispatch(submitServiceNumber(number))
    return {
        submitServiceNumber: submitServiceNumberProp
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCheck); 