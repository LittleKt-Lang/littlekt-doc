# 词法语法

## 语句分隔

语句以**换行符**（LF）或**分号**（`;`）结束，两者等价：

```kotlin
val a = 1
val b = 2; val c = 3
```

空行被折叠（连续换行不会产生多余的空语句）。在圆括号 `()` 和方括号 `[]` 内部的换行被忽略（不计入语句分隔）。

## 注释

### 行注释

以 `//` 开头，到行尾结束：

```kotlin
// 这是一条行注释
val x = 1  // 行尾注释
```

### 块注释（可嵌套）

以 `/*` 开头，以 `*/` 结束。LittleKt 的块注释**支持嵌套**：

```kotlin
/* 外层注释
   /* 内层嵌套注释 */
   回到外层 */
val x = 1
```

## 标识符

标识符以字母（`a-z`、`A-Z`）或下划线（`_`）开头，后跟任意数量的字母、数字或下划线。

```kotlin
validName
_private
camelCase
snake_case
value1
```

## 关键字

以下是保留关键字，不能用作标识符：

|          |           |            |           |
| -------- | --------- | ---------- | --------- |
| `val`    | `var`     | `fun`      | `class`   |
| `if`     | `else`    | `when`     | `for`     |
| `while`  | `in`      | `return`   | `break`   |
| `continue`| `true`   | `false`    | `null`    |
| `init`   | `this`    | `super`    | `is`      |
| `and`    | `or`      | `not`      | `step`    |
| `to`     | `try`     | `catch`    | `finally` |
| `throw`  | `open`    | `override` |           |

> **注意**：`and`、`or`、`not` 为保留字，但当前实现使用 `&&`、`||`、`!` 作为逻辑运算符。

## 字面量

### 整数（Int）

```kotlin
42
-7
1_000_000        // 下划线分隔，提高可读性
```

下划线仅用于视觉分隔，不影响数值大小。

### 浮点数（Double）

```kotlin
3.14159
1.5e10           // 科学记数法：1.5 × 10¹⁰
2.5e-3           // 0.0025
```

### 布尔值（Boolean）

```kotlin
true
false
```

### 空值（Null）

```kotlin
null
```

### 字符串

#### 普通字符串（双引号）

```kotlin
"Hello, World!"
"Line1\nLine2\tTabbed"
```

支持转义序列：

| 转义序列  | 含义               |
| --------- | ------------------ |
| `\n`      | 换行（LF）         |
| `\t`      | 制表符             |
| `\r`      | 回车（CR）         |
| `\\`      | 反斜杠             |
| `\"`      | 双引号             |
| `\$`      | 美元符号           |
| `\uXXXX`  | Unicode 码点       |

#### 原始字符串（三引号）

三引号 `"""..."""` 内的内容原样保留（含换行），无需转义：

```kotlin
val poem = """Roses are red,
Violets are blue,
This is a raw string
With multiple lines!"""
```

原始字符串仍支持模板插值（见[字符串模板](expressions.md#字符串模板)），但 `$` 需用 `$$` 转义。

### 列表字面量

```kotlin
[1, 2, 3]
["a", "b", "c"]
[]               // 空列表
```

详见[集合](collections.md)。

### Map 字面量

```kotlin
["a" to 1, "b" to 2]
```

详见[集合](collections.md)。
