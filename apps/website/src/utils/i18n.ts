import '@angular/localize/init';

import { loadTranslations } from '@angular/localize';
import { $, getLocale, useOnDocument, withLocale } from '@builder.io/qwik';
import type { RenderOptions } from '@builder.io/qwik/server';

import { i18n } from '@visomi/commons';

import ES_LA from '../locales/messages.es-LA.json';
import EN_US from '../locales/messages.en-US.json';

const $localizeFn = $localize as unknown as {
  TRANSLATIONS: Record<string, unknown>;
  TRANSLATION_BY_LOCALE: Map<string, Record<string, unknown>>;
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!$localizeFn.TRANSLATION_BY_LOCALE) {
  $localizeFn.TRANSLATION_BY_LOCALE = new Map([['', {}]]);

  Object.defineProperty($localize, 'TRANSLATIONS', {
    get: function () {
      const locale = getLocale(i18n.DEFAULT_LOCALE);

      let translations = $localizeFn.TRANSLATION_BY_LOCALE.get(locale);

      if (!translations) {
        $localizeFn.TRANSLATION_BY_LOCALE.set(locale, (translations = {}));
      }

      return translations;
    },
  });
}

export function initTranslations() {
  [ES_LA, EN_US].forEach(({ translations, locale }) => {
    withLocale(locale, () => {
      loadTranslations(translations);
    });
  });
}

export function extractLang(locale: string): string {
  return !!locale && $localizeFn.TRANSLATION_BY_LOCALE.has(locale)
    ? locale
    : i18n.DEFAULT_LOCALE;
}

/**
 * Function used to determine the base URL to use for loading the chunks in the browser.
 *
 * The function returns `/build` in dev mode or `/build/<locale>` in prod mode.
 *
 * This function is meant to be used with `RenderOptions.base` property
 *
 * @returns The base URL to use for loading the chunks in the browser.
 */
export function extractBase({ serverData }: RenderOptions): string {
  let locale = i18n.DEFAULT_LOCALE;

  if (serverData && serverData.locale) {
    locale = serverData.locale as i18n.Locale;
  }

  if (import.meta.env.DEV) {
    return `${import.meta.env.BASE_URL}build`;
  } else {
    return `${import.meta.env.BASE_URL}build/${locale}`;
  }
}

export function useI18n() {
  if (import.meta.env.DEV) {
    // During development only, load all translations in memory when the app starts on the client.
    // eslint-disable-next-line
    useOnDocument('qinit', $(initTranslations));
  }
}

// We always need the translations on the server
if (import.meta.env.SSR) {
  initTranslations();
}
