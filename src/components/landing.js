import React from 'react';

import './landing.css';

export default function Landing() {
    return (
        <div id='landing'>
            <p>This web app is meant for a company who offers technical support. First, the customer is prompted to verify their account information. This is a gateway to add additional features such as checks on the account/service contract to make sure there are no issues that the customer should be aware of. Then, the customer is presented with an artificially intelligent chat bot powered by the IBM Watson API that will crawl FAQ documents to answer customer's basic troubleshooting questions, alieviating load on human technical support personel. Reading from the FAQ is only an entry point, and the bot could eventually be trained to troubleshoot customer's issues on its own.  For a demo, follow the prompts on the proceeding pages.</p>
            <button>Continue</button>
        </div>
    )
}