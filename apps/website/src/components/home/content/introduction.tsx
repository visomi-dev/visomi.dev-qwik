import { component$, getLocale } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { i18n } from '@visomi/commons';

import visomi from '~/assets/images/visomi-illustration.png';

import { nav } from '../constants';

export const Introduction = component$(() => {
  const locale = getLocale(i18n.DEFAULT_LOCALE);

  return (
    <figure
      id={nav.introduction}
      class="-mt-6 flex flex-col items-center justify-center rounded-2xl bg-slate-100 px-6 py-8"
    >
      <img
        class="rounded"
        src={visomi}
        alt={$localize`:@@homeContentIntroductionAlt:visomi illustration`}
        width={200}
        height={400}
      />

      <figcaption class="mt-6">
        <h1 class="text-2xl font-semibold">
          Hello! <span class="pr-1">👋</span>{' '}
          {$localize`:@@homeContentIntroductionTitle:I'm Michael`}
        </h1>
      </figcaption>

      <p class="mt-2 text-center text-3xl font-bold">
        {$localize`:@@homeContentIntroductionDesc:and I transform`} <br />
        {$localize`:@@homeContentIntroductionDesc2:ideas into reality through software development.`}
      </p>

      <div class="flex gap-8">
        <Link
          class="mt-6 flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-xl text-white md:hover:bg-opacity-75"
          href={`#${nav.contact}`}
        >
          {$localize`:@@homeContentIntroductionContactLink:Contact`}
        </Link>

        <Link
          class="mt-6 flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xl text-white md:hover:bg-opacity-75"
          href={
            `/${locale}` +
            $localize`:@@homeContentIntroductionResumeLink:/resume`
          }
        >
          {$localize`:@@homeContentIntroductionResume:Resume`}
        </Link>
      </div>
    </figure>
  );
});
