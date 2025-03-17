import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store';

// Mock the store to avoid dependencies
jest.mock('../store', () => ({
  store: {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
    subscribe: jest.fn(),
  }
}));

test('renders without crashing', () => {
  render(<App />);
  // Very basic test that just makes sure rendering doesn't throw errors
  expect(true).toBe(true);
});