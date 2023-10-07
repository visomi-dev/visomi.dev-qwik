import { component$ } from '@builder.io/qwik';

import abiLogo from '~/media/images/resume/logos/ab-inbev.svg';
import solidusCapitalLogo from '~/media/images/resume/logos/solidus-capital.svg';
import kavakLogo from '~/media/images/resume/logos/kavak.svg';
import avanttiaLogo from '~/media/images/resume/logos/avanttia.svg';
import crezeLogo from '~/media/images/resume/logos/creze.svg';

interface Job {
  company: string;
  logo: string;
  title: string;
  start: string;
  end?: string;
}

const jobs: Job[] = [
  {
    company: 'AB InBev',
    logo: abiLogo,
    title: 'Tech Lead',
    start: 'Aug 2022',
  },
  {
    company: 'Solidus Capital',
    logo: solidusCapitalLogo,
    title: 'Head of Tech',
    start: 'Jul 2021',
    end: 'Jul 2022 (1yr)',
  },
  {
    company: 'Kavak',
    logo: kavakLogo,
    title: 'Chapter Lead',
    start: 'Aug 2020',
    end: 'Jun 2021 (10mos)',
  },
  {
    company: 'Avanttia',
    logo: avanttiaLogo,
    title: 'Tech Lead',
    start: 'Oct 2018',
    end: 'Jul 2020 (1yr 10mos)',
  },
  {
    company: 'Creze',
    logo: crezeLogo,
    title: 'Tech Lead',
    start: 'Jun 2017',
    end: 'Aug 2018 (1yr 2mos)',
  },
];

export const Experience = component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-slate-900">Experience</h3>

      <ul class="gap flex flex-col gap-2">
        {jobs.map((job) => {
          return (
            <li
              key={job.company}
              class="flex items-center gap-3 rounded-lg bg-slate-100 px-4 py-2 md:py-3"
            >
              <img src={job.logo} height={52} width={52} />

              <div class="flex flex-1 flex-col gap-2 md:flex-row">
                <div class="flex flex-1 flex-col gap-1">
                  <p class="text-slate-500">{job.title}</p>
                  <p class="text-slate-700">{job.company}</p>
                </div>

                <p class="text-sm text-slate-600">
                  {job.start} - {job.end ?? 'Present'}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
