import React from 'react';

import ServiceCheck from '../containers/service-check';

export default function (props) {
    if (props.customerFound) {
        return <h1>Found</h1>
    } else {

        return (
            <div>
                <ServiceCheck />
            </div>
        )
    }
}