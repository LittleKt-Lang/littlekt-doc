# 函数与 Lambda

## 函数声明

### 基本语法

```kotlin
fun functionName(param1, param2) {
    // 函数体
}
```

### 参数

参数可带有可选的类型注解和默认值：

```kotlin
fun greet(name: String, greeting: String = "Hello") {
    println("$greeting, $name!")
}

greet("World")                  // Hello, World!
greet("World", "Hi")            // Hi, World!
```

### 返回类型

返回类型注解是可选的：

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

fun noReturn(): Unit {
    println("side effect only")
}
```

`Unit` 等同于 `Null`，表示无返回值。省略返回类型时，如果所有路径均无返回值则默认为 `Unit`，否则推导为 `Any`。

### 表达式体语法

使用 `=` 代替 `{ }` 表示单表达式函数：

```kotlin
fun add(a: Int, b: Int): Int = a + b
fun square(x) = x * x
fun max(a: Int, b: Int) = if (a > b) a else b
```

### `return` 语句

```kotlin
fun foo() {
    return               // 返回 Unit
}

fun bar(): Int {
    return 42            // 返回值
}
```

不带值的 `return` 只允许在返回类型为 `Unit` 的函数中使用。带值的 `return` 类型必须与声明的返回类型兼容。

## 匿名函数

`fun` 关键字可作为表达式创建匿名函数：

```kotlin
val add = fun(x, y) {
    return x + y
}

println(add(3, 4))    // 7
```

匿名函数支持完整的参数列表和返回类型：

```kotlin
val transform = fun(input: String): Int {
    return input.length
}
```

## 闭包

函数捕获定义时所在作用域的变量（词法作用域）：

```kotlin
fun makeCounter() {
    var count = 0
    return fun() {
        count = count + 1
        return count
    }
}

val counter = makeCounter()
println(counter())    // 1
println(counter())    // 2
```

## 泛型函数

```kotlin
fun <T> identity(x: T): T = x
fun <T> firstElement(list: List<T>): T = list[0]
```

类型参数在函数名前用 `<T>` 声明，可以有多个参数：`<T, U>`。

调用时从实参类型自动推断具体类型。

## Lambda 表达式

### 基本语法

```kotlin
{ 参数列表 -> 函数体 }
```

### 隐式参数 `it`

无显式参数时，Lambda 自动拥有隐式参数 `it`：

```kotlin
val square = { it * it }
println(square(4))         // 16

val isEven = { it % 2 == 0 }
println(isEven(5))         // false
```

### 显式参数

```kotlin
val sum = { a, b -> a + b }
println(sum(3, 4))         // 7

val greet = { name, greeting -> "$greeting, $name!" }
```

### 多行 Lambda

Lambda 体可以是任意表达式：

```kotlin
val process = { x ->
    val doubled = x * 2
    doubled + 1
}
```

### 尾随 Lambda

当函数调用的最后一个参数是 Lambda 时，可将其写在括号外：

```kotlin
val evens = nums.filter { it % 2 == 0 }
// 等价于 nums.filter({ it % 2 == 0 })

nums.forEach {
    println(it)
}
```

### Lambda 与集合

LittleKt 将 Lambda 与集合高阶函数结合使用（详见[集合](collections.md)）：

```kotlin
val nums = listOf(1, 2, 3, 4, 5)

val doubled = nums.map { it * 2 }
val evens = nums.filter { it % 2 == 0 }
val hasLarge = nums.any { it > 3 }
val allPositive = nums.all { it > 0 }
```

## 函数作为值

函数可作为值传递和返回：

```kotlin
fun apply(x: Int, operation: (Int) -> Int): Int {
    return operation(x)
}

val result = apply(5, { it * it })    // 25
```
