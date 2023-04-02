<template>
  <div class="config">
    <div class="config">
      appConfig:
      <pre>{{ JSON.stringify(appConfig, null, 2) }}</pre>
      runtimeConfig:
      <pre>{{ JSON.stringify(themeConfig, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
const themeConfig = useRuntimeConfig().theme
const appConfig = useAppConfig()
</script>

<style scoped>
.config {
  padding: 20px;
  background: #f0f0f0;
}
</style>