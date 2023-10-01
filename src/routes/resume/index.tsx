import { component$ } from '@builder.io/qwik';

import { Me } from '~/components/resume/me';

export default component$(() => {
  return (
    <div class="mx-auto h-full w-full overflow-y-auto md:h-[30cm] md:w-[21cm]">
      <Me />
    </div>
  );
});
