import React from 'react';
import './infobox.css';

export default function InfoBox(props) {
    return (
        <div className='infobox'>
            <h1 className='infobox-head'>{props.text}</h1>
            {/* <img className={props.text} src={props.img} alt={props.text} /> */}
            <p className='infobody'>{props.body}</p>
        </div>
    );
};