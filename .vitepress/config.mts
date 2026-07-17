import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LittleKt 语言文档",
  description: "LittleKt — 受 Kotlin 启发的动态类型编程语言",

  // Sitemap 配置
  sitemap: {
    hostname: 'https://www.littlekt.org'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '语言概述', link: '/overview' }
    ],

    sidebar: [
      {
        text: '起步',
        items: [
          { text: '语言概述', link: '/overview' },
        ]
      },
      {
        text: '语言基础',
        items: [
          { text: '词法语法', link: '/syntax' },
          { text: '类型系统', link: '/types' },
          { text: '变量', link: '/variables' },
          { text: '表达式与运算符', link: '/expressions' },
        ]
      },
      {
        text: '控制流与函数',
        items: [
          { text: '控制流', link: '/control-flow' },
          { text: '函数与 Lambda', link: '/functions' },
        ]
      },
      {
        text: '面向对象',
        items: [
          { text: '类与继承', link: '/classes' },
          { text: '异常处理', link: '/exceptions' },
        ]
      },
      {
        text: '标准库',
        items: [
          { text: '集合', link: '/collections' },
          { text: '标准库', link: '/stdlib' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleKt-Lang' }
    ]
  }
})
