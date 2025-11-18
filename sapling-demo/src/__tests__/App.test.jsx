import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders login form by default', () => {
    render(<App />);
    
    expect(screen.getByText('🌱 Sapling')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('shows demo credentials on login page', () => {
    render(<App />);
    
    expect(screen.getByText(/parent@saplingdemo.com/i)).toBeInTheDocument();
  });
});