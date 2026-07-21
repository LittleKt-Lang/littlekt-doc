---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "LittleKt"
  text: "受 Kotlin 启发的动态类型编程语言"
  tagline: 简洁、表达力强、空安全 — 吸收 Kotlin 核心语法，保持动态语言的灵活性
  image:
    src: /logo.png
    alt: LittleKt Logo
  actions:
    - theme: brand
      text: 查看文档
      link: /overview
    - theme: alt
      text: 在线尝试
      link: https://play.littlekt.org
    - theme: alt
      text: 赞助我们
      link: https://sponsor.potatoblock.com

features:
  - icon: 🎯
    title: 动态类型 + 可选类型注解
    details: 可省略类型由解释器自动推导，也可显式注解以获得运行时类型校验
  - icon: 🛡️
    title: 空安全运算符
    details: ?.、?:、!! 等运算符帮助安全处理可空值，告别空指针异常
  - icon: ⚡
    title: 表达式优先
    details: if、when、try 均可作为表达式使用，代码更简洁紧凑
  - icon: 🔤
    title: 字符串模板
    details: 内置 $var 和 ${expr} 插值语法，字符串拼接更直观
  - icon: λ
    title: Lambda 与高阶函数
    details: 支持 { it -> ... } 风格的 Lambda 和集合链式调用
  - icon: 🏗️
    title: 类与继承
    details: 经典的 open class / override 单继承模型，简洁明了
---
