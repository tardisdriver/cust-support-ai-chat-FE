import { SUBMIT_SERVICE_NUMBER, CHECK_SERVICE_NUMBER, CUSTOMER_FOUND, INVALID_SERVICE_NUMBER, ERROR } from '../constants';

function checkingServiceNumber() {
    return {
        type: CHECK_SERVICE_NUMBER
    }
}

function customerFound(customerData) {
    return {
        type: CUSTOMER_FOUND,
        customerData
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


    // return {
    //     type: SUBMIT_SERVICE_NUMBER,
    //     number
    //}

}



//when submit request, throw new action function, use Thunk
//on submitservice, fetch, on fetch success, then...dispatch new action, fail ....error
//Promise.success 
//check for 404