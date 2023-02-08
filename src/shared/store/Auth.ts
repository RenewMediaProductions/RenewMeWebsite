import { addMinutes } from 'date-fns';
import { LockLocalStorage } from 'modules/Lock/constants';
import { WEB_PASSWORD } from 'shared/configs/App';
import { AuthStore } from 'shared/types/Store';
import LocalStorageUtil from 'shared/utils/LocalStorage';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useAuthStore = create(
  immer<AuthStore>(set => ({
    /* States */
    isAuth: false,

    /* Computed States */
    // computed: {},

    /* Functions */
    unlock: (password: string) => {
      set((state: AuthStore) => {
        if (password === WEB_PASSWORD) {
          state.isAuth = true;
          const expiration = addMinutes(new Date(), 15);
          LocalStorageUtil.set(LockLocalStorage.Expiration, expiration);
        }
      });
    },
    verify: () => {
      set((state: AuthStore) => {
        const expiration = new Date(LocalStorageUtil.get(LockLocalStorage.Expiration) || '');
        const now = new Date();

        if (expiration < now) {
          state.isAuth = false;
          LocalStorageUtil.set(LockLocalStorage.Expiration, '');
        }
      });
    },
  }))
);
