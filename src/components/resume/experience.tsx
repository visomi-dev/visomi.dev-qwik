// import type { Component } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

import abiLogo from '~/media/images/resume/ab-inbev-logo.svg';

interface Job {
  company: string;
  logo: string;
  title: string;
  // description: Component<{}>;
  start: string;
  end?: string;
}

const jobs: Job[] = [
  {
    company: 'AB InBev',
    logo: abiLogo,
    title: 'Sr Software Engineer',
    // description: component$(() => {
    //   return (
    //     <div class="flex flex-col gap-2 p-2">
    //       <p class="text-slate-500">
    //         Serverless Microservices Developer (AWS Lambda & JavaScript)
    //       </p>

    //       <ul class="flex list-disc flex-col gap-2 pl-5">
    //         <li>
    //           <strong>Developed and Maintained:</strong> Spearheaded the
    //           creation and continuous improvement of scalable serverless
    //           microservices using AWS Lambda and JavaScript, ensuring high
    //           availability and optimal performance.
    //         </li>

    //         <li>
    //           <strong>Testing Frameworks:</strong> Demonstrated proficiency in
    //           writing robust unit tests utilizing Mocha, Chai, and Sinon,
    //           enhancing code reliability and maintainability.
    //         </li>

    //         <li>
    //           <strong>Database Management:</strong> Worked extensively with
    //           MongoDB, and implemented a custom database driver, achieving
    //           improved performance and customization to meet specific
    //           operational needs.
    //         </li>
    //       </ul>
    //     </div>
    //   );
    // }),
    start: '2022-08-15',
  },
];

export const Experience = component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-slate-900">Experience</h3>

      <ul class="gap flex flex-col">
        {jobs.map((job) => {
          return (
            <li
              key={job.company}
              class="flex items-start gap-2 rounded-lg bg-slate-100 px-3 py-2"
            >
              <img src={job.logo} height={24} width={24} />

              <div class="flex flex-col gap-1">
                <p class="text-slate-500">{job.title}</p>
                <p class="text-slate-700">{job.company}</p>

                {/* <job.description /> */}
              </div>

              <span class="text-sm text-slate-600">
                {job.start} - {job.end ?? 'Present'}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
