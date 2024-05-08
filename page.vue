<template>
  <div class="flex flex-col">
    <div class="font-5 text-color-2">
      {{ t("common.title") }}
    </div>

    <span class="font-2-header text-color-1">
      {{ t("common.subtitle") }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import {
  translate,
} from '@/lang/main';

import {
  usePageContext,
} from '@/renderer/usePageContext';

const pageContext = usePageContext();
const l = pageContext.browserLanguages;

const t = (path: string) => {
  return translate(path, l);
};
</script>
