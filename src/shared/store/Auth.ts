import { addMinutes } from 'date-fns';
import { LockLocalStorage } from 'modules/Lock/constants';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { WEB_PASSWORD } from 'shared/configs/App';
import { AuthStore } from 'shared/types/Store';
import LocalStorageUtil from 'shared/utils/LocalStorage';

export const useAuthStore = create(
  immer<AuthStore>(set => ({
    /* States */
    isAuth: true,

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
        const currentExpiration = LocalStorageUtil.get(LockLocalStorage.Expiration);
        const hasExpiration = !!currentExpiration;
        const expiration = hasExpiration ? new Date(currentExpiration) : new Date();
        const now = new Date();

        if (now.getTime() >= expiration.getTime()) {
          state.isAuth = false;
          LocalStorageUtil.set(LockLocalStorage.Expiration, '');
        } else {
          state.isAuth = true;
        }
      });
    },
  }))
);
