import React from 'react';

export default class IDConfirmation extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const entry = this.textInput.value;
        this.props.submitPhoneNumber(entry)
    }
    render() {
        return (
            <form id='service-check' onSubmit={e => this.onSubmit(e)}>
                <span id='svc-text'>Please confirm your phone number to continue</span>
                <input type='tel' name='phone-entry' id='phone-entry' placeholder='555-123-4567' ref={input => (this.textInput = input)}></input>
                <button type='submit'>Submit</button>
                {this.props.invalidNumber ? <span className='error-message'>Sorry, could not confirm your account.  Please try again</span> : null}
                {this.props.error ? <span className='error-message'>{this.props.error}</span> : null}
            </form >
        )
    }
}