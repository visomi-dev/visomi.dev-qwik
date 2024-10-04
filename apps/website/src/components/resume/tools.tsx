import { component$ } from '@builder.io/qwik';

import vsCodeLogo from '~/assets/images/resume/logos/visual-studio-code.svg';
import figmaLogo from '~/assets/images/resume/logos/figma.svg';
import notionLogo from '~/assets/images/resume/logos/notion.svg';
import jiraLogo from '~/assets/images/resume/logos/jira.svg';
import gitLogo from '~/assets/images/resume/logos/git.svg';
import postmanLogo from '~/assets/images/resume/logos/postman.svg';

interface Tool {
  name: string;
  logo: string;
}

const tools: Tool[] = [
  {
    name: 'VS Code',
    logo: vsCodeLogo,
  },
  {
    name: 'Notion',
    logo: notionLogo,
  },
  {
    name: 'Jira',
    logo: jiraLogo,
  },
  {
    name: 'Figma',
    logo: figmaLogo,
  },
  {
    name: 'Git',
    logo: gitLogo,
  },
  {
    name: 'Postman',
    logo: postmanLogo,
  },
];

export const Tools = component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-slate-900">{$localize`Tools`}</h3>

      <ul class="grid grid-cols-3 gap-2 md:grid-cols-6">
        {tools.map((tool) => {
          return (
            <li
              key={tool.name}
              class="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2 md:py-3"
            >
              <img
                class="h-12 max-h-12 w-12 max-w-12"
                height={48}
                width={48}
                src={tool.logo}
                alt={tool.name}
              />

              <span class="text-center text-xs text-slate-900">
                {tool.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
