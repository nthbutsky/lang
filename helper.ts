import {
  useTranslation,
} from '@/composition/use-translation';
import {
  LOCALE,
} from './main';

const {
  t,
} = useTranslation();

export type TLocaleType = typeof LOCALE[keyof typeof LOCALE];
type TLocaleName = keyof typeof LOCALE;
type TLocaleItem = {
  short: TLocaleType;
  long: TLocaleName;
  nativeName: string;
}
export const localeList: TLocaleItem[] = (Object.values(LOCALE) as TLocaleType[]).map((locale): TLocaleItem => {
  return {
    short: locale,
    long: Object.keys(LOCALE).find((key) => LOCALE[key as TLocaleName] === locale) as TLocaleName,
    nativeName: t('locale.long', locale),
  };
});
