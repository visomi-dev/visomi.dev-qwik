import type { DocumentHead } from '@builder.io/qwik-city';

import { component$, useStyles$ } from '@builder.io/qwik';

import { Header } from '~/components/home/header';
import { Content } from '~/components/home/content';
import { Footer } from '~/components/home/footer';

import styles from './index.css?inline';

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
  useStyles$(styles);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
});
