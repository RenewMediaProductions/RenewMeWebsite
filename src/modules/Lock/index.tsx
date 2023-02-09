import { LOCK_IMAGES } from './constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import React, { ChangeEvent, ReactNode, useState } from 'react';
import LogoDarkSvg from 'shared/assets/svg/logo-dark.svg';
import LogoLockSvg from 'shared/assets/svg/logo-lock.svg';
import { useAuthStore } from 'shared/store/Auth';

const Lock: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuth, unlock } = useAuthStore();

  const [password, setPassword] = useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setPassword(value);
  };

  const handleClickUnlock = () => unlock(password);

  return (
    <React.Fragment>
      <div
        className={classNames(
          `fixed top-0 flex h-full w-screen flex-col items-center justify-center gap-3 bg-[rgba(83,158,216,0.3)] p-5 backdrop-blur-[40px]`,
          !isAuth && 'z-50'
        )}
      >
        <div
          className={classNames(
            `relative flex h-full max-h-[614px] w-full max-w-[540px] flex-col items-center overflow-hidden rounded-3xl bg-white px-5 pt-10`
          )}
        >
          <LogoDarkSvg className="mb-[26px] h-[40px] w-auto" />
          <p
            className={classNames(
              `mb-[6.5px] max-w-[336px] text-center font-['Gilroy'] text-[24px] font-[600] leading-[130%] text-[#3A3A3B]`,
              `md:max-w-[unset] md:text-[28px]`
            )}
          >
            A refreshing brand inspiring life balance and peace of mind.
          </p>
          <p
            className={classNames(
              `max-w-[336px] px-7 text-center font-['Gilroy'] text-sm font-[500] text-[#828282]`,
              `md:max-w-[unset] md:px-14 md:text-base`
            )}
          >
            Welcome! We are currently making some very exciting updates. Stay tuned!
          </p>
          <div className="absolute bottom-[-50px] h-[70%] w-full">
            <LogoLockSvg className="h-auto w-full" />
          </div>
          <div className={classNames(`absolute bottom-0 h-full max-h-[50%]`)}>
            <div className="absolute bottom-0 h-[35%] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_82.29%)]"></div>
            <ImageFuture
              className={classNames(`h-full w-auto `, `[@media(max-height:770px)]:hidden`)}
              src={LOCK_IMAGES.phone.url}
              height={LOCK_IMAGES.phone.height}
              width={LOCK_IMAGES.phone.width}
              alt={LOCK_IMAGES.phone.alt}
              priority
            />
          </div>
        </div>
        <div
          className={classNames(
            `flex h-full max-h-[248px] w-full max-w-[540px] flex-col rounded-3xl bg-white px-[32px] py-[40px]`
          )}
        >
          <label
            htmlFor="password"
            className={classNames(`mb-3 font-['Gilroy'] text-base font-[500] text-[#828282]`)}
          >
            Password
          </label>
          <input
            className={classNames(
              `mb-6 h-[56px] w-full rounded-lg border border-[#E0E0E0] bg-white px-3 outline-none`
            )}
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            onKeyUp={e => e.key === 'Enter' && handleClickUnlock()}
            value={password}
          />
          <button
            className={classNames(
              `h-[56px] rounded-lg bg-[#00C0C5] font-['Gilroy'] text-base font-[600] text-white`
            )}
            onClick={handleClickUnlock}
          >
            Welcome!
          </button>
        </div>
      </div>
      {children}
    </React.Fragment>
  );
};

export default Lock;
