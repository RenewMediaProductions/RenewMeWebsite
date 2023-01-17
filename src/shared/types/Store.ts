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
