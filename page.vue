<template>
  <div class="flex flex-col">
    <div class="font-5 text-color-2">
      {{ t("common.title") }}
    </div>

    <span class="font-2-header text-color-1">
      {{ t("common.subtitle") }}
    </span>

    <aio-language-switcher @on-switch="changeLanguage" />
  </div>
</template>

<script lang="ts" setup>
import AioLanguageSwitcher from './language-switcher.vue';

import {
  useLanguage,
} from './use-language';
import {
  useTranslation,
} from './use-translation';

const {
  currentLanguage, changeLanguage,
} = useLanguage();
  
const {
  t,
} = useTranslation();
</script>
