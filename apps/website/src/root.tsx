import { component$, useStyles$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';

import { i18n } from '@visomi/commons';

import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

import '@fontsource/poppins';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>

      <body
        lang={i18n.DEFAULT_LOCALE}
        class="h-full w-full overflow-auto bg-white text-primary"
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
