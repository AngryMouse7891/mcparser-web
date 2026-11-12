<script setup lang="ts">
import type { RepoStats } from '@/api/github'

defineProps<{ stats: RepoStats }>()

const fmt = (n: number): string => n.toLocaleString() // 12,345

const fmtDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
</script>

<template>
  <section class="stats-grid">
    <!-- 下载量 -->
    <mdui-card variant="filled" class="stat-card">
      <div class="stat-body">
        <font-awesome-icon icon="download" size="2x"/>
        <div class="stat-value">{{ fmt(stats.totalDownloads) }}</div>
        <div class="stat-label">累计下载量</div>
        <div class="stat-sub">最新版 {{ fmt(stats.latestDownloads) }} 次</div>
      </div>
    </mdui-card>

    <!-- 最新版 -->
    <mdui-card variant="filled" class="stat-card">
      <div class="stat-body">
        <font-awesome-icon icon="star" size="2x"/>
        <div class="stat-value">v{{ stats.latestVersion }}</div>
        <div class="stat-label">最新版本</div>
        <div class="stat-sub">发布于 {{ fmtDate(stats.publishedAt) }}</div>
      </div>
    </mdui-card>

    <!-- 最后更新者 -->
    <mdui-card variant="filled" class="stat-card">
      <div class="stat-body">
        <img :src="stats.lastUpdaterAvatar" :alt="stats.lastUpdater"
             class="avatar" referrerpolicy="no-referrer" />
        <div class="stat-value">{{ stats.lastUpdater }}</div>
        <div class="stat-label">最后更新者</div>
        <div class="stat-sub">GitHub Release 发布人</div>
      </div>
    </mdui-card>
  </section>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  padding: 16px;
  max-width: 1080px;
  margin: 0 auto;
}
.stat-card {
  height: auto;
  padding: 24px;
  text-align: center;
}
.stat-body { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.stat-value { font-size: 1.75rem; font-weight: 600; }
.stat-label { color: var(--mdui-color-on-surface-variant); }
.stat-sub { font-size: 0.85rem; color: var(--mdui-color-outline); }
.avatar { width: 48px; height: 48px; border-radius: 50%; }
</style>
