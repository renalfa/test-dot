import { create } from "zustand";

// Dummy credentials
const CREDENTIALS = {
  username: "admin",
  password: "password",
};

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {
    if (
      username === CREDENTIALS.username &&
      password === CREDENTIALS.password
    ) {
      set({ isAuthenticated: true, user: username });
      return true;
    }

    return false;
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
