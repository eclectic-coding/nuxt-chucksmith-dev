<template>
  <div class="error-block">
    <warning-icon />
    <h2>{{ error.message }}</h2>
  </div>
</template>

<script>
import WarningIcon from '@/assets/icons/warning.svg?inline'

export default {
  components: {
    WarningIcon
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.error-block {
  @apply flex flex-col items-center p-8;
}

svg {
  @apply w-12 h-12 mb-4;
  @apply opacity-75;
}

h2 {
  @apply text-2xl;
  text-align: center;
}
</style>
