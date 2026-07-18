# 类型系统

LittleKt 是**动态类型**语言，变量在运行时不强制要求类型声明。但语言提供了**可选的类型注解**机制，注解后会在运行时执行类型校验。

## 基础类型

| 类型       | 说明        | 示例值                |
| ---------- | ----------- | --------------------- |
| `Int`      | 整数        | `42`, `-7`, `1_000`   |
| `Double`   | 浮点数      | `3.14`, `1e10`        |
| `String`   | 字符串      | `"hello"`             |
| `Boolean`  | 布尔值      | `true`, `false`       |
| `Null`     | 空值        | `null`                |
| `List`     | 可变列表    | `[1, 2, 3]`           |
| `Array`    | 定长数组    | `arrayOf(1, 2, 3)`    |
| `Map`      | 可变映射    | `["a" to 1]`          |
| `Pair`     | 键值对      | `"a" to 1`            |
| `Function` | 函数引用    | Lambda、函数名         |
| `IntRange` | 整数范围    | `1..5`                |
| `Any`      | 顶层类型    | 任意值                |
| `Unit`     | 无返回值类型 | 等价于 `Null`         |

`Unit` 是函数的默认返回类型，运行时表示为 `null`。只有 `null` 和 `false` 为**假值**，其他所有值（包括 `0`、`""`、`[]`）均为真值。

## 可空类型

在类型名后添加 `?` 表示可空类型：

```kotlin
val name: String? = null        // 允许
val age: Int? = null            // 允许
val flag: Boolean? = true       // 可空布尔
```

将 `null` 赋值给非空类型会在运行时抛出类型错误：

```kotlin
val name: String = null   // ❌ 运行时类型错误
```

可空类型可安全地用于函数参数：

```kotlin
fun process(value: String?) {
    val safe = value ?: "default"
    println("Processed: $safe")
}

process(null)       // Processed: default
process("hello")    // Processed: hello
```

## 类型注解

类型注解使用 `: Type` 语法，支持以下位置：

### 变量声明

```kotlin
val name: String = "LittleKt"
var count: Int = 0
```

### 函数参数

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}
```

### 返回类型

```kotlin
fun greet(): String {
    return "Hello!"
}

fun noReturn(): Unit {
    println("side effect only")
}
```

### Catch 子句

```kotlin
try {
    // ...
} catch (e: Exception) {
    // ...
}
```

## 泛型类型

LittleKt 支持简单泛型，用于集合类型注解和泛型函数/类：

### 集合泛型

```kotlin
val list: List<String> = listOf("a", "b", "c")
val map: Map<String, Int> = mapOf("one" to 1, "two" to 2)
val arr: Array<Int> = arrayOf(10, 20, 30)
val nullableList: List<String?> = listOf("a", null, "c")
```

### 泛型函数

```kotlin
fun <T> identity(x: T): T = x
```

类型参数在函数名之前用 `<T>` 声明，调用时从实参类型自动推断。

### 泛型类

```kotlin
class Box<T>(val value: T) {
    fun get(): T = value
    fun <U> map(f: (T) -> U): Box<U> = Box(f(value))
}
```

> 未解析的泛型参数采用类型擦除（erasure）语义，运行时静默接受，不会报错。

## 类型推导

如果省略类型注解，类型由初始值推导。在变量声明中：

```kotlin
val a = 42           // 推导为 Int
val b = 3.14         // 推导为 Double
val c = "hello"      // 推导为 String
val d = true         // 推导为 Boolean
val e = null         // 推导为 Null
val f = [1, 2, 3]    // 推导为 List
```

无初始值的变量类型默认为 `Any`：

```kotlin
var x               // 类型为 Any
x = 42              // 允许
x = "hello"         // 允许
```

## 函数类型

函数类型注解使用 `(参数类型) -> 返回类型` 语法：

```kotlin
val square: (Int) -> Int = { it * it }
```

## 运行时类型检查

### `is` 运算符

检查值是否为指定类型。仅支持内置类型：

```kotlin
x is Int          // true 如果 x 是 Int
x is Double
x is String
x is Boolean
x is Null
x is List
x is Array
x is Map
x is Pair
```

> `is` 不支持用户自定义类的类型检查。`when` 也不提供智能类型转换（smart-casting）。

### 异常类型匹配

`catch` 子句按声明顺序进行类型匹配，支持继承层次检查：

```kotlin
try {
    // ...
} catch (e: RuntimeException) {
    // 匹配 RuntimeException 及其子类
} catch (e: Exception) {
    // 匹配 Exception 及其子类
}
```

无类型的 `catch` 子句匹配所有异常，包括 Python 异常：

```kotlin
try {
    // ...
} catch (e) {
    // 捕获所有异常，包括从 Python 侧抛出的
}
```
