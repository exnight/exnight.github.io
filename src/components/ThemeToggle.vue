<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({ disableTransition: false })
const toggleDark = useToggle(isDark)
</script>

<template>
  <UseDark>
    <button type="button" id="theme-toggle" @click="toggleDark()">
      <span id="to-dark" class="inline dark:hidden">To Dark</span>
      <span id="to-light" class="hidden dark:inline">To Light</span>
    </button>
  </UseDark>
</template>
