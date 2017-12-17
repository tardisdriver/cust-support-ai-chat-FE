import { SUBMIT_SERVICE_NUMBER } from '../constants';

export function submitServiceNumber(number) {
    return {
        type: SUBMIT_SERVICE_NUMBER,
        number
    }
}