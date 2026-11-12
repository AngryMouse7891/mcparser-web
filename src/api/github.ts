// ---------- 类型定义 ----------
export interface GithubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export interface ReleaseAsset {
  id: number
  name: string
  label: string | null
  content_type: string
  size: number
  download_count: number
  browser_download_url: string
  created_at: string
  updated_at: string
}

export interface GithubRelease {
  id: number
  tag_name: string
  name: string | null
  body: string | null
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  author: GithubUser
  html_url: string
  assets: ReleaseAsset[]
}

export interface RepoStats {
  latestVersion: string          // 最新版本号，如 v1.2.0
  lastUpdater: string            // 最后更新者 login
  lastUpdaterAvatar: string      // 更新者头像
  latestDownloads: number        // 最新版下载量
  totalDownloads: number         // 全部 release 累计下载量
  publishedAt: string            // 最新版发布时间
  assets: ReleaseAsset[]         // 最新版的下载文件列表
}

// ---------- 配置 ----------
const API_BASE = 'https://api.github.com'

// ★ 改成你的仓库 ★
const OWNER = 'AngryMouse7891'
const REPO  = 'mcparser'

// 可选：配 token 避免匿名 60 次/小时的速率限制
// 注意不要把 token 提交到公开仓库！建议用 Vite 环境变量 import.meta.env.VITE_GH_TOKEN
const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  // ...(import.meta.env.VITE_GH_TOKEN
  //   ? { Authorization: `Bearer ${import.meta.env.VITE_GH_TOKEN}` }
  //   : {}),
}

async function ghFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { headers })
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${path}`)
  }
  return (await res.json()) as T
}

// ---------- 核心逻辑 ----------
export async function fetchRepoStats(): Promise<RepoStats> {
  // 1. 拿最新 release（非 draft、非 prerelease 的最新正式版）
  const latest = await ghFetch<GithubRelease>(
    `/repos/${OWNER}/${REPO}/releases/latest`,
  )

  // 2. 拿全部 release 用于统计总下载量（分页拉取，最多取 300 个）
  const allReleases: GithubRelease[] = []
  for (let page = 1; page <= 3; page++) {
    const list = await ghFetch<GithubRelease[]>(
      `/repos/${OWNER}/${REPO}/releases?per_page=100&page=${page}`,
    )
    allReleases.push(...list)
    if (list.length < 100) break // 没有更多了
  }

  const totalDownloads = allReleases.reduce(
    (sum, r) => sum + r.assets.reduce((s, a) => s + a.download_count, 0),
    0,
  )
  const latestDownloads = latest.assets.reduce(
    (s, a) => s + a.download_count,
    0,
  )

  return {
    latestVersion: latest.tag_name,
    lastUpdater: latest.author.login,
    lastUpdaterAvatar: latest.author.avatar_url,
    latestDownloads,
    totalDownloads,
    publishedAt: latest.published_at,
    assets: latest.assets,
  }
}
