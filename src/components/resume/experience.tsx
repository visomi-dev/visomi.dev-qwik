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
  description: string;
  end?: string;
}

const jobs: Job[] = [
  {
    company: 'AB InBev',
    logo: abiLogo,
    title: 'Tech Lead',
    description:
      'Developed serverless microservices with AWS Lambda connected to MongoDB, and created web scraper using NestJs, Puppeter and Prisma.',
    start: 'Aug 2022',
  },
  {
    company: 'Solidus Capital',
    logo: solidusCapitalLogo,
    title: 'Head of Tech',
    description:
      'Designed architecture with AWS Lambda, Web and iOS apps with Next.js and React Native, requirements gathering and team management.',
    start: 'Jul 2021',
    end: 'Jul 2022',
  },
  {
    company: 'Kavak',
    logo: kavakLogo,
    title: 'Chapter Lead',
    description:
      'Migrated to a new architecture with NX, Angular and Serverless; used multiple databases, integrated AWS Cognito.',
    start: 'Aug 2020',
    end: 'Jun 2021',
  },
  {
    company: 'Avanttia',
    logo: avanttiaLogo,
    title: 'Tech Lead',
    description:
      'Managed software projects for fiscal apps with agile, developed microservices with Node.js, SPA with Vue, and integrated SAT services.',
    start: 'Oct 2018',
    end: 'Jul 2020',
  },
  {
    company: 'Creze',
    logo: crezeLogo,
    title: 'Tech Lead',
    description:
      'Developed web apps with React, Node.js RESTful services with PostgreSQL; created Vue dashboards and deployed on AWS S3.',
    start: 'Jun 2017',
    end: 'Aug 2018',
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
              class="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-slate-50 px-4 py-2 md:py-3"
            >
              <div class="flex flex-col gap-2">
                <p class="text-sm text-slate-600">
                  {job.start} - {job.end ?? 'Present'}
                </p>

                <div class="flex flex-1 gap-2 md:flex-row">
                  <img src={job.logo} height={48} width={48} />

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
