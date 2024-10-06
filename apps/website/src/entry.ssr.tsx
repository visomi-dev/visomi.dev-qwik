/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';

import { i18n } from '@visomi/commons';

import { extractBase } from './utils/i18n';

import Root from './root';

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    base: extractBase, // determine the base URL for the client code
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      locale: opts.serverData?.locale ?? i18n.DEFAULT_LOCALE,
      'data-route': (opts.containerAttributes ?? {})['q:route'],
      ...opts.containerAttributes,
    },
  });
}
