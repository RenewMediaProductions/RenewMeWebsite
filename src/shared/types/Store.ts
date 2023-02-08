import { Themes } from './Theme';

type StoreResponse<T = any> = {
  data: T;
  error: any | null;
} | void;

export interface ThemeStore {
  /* States */
  theme: Themes;

  /* Computed States */
  // computed: {};

  /* Functions */
  setTheme: (theme: Themes) => StoreResponse;
}

export interface AuthStore {
  /* States */
  isAuth: boolean;

  /* Computed States */
  // computed: {};

  /* Functions */
  unlock: (password: string) => StoreResponse;
  verify: () => StoreResponse;
}
