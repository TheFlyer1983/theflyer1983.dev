<script setup lang="ts">
if (import.meta.server) {
  useSeoMeta({
    title: 'TheFlyer1983 - Senior Frontend Developer',
    description:
      'The personal website of theFlyer1983, a senior frontend developer specializing in Vue.js and Nuxt.js.',
    ogTitle: 'TheFlyer1983 - Senior Frontend Developer',
    ogDescription:
      'The personal website of TheFlyer1983, a senior frontend developer specializing in Vue.js and Nuxt.js.',
    ogSiteName: 'theflyer1983.dev'
  });
}
</script>
<template>
  <UApp>
    <div class="flex h-dvh flex-col items-center justify-center">
      <NuxtLink to="/">Welcome to theflyer1983.dev</NuxtLink>
      <span
        >The personal website of Paul Livingstone (also known as
        <NuxtLink
          to="https://github.com/theflyer1983"
          external
          class="underline"
          >TheFlyer1983</NuxtLink
        >)</span
      >
    </div>
  </UApp>
</template>
