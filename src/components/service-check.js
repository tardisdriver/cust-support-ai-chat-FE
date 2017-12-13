import React from 'react';

import './service-check.css';

export default class ServiceCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onSubmit(event) {
        event.preventDefault();
        const entry = this.textInput.value;
        this.props.submitServiceNumber(entry);
    }
    render() {
        return (
            <form id='service-check' onSubmit={e => this.onSubmit(e)}>
                <span id='svc-text'>Please enter your service number to continue</span>
                <input type='text' name='svc-entry' id='svc-entry' placeholder='ABC123' ref={input => (this.textInput = input)}></input>
                <button type='submit'>Submit</button>
            </form >
        )
    }
}