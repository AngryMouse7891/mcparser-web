<script setup lang="ts">
import type { ReleaseAsset } from '@/api/github'

defineProps<{ assets: ReleaseAsset[] }>()

const fmtSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 ** 2).toFixed(1)} MB`
}
</script>

<template>
  <section class="download">
    <h2>下载</h2>
    <div class="btn-row">
      <mdui-button
        v-for="asset in assets"
        :key="asset.id"
        :href="asset.browser_download_url"
        variant="filled"
      >
      <font-awesome-icon :icon="['fa', 'cloud-download']" />
        {{ asset.name }}（{{ fmtSize(asset.size) }}）
      </mdui-button>
      <mdui-button
        v-if="assets.length === 0"
        variant="tonal"
        href="https://github.com/AngryMouse7891/mcparser/releases"
      >
        前往 GitHub Releases 页
      </mdui-button>
    </div>
  </section>
</template>

<style scoped>
.download { max-width: 1080px; margin: 32px auto; padding: 0 16px; text-align: center; }
.btn-row { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
</style>
