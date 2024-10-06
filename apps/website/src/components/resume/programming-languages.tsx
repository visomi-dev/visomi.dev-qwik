import { component$ } from '@builder.io/qwik';

import typescriptLogo from '~/assets/images/resume/logos/typescript.svg';
import javascriptLogo from '~/assets/images/resume/logos/javascript.svg';
import golangLogo from '~/assets/images/resume/logos/golang.svg';
import cSharpLogo from '~/assets/images/resume/logos/csharp.svg';
import dartLogo from '~/assets/images/resume/logos/dart.svg';
import pythonLogo from '~/assets/images/resume/logos/python.svg';

interface ProgrammingLanguage {
  name: string;
  logo: string;
}

const languages: ProgrammingLanguage[] = [
  {
    name: 'TypeScript',
    logo: typescriptLogo,
  },
  {
    name: 'JavaScript',
    logo: javascriptLogo,
  },
  {
    name: 'Go',
    logo: golangLogo,
  },
  {
    name: 'C#',
    logo: cSharpLogo,
  },
  {
    name: 'Dart',
    logo: dartLogo,
  },
  {
    name: 'Python',
    logo: pythonLogo,
  },
];

export const ProgrammingLanguages = component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-slate-900">
        {$localize`:@@resumeProgrammingLanguagesTitle:Programming Languages`}
      </h3>

      <ul class="grid grid-cols-3 gap-2 md:grid-cols-6">
        {languages.map((language) => {
          return (
            <li
              key={language.name}
              class="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2 md:py-3"
            >
              <img
                class="h-12 max-h-12 w-12 max-w-12"
                height={48}
                width={48}
                src={language.logo}
                alt={language.name}
              />

              <span class="text-center text-xs text-slate-900">
                {language.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
