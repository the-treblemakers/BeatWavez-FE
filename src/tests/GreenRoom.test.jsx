import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import GreenRoom from '../containers/GreenRoom';

describe('GreenRoom container tests', () => {
    it('tests for the chat component', () => {
        render(<GreenRoom />);

        waitFor(() => {
            const chatList = screen.findByRole('list', { name: 'chat' });
            expect(chatList).toMatchSnapshot();
        });
    });

    // it('tests for the songbook', () => {
    //     render(<GreenRoom />);

    //     waitFor(

    //     )
    // });
});
