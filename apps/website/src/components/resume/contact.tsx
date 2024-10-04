import { component$ } from '@builder.io/qwik';

import emailIcon from '~/assets/images/resume/email-icon.svg';
import websiteIcon from '~/assets/images/resume/website-icon.svg';
import phoneIcon from '~/assets/images/resume/phone-icon.svg';
import addressIcon from '~/assets/images/resume/address-icon.svg';

export const Contact = component$(() => {
  return (
    <ul class="flex flex-col gap-3">
      <li class="flex gap-2">
        <img
          class="max-w-[36px]"
          src={emailIcon}
          alt="email icon"
          width={36}
          height={36}
        />

        <div class="flex flex-col gap-1">
          <p class="leading-4 text-slate-500">{$localize`Email`}</p>

          <a href="mailto:visomi.dev@gmail.com" class="text-slate-700">
            visomi.dev@gmail.com
          </a>
        </div>
      </li>

      <li class="flex gap-2">
        <img src={websiteIcon} alt="website icon" width={36} height={36} />

        <div class="flex flex-col gap-1">
          <p class="leading-4 text-slate-500">{$localize`Website`}</p>

          <a href="https://visomi.dev" target="_blank" class="text-slate-700">
            https://visomi.dev
          </a>
        </div>
      </li>

      <li class="flex gap-2">
        <img src={phoneIcon} alt="phone icon" width={36} height={36} />

        <div class="flex flex-col gap-1">
          <p class="leading-4 text-slate-500">{$localize`Phone`}</p>

          <a href="tel:+52-55-87-60-67-59" class="text-slate-700">
            (+52) 55 8760 6759
          </a>

          <p class="hidden text-xs text-slate-400">
            {$localize`Only WhatsApp, Telegram or Messages`}
          </p>
        </div>
      </li>

      <li class="flex gap-2">
        <img src={addressIcon} alt="address icon" width={36} height={36} />

        <div class="flex flex-col gap-1">
          <p class="leading-4 text-slate-500">{$localize`Address`}</p>

          <p class="text-slate-700">{$localize`Mexico City, Mexico`}</p>
        </div>
      </li>
    </ul>
  );
});
