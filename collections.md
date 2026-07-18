# 集合

LittleKt 内置三种集合类型：**List**（可变列表）、**Map**（可变映射）、**Array**（定长数组），以及辅助类型 **Pair**。

## List

`List` 是**可变**、有序的元素集合。

### 创建

**字面量语法**：

```kotlin
val list = [10, 20, 30]
val empty = []
val mixed = [1, "hello", true]
```

**构造函数**：

```kotlin
val list = listOf("a", "b", "c")
```

### 索引访问

```kotlin
val item = list[0]       // 读取
list[0] = newValue       // 写入
```

索引越界抛出运行时错误。

### 属性

| 属性          | 类型      | 说明       |
| ------------- | --------- | ---------- |
| `size`        | `Int`     | 元素个数   |
| `isEmpty`     | `Boolean` | 是否为空   |
| `isNotEmpty`  | `Boolean` | 是否非空   |

### 基础方法

| 方法                | 返回值      | 说明                         |
| ------------------- | ----------- | ---------------------------- |
| `add(element)`      | `Boolean`   | 追加元素到末尾               |
| `removeAt(index)`   | `T`         | 移除并返回指定索引的元素     |
| `get(index)`        | `T`         | 获取指定索引的元素           |
| `contains(element)` | `Boolean`   | 是否包含指定元素             |
| `indexOf(element)`  | `Int`       | 获取元素首次出现的索引，-1 表示未找到 |

### 高阶函数

| 方法                           | 返回值    | 说明                             |
| ------------------------------ | --------- | -------------------------------- |
| `map { it -> ... }`            | `List`    | 转换每个元素，返回新列表         |
| `filter { it -> ... }`         | `List`    | 保留满足条件的元素               |
| `filterNotNull()`              | `List`    | 过滤掉 null 元素                 |
| `forEach { it -> ... }`        | `Unit`    | 遍历每个元素执行操作             |
| `any { it -> ... }`            | `Boolean` | 是否至少一个元素满足条件         |
| `all { it -> ... }`            | `Boolean` | 是否所有元素满足条件             |
| `none { it -> ... }`           | `Boolean` | 是否没有元素满足条件             |
| `find { it -> ... }`           | `T?`      | 查找第一个满足条件的元素或 null  |
| `first()`                      | `T`       | 获取第一个元素（空列表抛错）     |
| `first { it -> ... }`          | `T`       | 获取第一个满足条件的元素         |
| `firstOrNull()`                | `T?`      | 获取第一个元素，空则返回 null    |
| `firstOrNull { it -> ... }`    | `T?`      | 获取第一个满足条件的元素或 null  |
| `flatMap { it -> ... }`        | `List`    | 映射为集合后展平为一个列表       |
| `fold(initial) { acc, e -> }`  | `R`       | 带初始值的累积（左折叠）         |
| `reduce { acc, e -> ... }`     | `T`       | 累积（无初始值，空列表抛错）     |

```kotlin
val nums = listOf(1, 2, 3, 4, 5)

val doubled = nums.map { it * 2 }          // [2, 4, 6, 8, 10]
val evens = nums.filter { it % 2 == 0 }     // [2, 4]
val sum = nums.fold(0) { acc, e -> acc + e } // 15
val hasLarge = nums.any { it > 3 }           // true
```

## Map

`Map` 是**可变**键值对映射。

### 创建

**字面量语法**：

```kotlin
val map = ["a" to 1, "b" to 2, "c" to 3]
```

**构造函数**：

```kotlin
val map = mapOf("one" to 1, "two" to 2, "three" to 3)
```

### 索引访问

```kotlin
val value = map["key"]       // 读取（键不存在返回 null）
map["key"] = newValue        // 写入/插入
```

### 属性

| 属性      | 类型      | 说明       |
| --------- | --------- | ---------- |
| `size`    | `Int`     | 键值对数量 |
| `isEmpty` | `Boolean` | 是否为空   |

### 方法

| 方法                          | 返回值      | 说明                       |
| ----------------------------- | ----------- | -------------------------- |
| `get(key)`                    | `V?`        | 按键取值，不存在返回 null  |
| `put(key, value)`             | `V?`        | 插入/更新键值对            |
| `containsKey(key)`            | `Boolean`   | 是否包含指定键             |
| `remove(key)`                 | `V?`        | 移除键值对                 |
| `keys`                        | `List`      | 所有键的列表               |
| `values`                      | `List`      | 所有值的列表               |
| `mapKeys { it -> ... }`       | `Map`       | 转换键，返回新 Map         |
| `mapValues { it -> ... }`     | `Map`       | 转换值，返回新 Map         |
| `filter { k, v -> ... }`      | `Map`       | 过滤键值对，返回新 Map     |
| `filterKeys { it -> ... }`    | `Map`       | 过滤键，返回新 Map         |
| `forEach { k, v -> ... }`     | `Unit`      | 遍历键值对                 |

Map 也可用 `for` 遍历，每次迭代得到键值对（Pair）：

```kotlin
val map = mapOf("a" to 1, "b" to 2)

map.put("c", 3)                    // 插入
println(map["b"])                   // 2
println(map.containsKey("a"))      // true

map.forEach { key, value ->
    println("$key -> $value")
}
```

## Array

`Array` 是**定长**数组，创建后大小不可变。

### 创建

```kotlin
val arr = arrayOf(10, 20, 30)
val nulls = arrayOfNulls(5)    // [null, null, null, null, null]
```

### 索引访问

```kotlin
val item = arr[0]        // 读取
arr[0] = newValue        // 写入
```

### 属性与方法

| 属性/方法           | 说明             |
| ------------------- | ---------------- |
| `size`              | 数组长度         |
| `get(index)`        | 获取指定索引元素 |
| `set(index, value)` | 设置指定索引元素 |

```kotlin
val arr = arrayOf(10, 20, 30)
for (item in arr) {
    println(item)
}
```

Array 创建后大小不可变，也不含高阶函数。

## Pair

`Pair` 是一个包含 `first` 和 `second` 两个属性的简单数据结构。

### 创建

通过 `to` 中缀运算符创建：

```kotlin
val pair = "key" to 42
```

Pair 主要用于 `Map` 字面量和 `mapOf()` 的参数：

```kotlin
val map = ["a" to 1, "b" to 2]
val fromFunc = mapOf("x" to 10, "y" to 20)
```
