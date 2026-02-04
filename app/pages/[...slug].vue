<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first(), { server: true }
);

if (import.meta.server) {
  useSeoMeta({
    title: data.value?.title,
    description: data.value?.description,
    ogTitle: data.value?.title,
    ogDescription: data.value?.description,
    ogSiteName: 'theflyer1983.dev'
  });
}
</script>

<template>
  <div>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>Page not found</div>
  </div>
</template>
