import { component$ } from '@builder.io/qwik';

import { Experience } from './experience';

export const Professional = component$(() => {
  return (
    <div class="flex w-full flex-col gap-4 px-6 py-8 md:h-full">
      <Experience />
    </div>
  );
});
