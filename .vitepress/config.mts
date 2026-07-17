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
      { icon: 'github', link: 'https://github.com/LittleKt-Lang' },
      { icon: 'discord', link: 'https://discord.gg/BpwCRuD9H8' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C12.69,9 10,11.24 10,14C10,16.76 12.69,19 16,19C16.67,19 17.31,18.92 17.91,18.75L20,20L19.38,18.13C20.95,17.22 22,15.71 22,14C22,11.24 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" /></svg>'
        },
        link: 'http://weixin.qq.com/r/mp/tRJpcaTEHvlhreAS90en',
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 11.916098,10.854163 c -0.27014,0.0326 -1.051405,-1.2361096 -1.051405,-1.2361096 0,0.7346496 -0.378187,1.6932796 -1.1965055,2.3855996 0.3947335,0.12169 1.2853805,0.44923 1.0735055,0.80674 -0.171468,0.28929 -2.9416365,0.18472 -3.7413695,0.0946 -0.799733,0.0901 -3.569901,0.19467 -3.74137,-0.0946 -0.2119919,-0.35742 0.677765,-0.6847 1.073038,-0.8066 -0.818437,-0.69231 -1.1966941,-1.65105 -1.1966941,-2.3857396 0,0 -0.7812646,1.2687596 -1.0513814,1.2361096 -0.1258592,-0.0152 -0.2911871,-0.69478 0.21907,-2.3368096 0.2404919,-0.774 0.5155071,-1.41745 0.9408735,-2.47919 -0.071601,-2.73982 1.060405,-5.03802 3.756136,-5.03816 2.665707,1.4e-4 3.8239635,2.25311 3.7561825,5.03819 0.42464,1.05991 0.701061,1.70741 0.940873,2.47916 0.510187,1.6420296 0.344906,2.3215596 0.219047,2.3368096 z"/></svg>'
        },
        link: 'https://qm.qq.com/q/UVUeEaBbm8',
      },
    ]
  }
})
