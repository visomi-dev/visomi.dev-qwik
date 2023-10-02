import { component$ } from '@builder.io/qwik';

import { Me } from '~/components/resume/me';
import { Professional } from '~/components/resume/professional';

export default component$(() => {
  return (
    <div class="mx-auto flex h-full w-full flex-col overflow-y-auto md:h-[30cm] md:w-[21cm] md:flex-row">
      <Me />

      <Professional />
    </div>
  );
});
