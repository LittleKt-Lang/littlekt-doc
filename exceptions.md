# 异常处理

## 异常层次结构

LittleKt 内置以下异常类型：

```
Throwable
├── Exception
│   └── RuntimeException
└── Error
```

- **Throwable** — 可抛对象的基类
- **Exception** — 受检异常
- **RuntimeException** — 运行时异常（非受检）
- **Error** — 严重错误，通常不应被捕获

## `throw`

```kotlin
throw Exception("Something went wrong!")
throw RuntimeException("Runtime error")
throw Error("Fatal error")
```

`throw` 只能抛出 `Throwable` 或其子类的实例，否则抛出类型错误。

异常可以带消息：

```kotlin
throw Exception("Invalid input: value must be positive")
```

## `try` / `catch` / `finally`

### 基本语法

```kotlin
try {
    // 可能抛出异常的代码
} catch (e: Exception) {
    // 异常处理
}
```

### 多个 `catch` 子句

按声明顺序匹配，使用第一个匹配的子句：

```kotlin
try {
    // ...
} catch (e: RuntimeException) {
    println("Runtime error: " + e)
} catch (e: Exception) {
    println("General error: " + e)
}
```

### 无类型 `catch`

省略异常类型可捕获所有异常：

```kotlin
try {
    // ...
} catch (e) {
    // 捕获一切
    println("Caught: " + e)
}
```

### `finally` 子句

`finally` 块始终执行，无论是否抛出异常、无论是否有 `return`：

```kotlin
try {
    // ...
} finally {
    println("Cleanup")
}
```

完整的 `try`/`catch`/`finally`：

```kotlin
try {
    // 可能抛出异常
} catch (e: Exception) {
    // 处理异常
} finally {
    // 清理工作（始终执行）
}
```

`finally` 可以单独与 `try` 配合（无 `catch`）：

```kotlin
try {
    openResource()
    // 使用资源
} finally {
    closeResource()    // 始终执行
}
```

### `finally` 与 `return`

当 `try` 块中有 `return` 语句时，`finally` 块在函数返回前执行：

```kotlin
fun test(): String {
    try {
        return "from try"
    } finally {
        println("Cleanup before return")
    }
}
// 打印 "Cleanup before return"，返回 "from try"
```

## `try` 作为表达式

`try` 可作为表达式使用，返回 `try` 块或 `catch` 块的最后一个表达式值：

```kotlin
val result = try {
    riskyOperation()
    42
} catch (e: Exception) {
    -1      // 异常时返回 -1
}
```

`finally` 块的值不影响表达式结果。

## 嵌套 `try`

```kotlin
try {
    println("Outer try")
    try {
        println("Inner try")
        throw Exception("Inner error")
    } catch (e: Exception) {
        println("Inner catch: " + e)
    }
    println("After inner try-catch")
} catch (e: Exception) {
    println("Outer catch: " + e)
}
```

## 自定义异常

通过继承内置异常类创建自定义异常：

```kotlin
open class AppException(val code: Int) : Exception("App error code " + code) {
    fun getCode(): Int {
        return code
    }
}

try {
    throw AppException(404)
} catch (e: AppException) {
    println("Error code: " + e.getCode())  // Error code: 404
}
```

由于异常也是类，可以使用 `val`/`var` 构造参数存储异常数据。

## 异常信息访问

异常实例提供以下属性：

| 属性      | 类型      | 说明                     |
| --------- | --------- | ------------------------ |
| `message` | `String?` | 异常消息，可为 null       |
| `cause`   | `Throwable?` | 导致此异常的原因异常  |

```kotlin
try {
    throw Exception("oops")
} catch (e: Exception) {
    println(e.message)   // oops
    println(e)           // oops（toString 输出消息）
}
```
