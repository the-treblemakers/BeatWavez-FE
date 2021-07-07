import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PartyRoom from '../containers/PartyRoom';

describe('PartyRoom container tests', () => {
    it('tests for the header component', () => {
        render(<PartyRoom />);

        waitFor(() => {
            const header = screen.findByText('BeatWavez');
            expect(header).toMatchSnapshot();
        });
    });
});
