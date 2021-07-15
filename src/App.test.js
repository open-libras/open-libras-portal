import { render, screen } from '@testing-library/react';
import App from './App';

test('simple test', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
