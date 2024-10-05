import { component$ } from '@builder.io/qwik';

import galaxy from '~/assets/images/galaxy-illustration.svg';

import { nav } from '../constants';

export const AboutMe = component$(() => {
  return (
    <figure id={nav.aboutMe}>
      <figcaption>
        <h2 class="text-4xl font-bold capitalize">{$localize`:@@homeContentAboutMeTitle:About Me`}</h2>
      </figcaption>

      <div class="relative mt-6 flex flex-col gap-3 p-2 pl-5 text-justify before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-slate-900">
        <p>
          <span>{$localize`:@@homeContentAboutMeIntroduction:I'm a`}</span>

          <a
            class="mx-2 text-blue-400 underline"
            href="https://crossoverdeveloper.com/"
            target="__blank"
          >
            {$localize`:@@homeContentAboutMeIntroductionRole:cross-over developer`}
          </a>

          <span>
            {$localize`:@@homeContentAboutMeIntroductionSpec:with a rich background in development, design, leadership, maintenance, and a touch of UX/UI. My true passion lies in creating software solutions that improve people's lives and address real-world problems.`}
          </span>
        </p>

        <p>
          {$localize`:@@homeContentAboutMeIntroductionStart:I am a self-taught developer who embarked on this journey in 2011 at the age of 16. I started exploring programming and programming languages and quickly fell in love with them. I learned about HTML, CSS, JavaScript, and Python. I began writing scripts to make my work more enjoyable (I was working as a Technical Support professional at the age of 19) and to automate repetitive tasks.`}
        </p>

        <p>
          {$localize`:@@homeContentAboutMeIntroductionFirstJob:When I turned 21, I started working as a web developer and began learning about React and Node.js. This was the moment when I started delving into software architectures and discovering how to create scalable applications, marking the beginning of my adventure in this fascinating world.`}
        </p>
      </div>

      <img
        class="-mb-8 -mt-2 w-full"
        src={galaxy}
        alt="galaxy illustration"
        width={300}
        height={200}
      />
    </figure>
  );
});
