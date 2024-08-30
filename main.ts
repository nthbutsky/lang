import {
  en,
} from './en';
import {
  fr,
} from './fr';

export const LOCALE = {
  ENGLISH: en.locale.short,
  FRENCH: fr.locale.short,
} as const;
type TObjectValues<T> = T[keyof T];
export type TLocale = TObjectValues<typeof LOCALE>;

export const localeDefault = LOCALE.ENGLISH;
