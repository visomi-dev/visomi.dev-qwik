import { component$ } from '@builder.io/qwik';

import background from '~/assets/images/resume/background.svg';
import { MyInfo, Quote } from './personal-info';
import { Contact } from './contact';
import { Socials } from './socials';
import { Languages } from './languages';

export const Me = component$(() => {
  return (
    <div
      class="flex w-full flex-col gap-4 bg-cover p-6 md:h-full md:w-fit"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <MyInfo />

      <Quote />

      <hr />

      <Contact />

      <hr />

      <Socials />

      <hr />

      <Languages />
    </div>
  );
});
