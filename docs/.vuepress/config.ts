import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'
const { searchPlugin } = require('@vuepress/plugin-search')

const base = process.argv[2] === 'dev' ? '/' : '/vuepress-interview/';

export default defineUserConfig({
  lang: 'zh-CN',
  title: `你好， VuePress ！`,
  description: '这是一个知识分享站点',
  base,
  plugins: [
    searchPlugin({
      // 配置项
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],
  
  
  theme: defaultTheme({
    navbar,
    sidebar,
    sidebarDepth: 3,
    editLink: true,
    docsRepo: 'https://github.com/tuhang1995/vuepress-interview',
    docsBranch: 'master',
    docsDir: 'docs',
    
    editLinkText: '在 Github 上编辑此页',
    editLinkPattern: ':repo/tree/:branch/:path',
  }),
})