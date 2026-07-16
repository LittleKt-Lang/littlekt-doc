# LittleKt 语言概述

LittleKt 是一门受 Kotlin 启发的动态类型编程语言。它吸收 Kotlin 核心语法特性，同时保持简洁易用。

## 设计特点

- **动态类型 + 可选类型注解** — 可省略类型由解释器自动推导，也可显式注解以获得运行时类型校验
- **空安全运算符** — `?.`、`?:`、`!!` 等运算符帮助安全处理可空值
- **表达式优先** — `if`、`when`、`try` 均可作为表达式使用
- **字符串模板** — 内置 `$var` 和 `${expr}` 插值语法
- **Lambda 与高阶函数** — 支持 `{ it -> ... }` 风格的 Lambda 和集合链式调用
- **类与继承** — 经典的 `open class` / `override` 单继承模型
- **简洁的集合字面量** — `[1, 2, 3]` 和 `["a" to 1]` 字面量语法

## 快速示例

```kotlin
// 变量
val name = "LittleKt"
var version = 1

// 函数
fun greet(subject: String): String {
    return "Hello, $subject!"
}

// 条件表达式
val label = if (version > 0) "new" else "old"

// when 表达式
val desc = when (name) {
    "LittleKt" -> "the best language"
    else -> "something else"
}

// 循环
for (i in 1..5) {
    println(i)
}

// 类和继承
open class Animal(val species: String) {
    open fun sound(): String = "unknown"
}

class Dog(val name: String) : Animal("dog") {
    override fun sound(): String = "$name barks!"
}

// Lambda 与集合
val nums = [1, 2, 3, 4, 5]
val evens = nums.filter { it % 2 == 0 }
val squares = nums.map { it * it }

// 异常处理
val result = try {
    riskyOperation()
} catch (e: Exception) {
    "fallback"
}

greet("World")
```

## 官方实现

| 实现  | 宿主语言     | 说明                         |
| ----- | ------------ | ---------------------------- |
| JsKt  | JavaScript   | 基于 Node.js / 浏览器的解释器 |
| PyKt  | Python 2.7   | 基于 CPython 的解释器         |

本文档描述 **LittleKt 语言规范**，与具体实现无关。各实现可能在标准库扩展、宿主互操作等方面有所差异。

## 文档索引

| 文档                                              | 内容                         |
| ------------------------------------------------- | ---------------------------- |
| [词法语法](syntax.md)                             | 注释、标识符、关键字、字面量 |
| [类型系统](types.md)                              | 基础类型、可空类型、泛型     |
| [变量](variables.md)                              | val/var、赋值、复合赋值      |
| [表达式与运算符](expressions.md)                  | 运算符、字符串模板、字面量   |
| [控制流](control-flow.md)                         | if、when、for、while         |
| [函数与 Lambda](functions.md)                     | 函数声明、Lambda、闭包       |
| [类与继承](classes.md)                            | class、open、override、super |
| [异常处理](exceptions.md)                         | try/catch/finally、throw     |
| [集合](collections.md)                            | List、Map、Array、Pair       |
| [标准库](stdlib.md)                               | 内置函数与异常层次结构       |
