import {
  en,
} from './en';
import {
  fr,
} from './fr';
import {
  LOCALE,
} from './main';

import {
  useLanguage,
} from './use-language';

const {
  currentLanguage,
} = useLanguage();

type TTranslations = {
  [key: string]: string | TTranslations;
}

export const useTranslation = () => {
  const t = (path: string, language?: string): string => {
    let translation = '';

    const pathSegmentsArray = path.split('.');

    const getTranslation = (translations: TTranslations): string => {
      const result = pathSegmentsArray.reduce<TTranslations | string | undefined>((accumulator, key) => {
        if (accumulator && typeof accumulator === 'object' && key in accumulator) {
          return (accumulator as TTranslations)[key];
        }
        return undefined;
      }, translations);

      return typeof result === 'string' ? result : path;
    };

    switch (language || currentLanguage.value) {
      case LOCALE.ENGLISH:
        translation = getTranslation(en);
        break;
      case LOCALE.FRENCH:
        translation = getTranslation(fr);
        break;
      default:
        translation = getTranslation(en);
    }
    return translation;
  };

  return {
    t,
  };
};
