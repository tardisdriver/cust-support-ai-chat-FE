import { SUBMIT_SERVICE_NUMBER, CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR, INVALID_PHONE_NUMBER, PHONE_NUMBER_VERIFIED, CHECK_PHONE_NUMBER } from '../constants';

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

function checkingPhoneNumber() {
    return {
        type: CHECK_PHONE_NUMBER
    }
}

function invalidPhone() {
    return {
        type: INVALID_PHONE_NUMBER
    }
}

function phoneVerified(customerPhone) {
    return {
        type: PHONE_NUMBER_VERIFIED,
        customerPhone
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

export const submitPhoneNumber = (api, phoneNumber, serviceNumber) => dispatch => {
    dispatch(checkingPhoneNumber());
    api.checkPhoneNumber(phoneNumber, serviceNumber)
        .then((customerData) => {
            if (customerData) {
                dispatch(phoneVerified(phoneNumber))
            } else {
                dispatch(invalidPhone())
            }
        })
        .catch((reason) => {
            dispatch(sendError(reason.message))
        })
}
