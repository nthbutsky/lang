import {
  computed,
  watch,
  getCurrentInstance,
} from 'vue';
import {
  useStorage,
  useNavigatorLanguage,
} from '@vueuse/core';

import {
  localeDefault,
} from './main';

export const useLanguage = () => {
  let navigatorLanguage: string = localeDefault;

  if (typeof window !== 'undefined') {
    const {
      language,
    } = useNavigatorLanguage();
    navigatorLanguage = language.value ? language.value.split('-')[0] : localeDefault;
  }

  const userLanguage = useStorage<null | undefined | string>(
    'user-language',
    null,
  );

  const currentLanguage = computed(() => userLanguage.value || navigatorLanguage);

  const changeLanguage = (newUserLanguage: string) => {
    userLanguage.value = newUserLanguage;
    return currentLanguage.value;
  };

  if (getCurrentInstance()) {
    watch(
      () => userLanguage.value,
      () => window.location.reload(),
    );
  }

  return {
    currentLanguage,
    changeLanguage,
  };
};
