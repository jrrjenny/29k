// LANGUAGES defines the supported languages and their tags
export enum LANGUAGES {
  en = 'English',
  sv = 'Svenska',
  pt = 'Português',
}

export type LANGUAGE_TAG = keyof typeof LANGUAGES;

// LANGUAGE_TAGS defines the supported languages
export const LANGUAGE_TAGS = Object.keys(LANGUAGES) as LANGUAGE_TAG[];

// DEFAULT_LANGUAGE defines the default language is used when a translation for
// a specific language is missing and will also be the default for all users,
// unless overridden.
export const DEFAULT_LANGUAGE_TAG: LANGUAGE_TAG = 'en';

// DEFAULT_TIME_LOCATION is the time location used as a fallback for users that
// doesn't have one set.
export const DEFAULT_TIME_LOCATION = 'UTC';
