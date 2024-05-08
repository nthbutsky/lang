import {
  fr,
} from './fr';
import {
  en,
} from './en';

export enum ELocale {
  FRENCH = 'fr-FR',
  ENGLISH = 'en-EN',
}

export const localeDefault = ELocale.FRENCH;

export const defaultLanguage = (langList: readonly string[]) => {
  return langList[0] === localeDefault;
};

export const translate = (path: string, langList: readonly string[]): string => {
  const browserLanguage = langList[0] === localeDefault
    ? ELocale.FRENCH
    : ELocale.ENGLISH;
  const parsePath = () => path.split('.');
  const getProp = (object: any, propsArray: string[]) => {
    return propsArray.reduce((acc, key) => (acc && acc[key]), object) || path;
  };

  switch (browserLanguage) {
    case ELocale.FRENCH:
      return getProp(fr, parsePath());
    case ELocale.ENGLISH:
      return getProp(en, parsePath());
    default:
      return getProp(fr, parsePath());
  }
};
