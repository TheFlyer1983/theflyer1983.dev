<template>
  <div>
    <UApp>
      <UContainer>
        <UHeader class="mb-4" to="/" title="theflyer1983.dev">

          <template #right>
            <UColorModeButton />

            <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
              <UButton
                color="neutral"
                variant="ghost"
                to="https://github.com/theflyer1983"
                target="_blank"
                icon="i-simple-icons-github"
                aria-label="GitHub"
              />
            </UTooltip>
          </template>
        </UHeader>
        <UMain>
          <slot></slot>
        </UMain>
      </UContainer>
    </UApp>
  </div>
</template>
