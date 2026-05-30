import { create } from "zustand";

import api from "../services/api";

interface User {

  id?: string;

  username?: string;

  email?: string;
}

interface AuthStore {

  user: User | null;

  token: string | null;

  loading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => void;
}

export const useAuthStore =
  create<AuthStore>(
    (set) => ({

      user: null,

      token:
        localStorage.getItem(
          "snowchat_token"
        ),

      loading: false,

      login: async (
        email,
        password
      ) => {

        set({
          loading: true
        });

        try {

          const res =
            await api.post(
              "/auth/login",
              {
                email,
                password
              }
            );

          const token =
            res.data.token;

          localStorage.setItem(
            "snowchat_token",
            token
          );

          set({
            token,
            loading: false
          });

        } catch (error) {

          console.error(
            error
          );

          set({
            loading: false
          });

        }
      },

      register: async (
        username,
        email,
        password
      ) => {

        try {

          await api.post(
            "/auth/register",
            {
              username,
              email,
              password
            }
          );

        } catch (error) {

          console.error(
            error
          );

        }
      },

      logout: () => {

        localStorage.removeItem(
          "snowchat_token"
        );

        set({
          user: null,
          token: null
        });

      }
    })
  );
