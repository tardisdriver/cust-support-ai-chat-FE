import ServiceCheck from '../components/service-check';
import { connect } from 'react-redux';
import * as api from '../api';

import { submitServiceNumber } from '../actions';

const mapStateToProps = (state, ownProps) => {
    const invalidNumber = state.invalidNumber;
    return {
        invalidNumber,
        error: state.error
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const submitServiceNumberProp = (number) => dispatch(submitServiceNumber(api, number))
    return {
        submitServiceNumber: submitServiceNumberProp
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCheck); 