import { component$ } from '@builder.io/qwik';

import spanishFlag from '~/media/images/resume/spanish-flag.svg';
import englishFlag from '~/media/images/resume/english-flag.svg';

export const Languages = component$(() => {
  return (
    <div class="flex flex-col gap-3">
      <p class="text-sm text-slate-500">Languages</p>

      <ul class="flex flex-col gap-3">
        <li class="flex gap-2">
          <img src={spanishFlag} alt="spanish flag" width={36} height={36} />

          <div class="flex flex-col gap-1">
            <p class="text-slate-700">Spanish</p>

            <p class="leading-4 text-slate-500">Native</p>
          </div>
        </li>

        <li class="flex gap-2">
          <img src={englishFlag} alt="english flag" width={36} height={36} />

          <div class="flex flex-col gap-1">
            <p class="text-slate-700">English</p>

            <p class="leading-4 text-slate-500">B2</p>
          </div>
        </li>
      </ul>
    </div>
  );
});
