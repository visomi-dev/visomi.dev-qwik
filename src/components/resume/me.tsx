import { component$ } from '@builder.io/qwik';

import background from '~/media/images/resume/background.svg';
import { MyInfo, Quote } from './personal-info';
import { Contact } from './contact';

export const Me = component$(() => {
  return (
    <div
      class="flex w-full flex-col gap-4 bg-cover p-6 md:h-full"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <MyInfo />
      <Quote />

      <hr />

      <Contact />
    </div>
  );
});
