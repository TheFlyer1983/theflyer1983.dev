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
  ...page.value.seo,
  ogType: 'website',
  ogSiteName: 'theflyer1983.dev',
  twitterCard: 'summary'
});

useHead((page.value.head as Record<string, unknown>) || {});
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
