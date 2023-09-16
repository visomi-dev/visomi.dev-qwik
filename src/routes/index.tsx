import type { DocumentHead } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';

import logotype from '~/media/images/logotype.svg';
import menu from '~/media/images/menu.svg';
import visomi from '~/media/images/visomi-illustration.png';
import nivePreview from '~/media/images/nive-preview.svg';
import galaxy from '~/media/images/galaxy-illustration.svg';

export const head: DocumentHead = {
  title: 'visomi.dev',
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
      <header class="mx-auto flex w-full max-w-2xl justify-between p-6">
        <img
          src={logotype}
          alt="visomi personal logotype"
          width={152}
          height={40}
        />

        <div class="flex items-center justify-center">
          <button class="p-2 md:pointer-events-none md:opacity-0">
            <img src={menu} alt="hamburger menu icon" width={28} height={28} />
          </button>

          <ul class="fixed hidden flex-col gap-2 md:relative md:flex md:flex-row">
            <li class="flex">
              <a class="px-2 py-1 text-yellow-400" href="#me">
                hi 👋
              </a>
            </li>

            <li class="flex">
              <a class="px-2 py-1 text-green-700" href="#last-projects">
                last projects 🚀
              </a>
            </li>

            <li class="flex">
              <a class="px-2 py-1 text-blue-700" href="#last-projects">
                about me 🤔
              </a>
            </li>

            <li class="flex">
              <a class="px-2 py-1 text-slate-700" href="#contact">
                contact 📧
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main class="mx-auto flex w-full max-w-xl flex-col gap-10 p-6">
        <figure
          id="me"
          class="flex flex-col items-center justify-center rounded-2xl bg-slate-100 px-6 py-8"
        >
          <img
            class="rounded"
            src={visomi}
            alt="visomi illustration"
            width={200}
            height={400}
          />

          <figcaption class="mt-6">
            <h1 class="text-2xl font-semibold">Hello! I'm Michael</h1>
          </figcaption>

          <p class="mt-2 text-center text-3xl font-bold">
            and I transform <br /> ideas into reality through software
            development <b />
            to create a better world to live.
          </p>

          <div class="flex gap-8">
            <a
              class="mt-6 flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-xl text-white md:hover:bg-opacity-75"
              href="#contact"
            >
              Contact
            </a>

            <a
              class="mt-6 flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xl text-white md:hover:bg-opacity-75"
              href="/resume"
            >
              Resume
            </a>
          </div>
        </figure>

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

                  <span class="rounded-full bg-green-300 px-4 py-1 text-sm">
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

          <img
            class="-mb-8 -mt-4 w-full"
            src={galaxy}
            alt="galaxy illustration"
            width={300}
            height={200}
          />

          <div class="relative mt-6 flex flex-col gap-3 p-2 pl-5 text-justify before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-slate-900">
            <p>
              <span>I'm a</span>

              <a
                class="mx-2 text-blue-400 underline"
                href="https://crossoverdeveloper.com/"
                target="__blank"
              >
                cross-over developer
              </a>

              <span>
                with a background in develop, design, lead, maintain, and a
                little of UX/UI. I'm passionate about creating software that
                helps people to improve their lives or solve problems.
              </span>
            </p>

            <p>
              I'm a self-taught developer, I started my journey in 2012 when I
              was 15 years old. I started learning about programming and
              programming languages, and I fell in love with it. I learned about
              HTML, CSS, JavaScript, and Python. I started to create scripts for
              make my work more pleasant (I was working as Technical Support at
              the age of 19 years old) and to automate repetitive tasks.
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
            <h2 class="text-4xl font-bold">Do you have something in mind?</h2>
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
