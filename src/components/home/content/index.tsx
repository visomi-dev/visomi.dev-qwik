import { component$ } from '@builder.io/qwik';

import { Introduction } from './introduction';
import { Projects } from './projects';
import { AboutMe } from './about-me';
import { Contact } from './contact';

export const Content = component$(() => {
  return (
    <main class="mx-auto flex w-full max-w-xl flex-col gap-10 p-6">
      <Introduction />

      <AboutMe />

      <Projects />

      <Contact />
    </main>
  );
});
