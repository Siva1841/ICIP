import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders without crashing', () => {
  // Simple test that just makes sure App renders without errors
  render(<App />);
});