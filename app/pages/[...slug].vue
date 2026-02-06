<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  });
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  robots: page.value.robots,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogType: 'website',
  ogSiteName: 'theflyer1983.dev',
  ogUrl: 'https://theflyer1983.dev',
  twitterCard: 'summary'
});
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
