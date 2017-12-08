import React from 'react';

import './service-check.css';

export default function ServiceCheck() {
    return (
        <div id='service-check'>
            <span id='svc-text'>Please enter your service number to continue</span>
            <input type='text' name='svc-entry' id='svc-entry' placeholde='ABC123'></input>
            <button type='submit'>Submit</button>
        </div>
    )
}