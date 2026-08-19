import { create } from 'zustand';
import { DEMO_USERS } from '../data/mockData';

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('hireloop_user') || 'null'),
  token: localStorage.getItem('hireloop_token') || null,
  isAuthenticated: !!localStorage.getItem('hireloop_token'),

  // Standard login
  login: (userData, token = 'mock-jwt-token') => {
    localStorage.setItem('hireloop_user', JSON.stringify(userData));
    localStorage.setItem('hireloop_token', token);
    set({ user: userData, token, isAuthenticated: true });
  },

  // Instant 1-click Demo Login for Testing (Student, Recruiter, Admin)
  loginAsDemo: (role) => {
    const demoUser = DEMO_USERS[role] || DEMO_USERS.student;
    localStorage.setItem('hireloop_user', JSON.stringify(demoUser));
    localStorage.setItem('hireloop_token', demoUser.token);
    set({ user: demoUser, token: demoUser.token, isAuthenticated: true });
    return demoUser;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('hireloop_user');
    localStorage.removeItem('hireloop_token');
    set({ user: null, token: null, isAuthenticated: false });
  }
}));

export default useAuthStore;
