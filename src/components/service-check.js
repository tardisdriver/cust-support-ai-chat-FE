import React from 'react';

import './service-check.css';

export default class ServiceCheck extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const entry = this.textInput.value;
        this.props.submitServiceNumber(entry)
    }


    render() {
        return (
            <div>
                <form id='service-check' onSubmit={e => this.onSubmit(e)}>
                    <span id='svc-text'>Please enter your service number to continue</span>
                    <input type='text' name='svc-entry' id='svc-entry' placeholder='ABC123' ref={input => (this.textInput = input)}></input>
                    <button type='submit' className='svc-sub'>Submit</button>
                    {this.props.invalidNumber ? <span className='error-message'>Sorry, could not find your number.  Please try again</span> : null}
                    {this.props.error ? <span className='error-message'>{this.props.error}</span> : null}
                </form >
                <div className='tip-box'>
                    <p>For a demo, use the service number 654ZYX.</p>
                </div>
            </div>
        )
    }
}