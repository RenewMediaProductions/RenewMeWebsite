import { ContactWrapper } from './index.styled';

import axios from 'axios';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const defaultFormData = {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post('/api/mailer/send', {
        to: 'support@myrenewme.com',
        subject: `Support: ${formData.name}`,
        html: `
          <p>Email: ${formData.email}</p>
          <p>Message: ${formData.message}</p>
        `,
      });
      setFormData(defaultFormData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.debug({ error });
    }
    setLoading(false);
  };

  return (
    <ContactWrapper className="relative ">
      <div
        className={classNames(
          `container isolate mx-auto flex h-full flex-col gap-8 px-6 py-36`,
          `lg:grid lg:grid-cols-2 lg:gap-x-32`,
          `xl:pt-40`
        )}
      >
        <div className="flex flex-col lg:col-[1/-1] lg:row-[1/2] lg:items-center lg:pb-20">
          <h1
            className={classNames(
              `pb-4 text-start font-['Gilroy'] text-3xl font-[600] leading-10 text-black-1`,
              `md:text-4xl`,
              `lg:text-center lg:text-5xl`,
              `xl:text-6xl`
            )}
          >
            Contact Us
          </h1>
          <p
            className={classNames(
              `text-start font-['Gilroy'] text-base font-[500] text-[#828282]`,
              `md:text-lg`,
              `lg:text-center lg:text-xl`,
              `xl:text-2xl`
            )}
          >
            Get in touch with RenewMe team and we will get back to you!
          </p>
        </div>
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-4 shadow-[0px_16px_24px_0px_rgba(0,0,0,0.08)] lg:p-8">
          <div>
            <h2 className="pb-2 text-[24px] font-[600] text-[#333] xl:text-[32px]">
              Send us a message!
            </h2>
            <p className="text-sm font-[500] text-[#828282] xl:text-base">
              Do you have any concern or questions? <br />
              Please click on help & support or contact us
            </p>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-[500] text-[#828282] xl:text-base">
                Your Name
              </label>
              <input
                className="h-[45px] w-full rounded-lg border border-[#E0E0E0] bg-white px-3 outline-none xl:h-[56px]"
                type="text"
                id="name"
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-[500] text-[#828282] xl:text-base">
                Your Email
              </label>
              <input
                className="h-[45px] w-full rounded-lg border border-[#E0E0E0] bg-white px-3 outline-none xl:h-[56px]"
                type="email"
                id="email"
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-[500] text-[#828282] xl:text-base">
                How can we help you?
              </label>
              <textarea
                className="h-[80px] w-full rounded-lg border border-[#E0E0E0] bg-white px-3 pt-3 outline-none"
                id="message"
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                value={formData.message}
              />
            </div>
            <button
              className={classNames(
                `h-[56px] w-full rounded-lg bg-[#00C0C5] font-['Gilroy'] text-base font-[600] text-white`
              )}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Sending' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-8 lg:gap-16 lg:pt-7 xl:gap-20 xl:pt-10">
          <div className="flex flex-col gap-2 xl:gap-4">
            <label className="text-sm font-[500] text-[#828282] xl:text-base">Our Location</label>
            <Link href="https://goo.gl/maps/vLpKV6XiUAScUvTY7">
              <p className="text-[24px] font-[600] text-[#333] xl:text-[32px]">
                299 Camino Gardens Blvd
                <br />
                Suite 100 <br />
                Boca Raton, Florida 33432
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <label className="text-sm font-[500] text-[#828282] xl:text-base">Call us at</label>
            <Link href="tel:8005090244">
              <p className="text-[24px] font-[600] text-[#333] xl:text-[32px]">(800) 509-0244</p>
            </Link>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <label className="text-sm font-[500] text-[#828282] xl:text-base">Email us at</label>
            <Link href="mailto:support@myrenewme.com">
              <p className="text-[24px] font-[600] text-[#333] xl:text-[32px]">
                support@myrenewme.com
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          `absolute bottom-0 z-[-1] h-[70%] w-full`,
          `bg-[radial-gradient(133.19%_216.23%_at_50.00%_216.23%,#F3B5A6_0%,rgba(243,181,166,0.00)_97.52%)]`
        )}
      ></div>
    </ContactWrapper>
  );
};

export default Contact;
