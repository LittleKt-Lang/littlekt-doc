# 控制流

## `if` / `else`

### 作为语句

```kotlin
if (condition) {
    // then 分支
} else {
    // else 分支
}
```

`else` 分支可选。条件必须用圆括号 `()` 包裹。

```kotlin
if (x > 5) {
    println("x is large")
}

if (x > 0) {
    println("positive")
} else {
    println("non-positive")
}
```

### 作为表达式

`if` 作为表达式时**必须**有 `else` 分支，两个分支的类型需兼容：

```kotlin
val result = if (x > 0) {
    "positive"
} else {
    "non-positive"
}
```

也可以用单表达式写法：

```kotlin
val max = if (a > b) a else b
```

### 多分支级联

```kotlin
if (score >= 90) {
    grade = "A"
} else if (score >= 80) {
    grade = "B"
} else if (score >= 70) {
    grade = "C"
} else {
    grade = "F"
}
```

## `when`

`when` 是多分支选择结构，可作为语句或表达式。

### 带主体的 `when`

将 `subject` 与各分支条件进行相等比较：

```kotlin
when (color) {
    "red" -> println("Red!")
    "blue" -> println("Blue!")
    "green" -> println("Green!")
    else -> println("Other")
}
```

单行分支：

```kotlin
when (x) {
    1 -> "one"
    2 -> "two"
    else -> "other"
}
```

多语句块分支：

```kotlin
when (x) {
    1 -> {
        println("processing one")
        doSomething()
    }
    else -> println("other")
}
```

### 无主体的 `when`

每个分支条件直接求值为布尔值：

```kotlin
when {
    x > 100 -> println("huge")
    x > 10  -> println("medium")
    else    -> println("small")
}
```

### 多条件分支

一个分支可匹配多个条件，用逗号分隔：

```kotlin
when (x) {
    1, 2, 3 -> println("small number")
    4, 5, 6 -> println("medium number")
    else    -> println("other")
}
```

### 作为表达式

```kotlin
val result = when (x) {
    1 -> "one"
    2 -> "two"
    else -> "other"
}

val description = when {
    x > 0 -> "positive"
    x < 0 -> "negative"
    else -> "zero"
}
```

## `for` 循环

```kotlin
for (variable in iterable) {
    // 循环体
}
```

### 范围迭代

```kotlin
for (i in 1..5) {
    println(i)     // 1, 2, 3, 4, 5
}
```

范围是闭区间（包含两端）。支持正序和倒序范围。

### 列表迭代

```kotlin
val items = [10, 20, 30]
for (item in items) {
    println(item)
}
```

### 数组迭代

```kotlin
val arr = arrayOf(10, 20, 30)
for (item in arr) {
    println(item)
}
```

## `while` 循环

```kotlin
while (condition) {
    // 循环体
}
```

条件每次迭代前求值：

```kotlin
var count = 3
while (count > 0) {
    println(count)
    count = count - 1
}
// 打印：3, 2, 1
```

## `break` 和 `continue`

### `break`

立即退出最内层循环：

```kotlin
for (i in 1..10) {
    if (i > 5) {
        break       // i > 5 时退出循环
    }
    println(i)
}
// 打印：1, 2, 3, 4, 5
```

### `continue`

跳到最内层循环的下一次迭代：

```kotlin
for (i in 1..5) {
    if (i == 3) {
        continue    // 跳过 i == 3
    }
    println(i)
}
// 打印：1, 2, 4, 5
```

### 作用域限制

`break` 和 `continue` 只能在循环内部使用。在循环外使用会导致解析错误。

## 空安全与假值

在条件判断中，只有 `null` 和 `false` 被视为假值。其他所有值（包括 `0`、空字符串 `""`、空列表 `[]`）均为真值：

```kotlin
if (0) { /* 执行 — 0 是真值 */ }
if ("") { /* 执行 — "" 是真值 */ }
if ([]) { /* 执行 — [] 是真值 */ }
if (null) { /* 不执行 */ }
if (false) { /* 不执行 */ }
```
