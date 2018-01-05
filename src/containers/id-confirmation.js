import IDConfirmation from '../components/id-confirmation';
import { connect } from 'react-redux';
import * as api from '../api'

import { submitPhoneNumber } from '../actions'

const mapStateToProps = (state, ownProps) => {
    const invalidPhoneNumber = state.invalidNumber;
    return {
        invalidPhoneNumber,
        error: state.error
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const submitPhoneNumberProp = (number) => dispatch(submitPhoneNumber(api, number))
    return {
        submitPhoneNumber: submitPhoneNumberProp
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IDConfirmation); 