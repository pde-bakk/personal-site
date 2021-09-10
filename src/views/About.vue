<template>
  <app-list-widget :programming="programming" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AppListWidget from '@/components/ListWidget.vue';
import { myskills } from '@/includes/skills';

export default defineComponent({
  components: { AppListWidget },
  name: 'About',
  data() {
    return {
      programming: myskills,
    };
  },
});
</script>

<style scoped></style>
