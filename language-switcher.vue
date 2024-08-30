<template>
  <button
    ref="containerRef"
    class="font-7 text-color-5"
    @click="toggle"
  >
    <div class="flex items-center gap-2">
      <aio-globe-icon class="text-color-5" />
      <div class="capitalize">
        {{ selected }}
      </div>
    </div>

    <aio-modal
      :is-open="isModalOpen"
      @close="isModalOpen = false"
    >
      <template #title>
        <div>
          {{ t("common.languageSwitchModal") }}
        </div>
      </template>
      <template #content>
        <div class="mt-6 grid justify-items-stretch gap-y-[10px]">
          <button
            v-for="locale in localeList"
            :key="locale.short"
            :lang="locale.short"
            type="button"
            class="font-4 flex w-full items-center justify-between gap-5 rounded-xl bg-neutral-2-60 p-5 text-left capitalize shadow-40"
            @click="emit('onSwitch', locale.short)"
          >
            <span>{{ locale.nativeName }}</span>
            <aio-checkmark-circle-icon
              v-if="selected === locale.nativeName"
              class="text-color-1"
            />
          </button>
        </div>
      </template>
    </aio-modal>
  </button>
</template>

<script lang="ts" setup>
import {
  ref,
} from 'vue';
import {
  onClickOutside,
} from '@vueuse/core';

import AioModal from './modal.vue';

import AioGlobeIcon from './globe.svg?component';
import AioCheckmarkCircleIcon from './checkmark-circle.svg?component';

import {
  TLocaleType,
  localeList,
} from './helper';

import {
  useTranslation,
} from './use-translation';

// eslint-disable-next-line func-call-spacing, no-spaced-func
const emit = defineEmits<{
  (e: 'onSwitch', value: TLocaleType): void;
}>();

const containerRef = ref<HTMLElement | null>(null);
const {
  t,
} = useTranslation();
const selected = ref(t('locale.long'));
const isModalOpen = ref<boolean>(false);

const toggle = () => {
  isModalOpen.value = !isModalOpen.value;
};

onClickOutside(containerRef, () => {
  isModalOpen.value = false;
});
</script>
