import { component$ } from '@builder.io/qwik';

import angularLogo from '~/media/images/resume/logos/angular.svg';
import nestjsLogo from '~/media/images/resume/logos/nestjs.svg';
import flutterLogo from '~/media/images/resume/logos/flutter.svg';
import typescriptLogo from '~/media/images/resume/logos/typescript.svg';
import golangLogo from '~/media/images/resume/logos/golang.svg';
import pythonLogo from '~/media/images/resume/logos/python.svg';

interface Preference {
  name: string;
  logo: string;
}

const preferences: Preference[] = [
  {
    name: 'TypeScript',
    logo: typescriptLogo,
  },
  {
    name: 'Go',
    logo: golangLogo,
  },
  {
    name: 'Python',
    logo: pythonLogo,
  },
  {
    name: 'Angular',
    logo: angularLogo,
  },
  {
    name: 'NestJS',
    logo: nestjsLogo,
  },
  {
    name: 'Flutter',
    logo: flutterLogo,
  },
];

export const TechPreferences = component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-slate-900">
        Frameworks and Languages Preferences
      </h3>

      <ul class="grid grid-cols-3 gap-2 md:grid-cols-6">
        {preferences.map((preference) => {
          return (
            <li
              key={preference.name}
              class="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2 md:py-3"
            >
              <img
                class="max-w-12 h-12 max-h-12 w-12"
                height={48}
                width={48}
                src={preference.logo}
                alt={preference.name}
              />

              <span class="text-center text-xs text-slate-900">
                {preference.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
