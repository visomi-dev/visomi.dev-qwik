import { component$ } from '@builder.io/qwik';

import nivePreview from '~/assets/images/nive-preview.svg';

import { nav } from '../constants';

interface Project {
  id: string;
  title: string;
  caption: string;
  description: string;
  technologies: {
    name: string;
    color: string;
  }[];
  preview: string;
  link: string;
  wip: boolean;
}

const projects: Project[] = [
  {
    id: 'nive',
    title: 'Nive',
    caption: $localize`:@@homeContentProjectNiveCaption:from financial chaos to nirvana`,
    description: $localize`:@@homeContentProjectNiveDesc:Nive is a personal finance management app that helps you to control your money.`,
    technologies: [
      {
        name: 'Angular',
        color: /* tw */ 'bg-red-300',
      },
      {
        name: 'Nest',
        color: /* tw */ 'bg-gray-400',
      },
    ],
    preview: nivePreview,
    link: 'https://nive.visomi.dev',
    wip: true,
  },
];

export const Projects = component$(() => {
  return (
    <figure id={nav.projects}>
      <figcaption>
        <h2 class="text-4xl font-bold capitalize">
          {$localize`:@@homeContentProjectsTitle:Projects`}
        </h2>
      </figcaption>

      <ul class="mt-6">
        {projects.map(
          ({
            id,
            title,
            caption,
            description,
            technologies,
            preview,
            link,
            wip,
          }) => (
            <li key={id} id={`${id}-project`}>
              <div class="flex flex-col gap-2">
                <div class="flex flex-col">
                  <h3 class="text-2xl font-semibold">
                    <a href={link} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  </h3>

                  <h4 class="text-sm italic">{caption}</h4>
                </div>

                <hr />

                <p class="mt-2">{description}</p>

                <div class="mt-2 flex gap-2">
                  {technologies.map(({ name, color }) => (
                    <span
                      key={`${id}-t-${name}`}
                      class={['rounded-full px-4 py-1 text-sm', color]}
                    >
                      {name}
                    </span>
                  ))}
                </div>

                <div class="flex flex-col">
                  <img
                    class="mx-auto my-4"
                    src={preview}
                    alt={caption}
                    width={240}
                    height={520}
                  />

                  {wip && (
                    <p class="text-center text-sm capitalize text-yellow-400">
                      {$localize`:@@homeContentProjectsWIP:Work In Progress...`}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </figure>
  );
});
