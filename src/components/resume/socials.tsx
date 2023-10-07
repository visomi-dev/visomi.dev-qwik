import { component$ } from '@builder.io/qwik';

import twitterIcon from '~/media/images/resume/logos/twitter.svg';
import linkedinIcon from '~/media/images/resume/logos/linkedin.svg';
import githubIcon from '~/media/images/resume/logos/github.svg';
import wakatimeIcon from '~/media/images/resume/logos/wakatime.svg';

export const Socials = component$(() => {
  return (
    <div class="flex flex-col gap-3">
      <p class="text-sm text-slate-500">Socials</p>

      <ul class="flex flex-col gap-3">
        <li class="flex gap-2">
          <img src={githubIcon} alt="github icon" width={36} height={36} />

          <div class="flex flex-col gap-1">
            <p class="leading-4 text-slate-500">GitHub</p>

            <a
              href="https://github.com/visomi-dev"
              class="text-slate-700"
              target="_blank"
            >
              visomi-dev
            </a>
          </div>
        </li>

        <li class="flex gap-2">
          <img src={linkedinIcon} alt="address icon" width={36} height={36} />

          <div class="flex flex-col gap-1">
            <p class="leading-4 text-slate-500">Linkedin</p>

            <a
              href="https://www.linkedin.com/in/visomi"
              class="text-slate-700"
              target="_blank"
            >
              visomi
            </a>
          </div>
        </li>

        <li class="flex gap-2">
          <img src={twitterIcon} alt="twitter icon" width={36} height={36} />

          <div class="flex flex-col gap-1">
            <p class="leading-4 text-slate-500">Twitter</p>

            <a
              href="https://twitter.com/visomi_dev"
              class="text-slate-700"
              target="_blank"
            >
              @visomi_dev
            </a>
          </div>
        </li>

        <li class="flex gap-2">
          <img src={wakatimeIcon} alt="wakatime icon" width={36} height={36} />

          <div class="flex flex-col gap-1">
            <p class="leading-4 text-slate-500">WakaTime</p>

            <a
              href="https://wakatime.com/@visomi"
              target="_blank"
              class="text-slate-700"
            >
              @visomi
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
});
