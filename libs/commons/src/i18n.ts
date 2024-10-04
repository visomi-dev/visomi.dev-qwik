export const locales = ['es-LA', 'en-US'] as const;
export const currencies = ['MXN', 'USD', 'BRL'] as const;

export type Locale = (typeof locales)[number];
export type Currency = (typeof currencies)[number];

export const DEFAULT_LOCALE: Locale = 'en-US';
