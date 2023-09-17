import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="mx-auto flex w-full max-w-xl flex-col justify-center gap-3 bg-slate-200 p-6 md:flex-row">
      <p class="text-sm text-gray-600">
        © 2023 Michael V. S. (visomi) | cross-over developer
      </p>

      <p class="mx-4 hidden text-sm text-gray-600 md:flex">|</p>

      <p class="text-sm text-gray-600">
        <a
          class="text-blue-400 underline"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noreferrer"
        >
          CC BY-NC-SA 4.0
        </a>
      </p>

      <p class="text-sm">
        Source code available on
        <a
          class="ml-1 text-blue-400 underline"
          href="https://github.com/visomi-dev/visomi.dev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
});
