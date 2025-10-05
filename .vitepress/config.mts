import type VitePressI18nOptions from 'vitepress-i18n'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { withI18n } from 'vitepress-i18n'
import { generateSidebar } from 'vitepress-sidebar'

const vitePressSidebarOptions = [
  {
    debugPrint: true,
    documentRootPath: '/docs',
    resolvePath: '/',
    useFolderTitleFromIndexFile: true,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderLinkFromIndexFile: true,
    includeFolderIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
]

const vitePressI18nOptions: VitePressI18nOptions = {
  locales: ['zhHans'],
  searchProvider: 'local',
}

const vitePressOptions = {
  vite: {
    plugins: [tailwindcss()],
  },
  srcDir: 'docs',
  lang: 'zh-CN',
  title: 'JXUT Wiki',
  description: '江科校园生活指南',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: generateSidebar(vitePressSidebarOptions),

    socialLinks: [{ icon: 'github', link: 'https://github.com/Alaye-Dong/jxut-wiki' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} JXUT Wiki Team`,
    },

    editLink: {
      pattern: 'https://github.com/Alaye-Dong/jxut-wiki/edit/main/docs/:path',
    },
  },
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withI18n(vitePressOptions, vitePressI18nOptions))
