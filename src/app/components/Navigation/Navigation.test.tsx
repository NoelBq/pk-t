import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';
import '@testing-library/jest-dom'

describe('Navigation Component', () => {
    test('renders without crashing', () => {
        render(
            <Navigation
                disabledArrowBack={false}
                disabledArrowForward={false}
                handlePreviousPage={jest.fn()}
                handleNextPage={jest.fn()}
            />
        );
    });
});
