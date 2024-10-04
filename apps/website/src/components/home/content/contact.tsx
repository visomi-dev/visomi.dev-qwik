import { component$ } from '@builder.io/qwik';

import { nav } from '../constants';

interface WebLink {
  label: string;
  href: string;
}

const webLinks: WebLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/visomi-dev',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/visomi_dev',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/visomi',
  },
  {
    label: 'WakaTime',
    href: 'https://wakatime.com/@visomi',
  },
];

export const Contact = component$(() => {
  return (
    <figure id={nav.contact}>
      <figcaption>
        <h2 class="text-4xl font-bold">{$localize`Do you have something in mind?`}</h2>
      </figcaption>

      <div class="mt-6 flex flex-col gap-3">
        <p>
          {$localize`Feel free to contact me at:`}

          <a
            class="ml-1 text-blue-400 underline"
            href="mailto:visomi.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            visomi.dev@gmail.com
          </a>
        </p>

        <div class="flex flex-col">
          <p>{$localize`or you can find me on:`}</p>

          <div class="flex flex-wrap gap-3">
            {webLinks.map((webLink) => (
              <a
                key={webLink.href}
                class="text-blue-400 underline md:hover:text-opacity-75"
                href={webLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {webLink.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
});
