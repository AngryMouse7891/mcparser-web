<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchRepoStats, type RepoStats } from '@/api/github'
import GithubStats from '@/components/GithubStats.vue'
import DownloadSection from '@/components/DownloadSection.vue'

const stats = ref<RepoStats | null>(null)
const loading = ref(true)
const errorMsg = ref('')

onMounted(async () => {
  try {
    stats.value = await fetchRepoStats()
  } catch (e) {
    errorMsg.value = e instanceof Error ? e.message : '加载失败'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page-container">
    <mdui-layout class="mdui-theme-auto">
      <!-- 顶部导航 -->
      <mdui-top-app-bar slot="top">
        <mdui-button-icon icon="menu--outlined"></mdui-button-icon>
        <mdui-top-app-bar-title>MCParser官网</mdui-top-app-bar-title>
      </mdui-top-app-bar>

      <mdui-layout-main>
        <!-- Hero 区 -->
        <section class="hero">
          <img src="/img/mcparser.png" alt="icon" width="10%"/>
          <h1 class="hero-title">
            MCParser
          </h1>
          <p class="hero-sub">一个一个一个一个一个一个一个一个一个一个一个一个一个解析Minecraft社区资源（如模组）的工具，部分由AI赋能。</p>

          <mdui-chip elevated>
            <img src="/img/icon.png" width="5%" height="5%"/>
            <p style="color:rgb(78, 226, 140);">支持Modrinth</p>
          </mdui-chip>
        </section>

        <!-- 加载 / 错误 / 数据三态 -->
        <mdui-linear-progress v-if="loading"></mdui-linear-progress>

        <mdui-alert v-else-if="errorMsg" icon="error--outlined" variant="filled">
          数据加载失败：{{ errorMsg }}（可能是触发了 GitHub API 匿名速率限制，每小时 60 次）
        </mdui-alert>

        <template v-else-if="stats">
          <!-- 统计卡片：下载量 / 最新版 / 最后更新者 -->
          <GithubStats :stats="stats" />

          <!-- 下载按钮区 -->
          <DownloadSection :assets="stats.assets" />
        </template>
      </mdui-layout-main>
    </mdui-layout>
  </div>
</template>

<style scoped>
body {
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0,0,0,0.5)),url("/img/background.jpg");
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Minecraft AE Pixel";
}
.hero {
  text-align: center;
  padding: 64px 16px 32px;
}
.hero-title {
  font-size: 3rem;
  margin: 0 0 8px;
  font-weight: 700;
}
.hero-sub {
  color: var(--mdui-color-on-surface-variant);
  margin: 0 0 24px;
}
</style>
