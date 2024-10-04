import { component$ } from '@builder.io/qwik';

import reactLogo from '~/assets/images/resume/logos/react.svg';
import angularLogo from '~/assets/images/resume/logos/angular.svg';
import vueLogo from '~/assets/images/resume/logos/vue.svg';
import nestjsLogo from '~/assets/images/resume/logos/nestjs.svg';
import expressLogo from '~/assets/images/resume/logos/express.svg';
import koaLogo from '~/assets/images/resume/logos/koa.svg';
import nextjsLogo from '~/assets/images/resume/logos/nextjs.svg';
import nuxtLogo from '~/assets/images/resume/logos/nuxt.svg';
import flutterLogo from '~/assets/images/resume/logos/flutter.svg';

interface Framework {
  name: string;
  logo: string;
}

const frameworks: Framework[] = [
  {
    name: 'React',
    logo: reactLogo,
  },
  {
    name: 'Angular',
    logo: angularLogo,
  },
  {
    name: 'Vue',
    logo: vueLogo,
  },
  {
    name: 'NestJS',
    logo: nestjsLogo,
  },
  {
    name: 'Express',
    logo: expressLogo,
  },
  {
    name: 'Koa',
    logo: koaLogo,
  },
  {
    name: 'NextJS',
    logo: nextjsLogo,
  },
  {
    name: 'Nuxt',
    logo: nuxtLogo,
  },
  {
    name: 'Flutter',
    logo: flutterLogo,
  },
];

export const Frameworks = component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-slate-900">Frameworks and Libs</h3>

      <ul class="grid grid-cols-3 gap-2 md:grid-cols-6">
        {frameworks.map((framework) => {
          return (
            <li
              key={framework.name}
              class="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2 md:py-3"
            >
              <img
                class="h-12 max-h-12 w-12 max-w-12"
                height={48}
                width={48}
                src={framework.logo}
                alt={framework.name}
              />

              <span class="text-center text-xs text-slate-900">
                {framework.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
