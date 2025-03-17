import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';

test('renders without crashing', () => {
  // Simple test that just makes sure App renders without errors
  render(<App />);
});