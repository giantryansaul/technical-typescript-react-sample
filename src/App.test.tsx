import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Form', () => {
  render(<App />);
  const nameElement = screen.getByText(/Form/i);
  expect(nameElement).toBeInTheDocument();
});
