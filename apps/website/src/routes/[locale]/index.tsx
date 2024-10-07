import type { DocumentHead } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';

import { Header } from '~/components/home/header';
import { Content } from '~/components/home/content';
import { Footer } from '~/components/home/footer';

export const head: DocumentHead = {
  title: 'visomi.dev',
  meta: [
    {
      name: 'description',
      content: 'Michael V. S. (visomi) | cross-over developer',
    },
  ],
};

export default component$(() => {
  return (
    <>
      <style>
        {`
          body {
            padding-top: 5.5rem;
          }
        `}
      </style>
      <Header />
      <Content />
      <Footer />
    </>
  );
});
