import React from 'react';
import { shallow } from 'enzyme';

import Landing from './landing';

describe('<Landing />', () => {
    it('renders Landing without crashing', () => {
        shallow(<Landing />);
    });
});