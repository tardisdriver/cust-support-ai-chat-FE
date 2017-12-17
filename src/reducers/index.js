import { SUBMIT_SERVICE_NUMBER } from '../constants';


export function serviceNumber(state, action) {
    switch (action.type) {
        case SUBMIT_SERVICE_NUMBER:
            return {
                serviceNumber: action.number,
                serviceNumVerified: false
            }
        default:
            return state;
    }
}

export default serviceNumber;