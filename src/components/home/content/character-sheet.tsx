import { component$ } from '@builder.io/qwik';

import { nav } from '../constants';

export const CharacterSheet = component$(() => {
  return (
    <figure id={nav.characterSheet}>
      <figcaption>
        <h2 class="text-4xl font-bold">Character Sheet</h2>
      </figcaption>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <h3 class="text-2xl">Statistics</h3>
        </div>
      </div>
    </figure>
  );
});
