import React from 'react';

import InfoBox from './infobox';
import './landing.css';
import shrubbot from './images/shrub-bot.png';

const boxes = [
    { text: 'Automated Support', body: 'Free up your support staff while SHRUB takes care of frequently asked questions.' },
    { text: 'FAQ Aware', body: 'SHRUB will digest your FAQ documents and deliver the answers to your clients in a familiar, text-like conversation.' },
];

export default function Landing(props) {
    const boxesRender = boxes.map((box, index) =>
        <InfoBox key={index} {...box} />
    );
    return (
        <div id='landing'>
            <img src={shrubbot} className='mascot' />
            <div className='info'>
                {boxesRender}
            </div>
            <button className='go-to-bot' onClick={props.action}>Click Here To Try Chatting With SHRUB</button>
            <div className='about-text'>
                <p>SHRUB is a chat bot that is intended to assist companies looking to free up their support staff to work on more complex issues while SHRUB takes care of simple, frequently asked questions from your client base. SHRUB works off of FAQ documents that you provide, and it delivers the answers to your clients.</p>
            </div>
        </div>
    )
}