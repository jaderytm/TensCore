// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TensCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TensCore/i);
    expect(titleElement).toBeInTheDocument();
});
