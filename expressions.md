# 表达式与运算符

## 算术运算符

| 运算符 | 说明   | 示例    | 优先级 |
| ------ | ------ | ------- | ------ |
| `*`    | 乘法   | `a * b` | 6      |
| `/`    | 除法   | `a / b` | 6      |
| `%`    | 取模   | `a % b` | 6      |
| `+`    | 加法   | `a + b` | 5      |
| `-`    | 减法   | `a - b` | 5      |

整数除法结果为截断整数（向零取整）。操作数均为 `Int` 时结果为 `Int`，任一为 `Double` 则结果为 `Double`。

`+` 运算符也用于字符串拼接：

```kotlin
"Hello, " + "World!"       // "Hello, World!"
"value: " + 42             // "value: 42"
```

除数为零时抛出运行时错误。

## 比较运算符

| 运算符 | 说明       |
| ------ | ---------- |
| `==`   | 等于       |
| `!=`   | 不等于     |
| `<`    | 小于       |
| `>`    | 大于       |
| `<=`   | 小于等于   |
| `>=`   | 大于等于   |

`==` 和 `!=` 比较**结构相等**（值相等），而非引用相等。比较运算符仅适用于数值类型。

## 逻辑运算符

| 运算符 | 说明         | 优先级 |
| ------ | ------------ | ------ |
| `!`    | 逻辑非       | —      |
| `&&`   | 逻辑与（短路）| 2      |
| `\|\|` | 逻辑或（短路）| 1      |

逻辑运算符采用**短路求值**并返回原始操作数：

```kotlin
val a = null
val b = "hello"
val result = a && b    // 返回 null（短路，不执行 b）
val result2 = a || b   // 返回 "hello"
```

## 自增/自减运算符

支持前缀和后缀形式，仅用于变量：

```kotlin
var x = 5
++x       // 前缀：x 变为 6，返回 6
x++       // 后缀：返回 6，x 变为 7
--x       // 前缀自减：x 变为 6，返回 6
x--       // 后缀自减：返回 6，x 变为 5
```

## 范围运算符

`..` 创建闭区间整数范围：

```kotlin
1..5       // 1 到 5（含 5）
0..9       // 0 到 9（含 9）
```

范围用于 `for` 循环迭代：

```kotlin
for (i in 1..5) {
    println(i)     // 依次打印 1, 2, 3, 4, 5
}
```

范围操作数必须均为 `Int`。`step` 关键字已保留，但 `x..y step n` 语法尚未实现。

## 空安全运算符

### `?.` — 安全调用（属性/方法）

如果接收者为 `null`，短路返回 `null`：

**属性访问**：

```kotlin
val person: Person? = null
val name = person?.name      // 返回 null
```

**方法调用**：

```kotlin
person?.greet()              // 不执行，返回 null
```

### `?:` — Elvis 运算符

如果左侧为 `null`，返回右侧的值：

```kotlin
val name = nullableName ?: "default"
val count = nullInt ?: 0
```

Elvis 可链式使用：

```kotlin
val result = a ?: b ?: c ?: "fallback"
```

### `!!` — 非空断言

如果值为 `null`，抛出 `RuntimeException`；否则返回原值：

```kotlin
val known: String? = "hello"
val nonNull: String = known!!   // 强制解包，结果是 "hello"
```

## 类型检查运算符

`is` 仅支持内置类型（`Int`、`Double`、`String`、`Boolean`、`Null`、`List`、`Array`、`Map`、`Pair`），不支持用户自定义类：

```kotlin
x is Int       // 检查 x 是否为 Int
x is String    // 检查 x 是否为 String
x is List      // 检查 x 是否为 List
```

优先级为 4，与比较运算符同级。

## `to` 中缀运算符

创建 `Pair` 键值对：

```kotlin
"a" to 1           // Pair("a", 1)
"name" to "Kt"     // Pair("name", "Kt")
```

`to` 优先级为 3，低于 `+`。主要用于 Map 字面量和 `mapOf()` 调用。

## 成员访问运算符

### `.` — 属性访问

```kotlin
obj.property
obj.method(args)
list.size
str.length
```

### `[]` — 索引访问

```kotlin
list[0]            // 读取
map["key"]         // 读取
str[0]             // 读取字符串首字符（返回 String）

list[0] = newValue // 写入
map["key"] = value // 写入
```

### `?.` — 空安全成员访问

参见上方[空安全运算符](#-安全调用属性方法)。

## 函数调用

```kotlin
functionName(argument1, argument2)
obj.method(arg)
```

支持尾随 Lambda 语法：当最后一个参数是 Lambda 时，可将其放在括号外：

```kotlin
nums.filter { it > 0 }
// 等价于 nums.filter({ it > 0 })
```

## 字符串模板

字符串内可嵌入表达式，运行时求值并拼接：

### `$变量名`

```kotlin
val name = "LittleKt"
println("Hello, $name!")       // Hello, LittleKt!
```

### `${表达式}`

```kotlin
val version = 2
println("Next: ${version + 1}")  // Next: 3
println("Sum: ${1 + 2 + 3}")     // Sum: 6
println("Size: ${items.size}")    // 属性访问
```

### `$$` 转义

`$$` 产生一个字面量 `$`：

```kotlin
println("Price: $$99.99")       // Price: $99.99
```

### 多模板混合

```kotlin
println("$name version $version")
println("Info: name=$name, ver=${version}")
```

字符串模板同时适用于普通字符串（`"..."`）和原始字符串（`"""..."""`）。

## 运算符优先级总表

| 优先级 | 运算符                            | 结合性     |
| ------ | --------------------------------- | ---------- |
| 8      | `()` `.` `[]` `?.` `!!` `++` `--`（后缀） | 左结合 |
| 7      | `!` `-` `++` `--`（前缀）          | 右结合     |
| 6      | `*` `/` `%`                       | 左结合     |
| 5      | `+` `-`                           | 左结合     |
| 4      | `==` `!=` `<` `>` `<=` `>=` `is`  | 左结合     |
| 3      | `..` `to`                         | 左结合     |
| 2      | `&&`                              | 左结合     |
| 1      | `\|\|` `?:`                       | 左结合     |
