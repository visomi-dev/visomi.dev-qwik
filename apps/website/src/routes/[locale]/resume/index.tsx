import { component$ } from '@builder.io/qwik';

import { Me } from '~/components/resume/me';
import { Professional } from '~/components/resume/professional';

import styles from './index.css?inline';

export default component$(() => {
  return (
    <>
      <style dangerouslySetInnerHTML={styles} />

      <div class="no-scroll-print mx-auto flex h-full w-full flex-col overflow-y-auto md:h-[21.6cm] md:w-[27.9cm] md:flex-row">
        <Me />

        <Professional />
      </div>
    </>
  );
});
