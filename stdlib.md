# 标准库

## 控制台 I/O

| 函数                     | 说明                 |
| ------------------------ | -------------------- |
| `println(args...)`       | 打印参数（空格分隔）并换行 |
| `print(args...)`         | 打印参数（空格分隔）不换行 |
| `readLine()`             | 从标准输入读取一行，返回 `String`，EOF 时返回 `null` |

```kotlin
println("Hello, World!")
println("The answer is", 42)
print("Enter your name: ")
val name = readLine()
println("Hi, $name!")
```

## 集合构造函数

| 函数                     | 说明                           |
| ------------------------ | ------------------------------ |
| `listOf(args...)`        | 创建包含所有参数的 `List`      |
| `mapOf(pair1, pair2...)` | 从 `Pair` 参数创建 `Map`       |
| `arrayOf(args...)`       | 创建包含所有参数的 `Array`     |
| `arrayOfNulls(size)`     | 创建指定大小的全 `null` `Array`|

```kotlin
val list = listOf(1, 2, 3, 4)
val map = mapOf("a" to 1, "b" to 2)
val arr = arrayOf(10, 20, 30)
val nulls = arrayOfNulls(5)
```

## String 方法

| 方法                          | 返回类型     | 说明                          |
| ----------------------------- | ------------ | ----------------------------- |
| `s.length`                    | `Int`        | 字符串长度（属性）            |
| `s.isEmpty`                   | `Boolean`    | 是否为空字符串（属性）        |
| `s.isNotEmpty`                | `Boolean`    | 是否非空字符串（属性）        |
| `s.substring(start, end?)`    | `String`     | 取子串，end 可选默认到末尾    |
| `s.contains(substr)`          | `Boolean`    | 是否包含子串                  |
| `s.startsWith(prefix)`        | `Boolean`    | 是否以 prefix 开头            |
| `s.endsWith(suffix)`          | `Boolean`    | 是否以 suffix 结尾            |
| `s.replace(old, new)`         | `String`     | 替换所有出现的 old 为 new     |
| `s.toLowerCase()`             | `String`     | 转为小写                      |
| `s.toUpperCase()`             | `String`     | 转为大写                      |
| `s.trim()`                    | `String`     | 去除首尾空白字符              |
| `s.toInt()`                   | `Int`        | 转为 Int，失败抛出异常        |
| `s.toIntOrNull()`             | `Int?`       | 转为 Int，失败返回 null       |
| `s.toDoubleOrNull()`          | `Double?`    | 转为 Double，失败返回 null    |
| `s.toBoolean()`               | `Boolean`    | 字符串小写后等于 `"true"` 时返回 true |

```kotlin
val s = "  Hello LittleKt  "
println(s.trim())              // "Hello LittleKt"
println(s.toUpperCase())       // "  HELLO LITTLEKT  "
println(s.length)              // 20

val num = "42"
println(num.toIntOrNull())     // 42

val bad = "not a number"
println(bad.toIntOrNull())     // null

println("true".toBoolean())    // true
println("false".toBoolean())   // false
```

## Int / Double 方法

| 方法           | 返回类型  | 说明             |
| -------------- | --------- | ---------------- |
| `n.toString`   | `String`  | 转为字符串（属性，无括号） |
| `n.toDouble`   | `Double`  | Int 转 Double（属性）     |
| `n.toInt`      | `Int`     | Double 转 Int，截断小数（属性） |

```kotlin
val x = 42
println(x.toString)    // "42"
println(x.toDouble)    // 42.0

val y = 3.14
println(y.toString)    // "3.14"
println(y.toInt)       // 3
```

> 注意：`toString`、`toDouble`、`toInt` 是**属性**而非方法，调用时不需要括号。

## 异常类型

内置异常构造函数，均接受可选的消息字符串和 cause 参数：

| 构造函数                        | 说明                               |
| ------------------------------- | ---------------------------------- |
| `Throwable(message?, cause?)`   | 所有可抛对象的基类                 |
| `Exception(message?, cause?)`   | 受检异常基类                       |
| `RuntimeException(message?, cause?)` | 运行时异常（非受检）          |
| `Error(message?, cause?)`       | 严重错误（通常不可恢复）           |

```kotlin
throw Exception("Invalid input")
throw RuntimeException("Null pointer")
throw Error("Fatal: out of memory")

// 带 cause 的异常链
throw Exception("wrap", originalError)
```

异常实例可访问的属性：

```kotlin
try {
    throw Exception("something failed")
} catch (e: Exception) {
    println(e.message)    // "something failed"
    println(e.cause)      // null
    println(e)            // "something failed"
}
```

> Python 侧注入的函数抛出的异常会被包裹为 `PktPythonException`，可在 LittleKt 中通过无类型 `catch (e)` 捕获。

## List 方法

详见[集合文档](collections.md#list)，此处仅列总表：

| 基础方法      | 高阶方法         |
| ------------- | ---------------- |
| `size`        | `map`            |
| `isEmpty`     | `filter`         |
| `isNotEmpty`  | `filterNotNull`  |
| `add`         | `forEach`        |
| `removeAt`    | `any`            |
| `get`         | `all`            |
| `contains`    | `none`           |
| `indexOf`     | `find`           |
|               | `first`          |
|               | `firstOrNull`    |
|               | `flatMap`        |
|               | `fold`           |
|               | `reduce`         |

> List 可通过 `for` 循环遍历。`first` 和 `firstOrNull` 可接受谓词或零参数。

## Map 方法

详见[集合文档](collections.md#map)，此处仅列总表：

| 基础方法       | 高阶方法      |
| -------------- | ------------- |
| `size`         | `forEach`     |
| `isEmpty`      | `mapKeys`     |
| `get`          | `mapValues`   |
| `put`          | `filter`      |
| `containsKey`  | `filterKeys`  |
| `remove`       |               |
| `keys`         |               |
| `values`       |               |

> Map 支持 `for` 循环遍历，每次迭代得到键值对。

## Array 方法

| 属性/方法        |
| ---------------- |
| `size`           |
| `get(index)`     |
| `set(index, val)`|

> Array 创建后大小不可变，不含高阶函数。
