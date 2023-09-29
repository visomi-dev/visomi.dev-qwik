import { component$ } from '@builder.io/qwik';

import background from '~/media/images/resume/background.svg';

export const Me = component$(() => {
  return (
    <div
      class="h-full w-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      contact
    </div>
  );
});
