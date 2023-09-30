import { component$ } from '@builder.io/qwik';

import background from '~/media/images/resume/background.svg';
import { MyInfo, Quote } from './personal-info';
import { Socials } from './socials';

export const Me = component$(() => {
  return (
    <div
      class="flex h-full w-full flex-col gap-4 bg-cover p-6"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <MyInfo />
      <Quote />

      <hr />

      <Socials />
    </div>
  );
});
