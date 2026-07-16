# 标准库

## 控制台 I/O

| 函数                     | 说明                 |
| ------------------------ | -------------------- |
| `println(args...)`       | 打印参数（空格分隔）并换行 |
| `print(args...)`         | 打印参数（空格分隔）不换行 |
| `readLine()`             | 从标准输入读取一行，返回 `String` |

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
| `s.length`                    | `Int`        | 字符串长度                    |
| `s.isEmpty`                   | `Boolean`    | 是否为空字符串                |
| `s.isNotEmpty`                | `Boolean`    | 是否非空字符串                |
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

```kotlin
val s = "  Hello LittleKt  "
println(s.trim())              // "Hello LittleKt"
println(s.toUpperCase())       // "  HELLO LITTLEKT  "
println(s.length)              // 20

val num = "42"
println(num.toIntOrNull())     // 42

val bad = "not a number"
println(bad.toIntOrNull())     // null
```

## Int 方法

| 方法           | 返回类型  | 说明             |
| -------------- | --------- | ---------------- |
| `n.toString`   | `String`  | 转为字符串       |

## 异常类型

内置异常构造函数，均接受可选的消息字符串参数：

| 构造函数                  | 说明                               |
| ------------------------- | ---------------------------------- |
| `Throwable(message?)`     | 所有可抛对象的基类                 |
| `Exception(message?)`     | 受检异常基类                       |
| `RuntimeException(message?)` | 运行时异常（非受检）            |
| `Error(message?)`         | 严重错误（通常不可恢复）           |

```kotlin
throw Exception("Invalid input")
throw RuntimeException("Null pointer")
throw Error("Fatal: out of memory")
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

## List 方法

详见[集合文档](collections.md#list)，此处仅列总表：

| 基础方法      | 高阶方法         |
| ------------- | ---------------- |
| `size`        | `map`            |
| `isEmpty`     | `filter`         |
| `add`         | `filterNotNull`  |
| `removeAt`    | `forEach`        |
| `get`         | `any`            |
| `contains`    | `all`            |
| `indexOf`     | `none`           |
|               | `find`           |
|               | `first`          |
|               | `firstOrNull`    |
|               | `flatMap`        |
|               | `fold`           |
|               | `reduce`         |

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

## Array 方法

| 属性/方法        |
| ---------------- |
| `size`           |
| `get(index)`     |
| `set(index, val)`|
