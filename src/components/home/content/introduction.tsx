import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import visomi from '~/media/images/visomi-illustration.png';

import { RESUME } from '~/constants/routes';

import { nav } from '../constants';

export const Introduction = component$(() => {
  return (
    <figure
      id={nav.introduction}
      class="-mt-6 flex flex-col items-center justify-center rounded-2xl bg-slate-100 px-6 py-8"
    >
      <img
        class="rounded"
        src={visomi}
        alt="visomi illustration"
        width={200}
        height={400}
      />

      <figcaption class="mt-6">
        <h1 class="text-2xl font-semibold">
          Hello! <span class="pr-1">👋</span> I'm Michael
        </h1>
      </figcaption>

      <p class="mt-2 text-center text-3xl font-bold">
        and I transform <br /> ideas into reality through software development{' '}
        <b />
        to create a better world to live.
      </p>

      <div class="flex gap-8">
        <Link
          class="mt-6 flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-xl text-white md:hover:bg-opacity-75"
          href={`#${nav.contact}`}
        >
          Contact
        </Link>

        <Link
          class="mt-6 flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xl text-white md:hover:bg-opacity-75"
          href={RESUME}
        >
          Resume
        </Link>
      </div>
    </figure>
  );
});
