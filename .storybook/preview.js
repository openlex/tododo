import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
addDecorator(withKnobs);
