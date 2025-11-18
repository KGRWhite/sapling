import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';

describe('AuthContext', () => {
  it('should start with no user logged in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user).toBeNull();
    expect(result.current.child).toBeNull();
  });

  it('should login parent with correct credentials', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      const success = result.current.login('parent@saplingdemo.com', 'sapling321!');
      expect(success).toBe(true);
    });

    expect(result.current.user).toBeDefined();
    expect(result.current.user.role).toBe('parent');
    expect(result.current.child).toBeDefined();
  });

  it('should login educator with correct credentials', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      const success = result.current.login('educator@saplingdemo.com', 'sapling123!');
      expect(success).toBe(true);
    });

    expect(result.current.user).toBeDefined();
    expect(result.current.user.role).toBe('educator');
    expect(result.current.child).toBeNull();
  });

  it('should reject invalid credentials', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      const success = result.current.login('wrong@email.com', 'wrongpass');
      expect(success).toBe(false);
    });

    expect(result.current.user).toBeNull();
  });

  it('should logout user', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.login('parent@saplingdemo.com', 'sapling321!');
    });

    expect(result.current.user).toBeDefined();

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.child).toBeNull();
  });
});