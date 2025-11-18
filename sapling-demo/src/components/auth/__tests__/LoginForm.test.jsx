import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider } from '../../../context/AuthContext';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  it('renders login form correctly', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    expect(screen.getByText('🌱 Sapling')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('displays demo credentials', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    expect(screen.getByText(/parent@saplingdemo.com/i)).toBeInTheDocument();
    expect(screen.getByText(/educator@saplingdemo.com/i)).toBeInTheDocument();
  });

  it('shows error message with invalid credentials', async () => {
    const user = userEvent.setup();
    
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /log in/i });

    await user.type(emailInput, 'wrong@email.com');
    await user.type(passwordInput, 'wrongpassword');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
    });
  });

  it('fills demo credentials when demo button clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const demoButton = screen.getByRole('button', { name: /use demo credentials/i });
    await user.click(demoButton);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput.value).toBe('parent@saplingdemo.com');
    expect(passwordInput.value).toBe('sapling321!');
  });
});