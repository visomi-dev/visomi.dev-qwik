import { component$ } from '@builder.io/qwik';

import { Experience } from './experience';
import { Tools } from './tools';
import { ProgrammingLanguages } from './programming-languages';
import { Frameworks } from './frameworks';

export const Professional = component$(() => {
  return (
    <div class="flex w-full flex-col gap-4 px-6 py-8 md:h-full">
      <Experience />

      <Tools />

      <ProgrammingLanguages />

      <Frameworks />
    </div>
  );
});
