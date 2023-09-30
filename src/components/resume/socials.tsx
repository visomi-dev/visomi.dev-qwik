import { component$ } from '@builder.io/qwik';

import emailIcon from '~/media/images/resume/email-icon.svg';
import websiteIcon from '~/media/images/resume/website-icon.svg';
import phoneIcon from '~/media/images/resume/phone-icon.svg';
import addressIcon from '~/media/images/resume/address-icon.svg';

export const Socials = component$(() => {
  return (
    <ul class="flex flex-col gap-2">
      <li class="flex gap-2">
        <img src={emailIcon} alt="email icon" width={20} height={20} />

        <div class="flex flex-col">
          <p class="text-slate-500">Email</p>

          <a
            href="mailto:visomi.dev@gmail.com"
            class="text-slate-600 hover:text-slate-700"
          >
            visomi.dev@gmail.com
          </a>
        </div>
      </li>

      <li class="flex gap-2">
        <img src={websiteIcon} alt="website icon" width={20} height={20} />

        <a
          href="https://visomi.dev"
          target="_blank"
          class="text-slate-500 hover:text-slate-700"
        >
          https://visomi.dev
        </a>
      </li>

      <li class="flex gap-2">
        <img src={phoneIcon} alt="phone icon" width={20} height={20} />

        <a
          href="tel:+52-55-87-60-67-59"
          class="text-slate-500 hover:text-slate-700"
        >
          +52-55-87-60-67-59
        </a>
      </li>

      <li class="flex gap-2">
        <img src={addressIcon} alt="address icon" width={20} height={20} />

        <span class="text-slate-500 hover:text-slate-700">CDMX, MX</span>
      </li>
    </ul>
  );
});
