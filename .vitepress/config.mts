import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { generateSidebar } from 'vitepress-sidebar';

const vitePressSidebarOptions = [
  {
    debugPrint: true,
    documentRootPath: '/docs',
    // resolvePath: '/',

    useTitleFromFileHeading: true,
		useTitleFromFrontmatter: true,
		sortMenusByFrontmatterOrder: true,
		useFolderTitleFromIndexFile: true,
		useFolderLinkFromIndexFile: true, 
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  srcDir: 'docs',
  lang: 'zh-CN',
  title: "JXUT Wiki",
  description: "江科校园生活指南",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar(vitePressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alaye-Dong/jxut-wiki' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} JXUT Wiki Team`,
    },

    editLink: {
      pattern: 'https://github.com/Alaye-Dong/jxut-wiki/edit/main/docs/:path',
      text: '在 GitHub 编辑本页'
    }
  }
})
