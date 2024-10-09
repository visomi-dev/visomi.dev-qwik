import { component$, Slot } from '@builder.io/qwik';
import { RequestHandler } from '@builder.io/qwik-city';

import { i18n } from '@visomi/commons';

import { extractLang, useI18n } from '../../utils/i18n';

export const onRequest: RequestHandler = ({ locale, params }) => {
  console.log('requested locale:', params.locale);

  const lang = extractLang(params.locale ?? i18n.DEFAULT_LOCALE);

  locale(lang);
};

export default component$(() => {
  useI18n();

  return <Slot />;
});
