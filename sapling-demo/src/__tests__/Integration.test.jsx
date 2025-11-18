import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Integration: Login Flow', () => {
  it('allows parent to login and see dashboard', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Click demo login button
    const demoButton = screen.getByRole('button', { name: /use demo credentials/i });
    await user.click(demoButton);

    // Submit login
    const loginButton = screen.getByRole('button', { name: /log in/i });
    await user.click(loginButton);

    // Wait for dashboard to appear
    await waitFor(() => {
      expect(screen.getByText(/Emma Appleton/i)).toBeInTheDocument();
      expect(screen.getByText(/Today's Updates/i)).toBeInTheDocument();
    });
  });

  it('allows educator to login and see educator portal', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Click educator demo login
    const educatorButton = screen.getByRole('button', { name: /educator demo login/i });
    await user.click(educatorButton);

    // Submit login
    const loginButton = screen.getByRole('button', { name: /log in/i });
    await user.click(loginButton);

    // Wait for educator portal to appear
    await waitFor(() => {
      expect(screen.getByText(/Sapling - Educator Portal/i)).toBeInTheDocument();
    });
  });
});