# 变量

## `val` — 不可变变量

`val` 声明的变量一旦赋值，不可重新赋值（只读）：

```kotlin
val name = "LittleKt"
val age = 25
val pi = 3.14159
```

尝试重新赋值会抛出运行时错误：

```kotlin
val x = 1
x = 2    // ❌ 运行时错误：不能重新赋值 val
```

## `var` — 可变变量

`var` 声明的变量可随时重新赋值：

```kotlin
var count = 0
count = 1
count = count + 1
```

## 类型注解

```kotlin
val name: String = "LittleKt"
var age: Int = 25
```

类型注解是可选的。提供注解后，运行时会校验赋值类型。

## 赋值

### 简单赋值

```kotlin
var x = 10
x = 20
```

### 复合赋值

支持所有算术运算符的复合赋值形式：

| 运算符   | 等价于         |
| -------- | -------------- |
| `x += a` | `x = x + a`    |
| `x -= a` | `x = x - a`    |
| `x *= a` | `x = x * a`    |
| `x /= a` | `x = x / a`    |
| `x %= a` | `x = x % a`    |

```kotlin
var x = 10
x += 5    // x = 15
x -= 3    // x = 12
x *= 2    // x = 24
x /= 4    // x = 6
x %= 4    // x = 2
```

复合赋值仅可用于简单变量，不能用于属性访问（如 `obj.prop += 1`）。

## 作用域

变量作用域由声明所在的块 `{}` 决定：

```kotlin
val global = "visible everywhere"

fun test() {
    val local = "visible in test()"
    println(global)   // ✓
    println(local)    // ✓
}

// println(local)     // ❌ 不可见
```

内部作用域可以**遮蔽**（shadow）外部同名变量：

```kotlin
val x = 1
{
    val x = 2    // 遮蔽外部的 x
    println(x)   // 2
}
println(x)       // 1
```

## 属性赋值

对实例属性的赋值使用 `.` 语法：

```kotlin
obj.prop = newValue
```

只有 `var` 属性可被重新赋值；`val` 属性重新赋值会抛出运行时错误。

对索引位置的赋值使用 `[]` 语法：

```kotlin
list[0] = newItem
map["key"] = newValue
```
