import { component$ } from '@builder.io/qwik';

import abiLogo from '~/assets/images/resume/logos/ab-inbev.svg';
import solidusCapitalLogo from '~/assets/images/resume/logos/solidus-capital.svg';
import kavakLogo from '~/assets/images/resume/logos/kavak.svg';
import avanttiaLogo from '~/assets/images/resume/logos/avanttia.svg';
import crezeLogo from '~/assets/images/resume/logos/creze.svg';

interface Job {
  company: string;
  logo: string;
  title: string;
  start: string;
  description: string;
  end?: string;
}

const jobs: Job[] = [
  {
    company: 'AB InBev',
    logo: abiLogo,
    title: $localize`:@@resumeExpABITitle:Tech Lead`,
    description: $localize`:@@resumeExpABIDesc:Design and develop a new Archit with React, Node.js on Azure; Develop a Web Scraper and Power BI reports.`,
    start: $localize`:@@resumeExpABIStart:Aug 2022`,
  },
  {
    company: 'Solidus Capital',
    logo: solidusCapitalLogo,
    title: $localize`:@@resumeExpSCTitle:Head of Tech`,
    description: $localize`:@@resumeExpSCDesc:Design and develop a new Archit with React, Node.js, SLS and AWS; Team Management and Product Development.`,
    start: $localize`:@@resumeExpSCStart:Jul 2021`,
    end: $localize`:@@resumeExpSCEnd:Jul 2022`,
  },
  {
    company: 'Kavak',
    logo: kavakLogo,
    title: $localize`:@@resumeExpKavakTitle:Chapter Lead`,
    description: $localize`:@@resumeExpKavakDesc:Migration to NX and AWS, develop with Angular and SLS; use of multiple databases, AWS Cognito integration.`,
    start: $localize`:@@resumeExpKavakStart:Aug 2020`,
    end: $localize`:@@resumeExpKavakEnd:Jun 2021`,
  },
  {
    company: 'Avanttia',
    logo: avanttiaLogo,
    title: $localize`:@@resumeExpAvanttiaTitle:Tech Lead`,
    description: $localize`:@@resumeExpAvanttiaDesc:Design and develop a new Archit of fiscal apps with Node.js, PostgreSQL, Vue, and SAT services. Team management.`,
    start: $localize`:@@resumeExpAvanttiaStart:Oct 2018`,
    end: $localize`:@@resumeExpAvanttiaEnd:Jul 2020`,
  },
  {
    company: 'Creze',
    logo: crezeLogo,
    title: $localize`:@@resumeExpCrezeTitle:Tech Lead`,
    description: $localize`:@@resumeExpCrezeDesc:Develop web apps with React, Node.js, PostgreSQL; create Vue dashboards and deploy to AWS.`,
    start: $localize`:@@resumeExpCrezeStart:Jun 2017`,
    end: $localize`:@@resumeExpCrezeEnd:Aug 2018`,
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
              class="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-slate-50 px-4 py-2 md:flex-nowrap md:py-3"
            >
              <div class="flex flex-col gap-2">
                <p class="text-sm text-slate-600">
                  {job.start} - {job.end ?? 'Present'}
                </p>

                <div class="flex flex-1 gap-2 md:flex-row">
                  <div class="h-12 w-12">
                    <img src={job.logo} height={48} width={48} />
                  </div>

                  <div class="flex flex-1 flex-col gap-1">
                    <p class="text-slate-500">{job.title}</p>
                    <p class="text-slate-700">{job.company}</p>
                  </div>
                </div>
              </div>

              <p class="text-sm md:max-w-[15rem]">{job.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
