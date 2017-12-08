import React from 'react';

import './landing.css';

export default function Landing() {
    return (
        <div id='landing'>
            <p>This web app is meant for a company who offers technical support. First, the customer is prompted to verify their accoutn information, to make sure that there are no issues with their service contract.  Then, the customer is presented with an artificially intelligent chat bot that will crawl FAQ documents to answer their basic troubleshooting questions. Reading from the FAQ is only an entry point, and the bot could eventually be trained to troubleshoot customer's issues on their own.  For a demo, follow the prompts on the proceeding pages.</p>
            <button>Continue</button>
        </div>
    )
}