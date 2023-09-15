import type { DocumentHead } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';

import logotype from '~/media/images/logotype.svg';
import menu from '~/media/images/menu.svg';
import visomi from '~/media/images/visomi-illustration.png';
import nivePreview from '~/media/images/nive-preview.svg';

export const head: DocumentHead = {
  title: 'visomi | cross-over developer',
  meta: [
    {
      name: 'description',
      content: 'Michael V. S. (visomi) | cross-over developer',
    },
  ],
};

export default component$(() => {
  return (
    <div class="flex min-h-full w-full flex-col">
      <header class="mx-auto flex w-full max-w-xl justify-between p-6">
        <img
          src={logotype}
          alt="visomi personal logotype"
          width={152}
          height={40}
        />

        <button class="p-2 md:pointer-events-none md:opacity-0">
          <img src={menu} alt="hamburger menu icon" width={28} height={28} />
        </button>
      </header>

      <main class="mx-auto flex w-full max-w-xl flex-col gap-10 p-6">
        <div class="flex flex-col items-center justify-center rounded-2xl bg-slate-100 px-6 py-8">
          <img
            class="rounded"
            src={visomi}
            alt="visomi illustration"
            width={200}
            height={400}
          />

          <h1 class="mt-6 text-2xl font-semibold">Hello! I'm Michael</h1>

          <p class="mt-2 text-center text-3xl font-bold">
            and I transform <br /> ideas into reality through software <b />
            to create a better world to live.
          </p>

          <div class="flex gap-8">
            <a
              class="mt-6 rounded-full bg-slate-900 px-4 py-2 text-white"
              href="/resume"
            >
              Resume
            </a>

            <a
              class="mt-6 rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>

        <figure id="last-projects">
          <figcaption>
            <h2 class="text-4xl font-bold">Last Projects</h2>
          </figcaption>

          <ul class="mt-6">
            <li id="nive-project">
              <div class="flex flex-col gap-2">
                <div class="flex flex-col">
                  <h3 class="text-2xl font-semibold">
                    <a href="https://nive.mx" target="_blank" rel="noreferrer">
                      Nive
                    </a>
                  </h3>

                  <h4 class="text-sm italic">
                    from financial chaos to nirvana
                  </h4>
                </div>

                <hr />

                <p class="mt-2">
                  Nive is a personal finance management app that helps you to
                  control your money.
                </p>

                <div class="mt-2 flex gap-2">
                  <span class="rounded-full bg-blue-300 px-4 py-1 text-sm">
                    Flutter
                  </span>

                  <span class="rounded-full bg-blue-300 px-4 py-1 text-sm">
                    Elysia
                  </span>
                </div>

                <div class="flex flex-col">
                  <img
                    class="mx-auto my-4"
                    src={nivePreview}
                    alt="nive preview illustrator"
                    width={240}
                    height={520}
                  />

                  <p class="text-center text-sm text-yellow-400">
                    WORK IN PROGRESS...
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </figure>

        <figure id="about-me">
          <figcaption>
            <h2 class="text-4xl font-bold">About Me</h2>
          </figcaption>

          <div class="relative mt-6 flex flex-col gap-3 p-2 pl-5 text-justify before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-slate-900">
            <p>
              I'm a
              <a
                class="px-1"
                href="https://crossoverdeveloper.com/"
                target="__blank"
              >
                cross-over developer
              </a>
              with a background in developer, tech lead, software architect, and
              a little of UX/UI. I'm passionate about creating software that
              helps people to improve their lives.
            </p>

            <p>
              I'm a self-taught developer, I started my journey in 2012 when I
              was 16 years old. I started learning about programming and
              programming languages, and I fell in love with it. I learned about
              HTML, CSS, JavaScript, and Python. I started to create scripts for
              make my work more pleasant (I was working as Compute Technical
              Support at the age of 19 years old) and to automate repetitive
              tasks.
            </p>

            <p>
              When I was 21 years old, I started to work as a web developer, and
              I learned about React and Nodejs. That was the moment when I
              started to learn about software architectures and how to create
              scalable applications and start my journey in this fabulous world.
            </p>
          </div>
        </figure>

        <figure id="contact">
          <figcaption>
            <h2 class="text-4xl font-bold">Do you have some in mind?</h2>
          </figcaption>

          <div class="mt-6 flex flex-col gap-3">
            <p>
              If you want to contact me, you can send me an email to
              <a
                class="ml-1 text-blue-400 underline"
                href="mailto:visomi.dev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                visomi.dev@gmail.com
              </a>
            </p>

            <div class="flex flex-col">
              <p>or you can find me on:</p>

              <div class="flex gap-4">
                <a
                  class="ml-1 text-blue-400 underline"
                  href="https://twitter.com/visomi_dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>

                <a
                  class="ml-1 text-blue-400 underline"
                  href="https://www.linkedin.com/in/visomi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </figure>
      </main>

      <footer class="mx-auto flex w-full max-w-xl justify-center p-6">
        <p class="text-sm text-gray-400">
          © 2023 Michael V. S. (visomi) | cross-over developer
        </p>
      </footer>
    </div>
  );
});
