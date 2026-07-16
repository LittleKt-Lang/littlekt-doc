# 类与继承

## 基本类声明

```kotlin
class ClassName {
    // 成员
}
```

## 主构造函数

类名后直接声明主构造函数参数：

```kotlin
class Person(val name: String, val age: Int)
```

- `val` 参数 — 自动成为只读属性
- `var` 参数 — 自动成为可变属性
- 无 `val`/`var` 的参数 — 仅为构造参数，不成为属性

```kotlin
class Point(val x: Int, val y: Int)     // x, y 是只读属性
class Counter(var count: Int)            // count 是可变属性
class Helper(prefix: String)             // prefix 仅为构造参数
```

**注意**：构造参数**必须**有类型注解。

## 实例化

无需 `new` 关键字：

```kotlin
val person = Person("Alice", 30)
val point = Point(3, 5)
val counter = Counter(0)
```

## 属性和方法

```kotlin
class Rectangle(val width: Int, val height: Int) {
    fun area(): Int {
        return width * height
    }

    fun perimeter(): Int {
        return 2 * (width + height)
    }
}
```

### 类体属性

在类体内可声明额外的属性和方法：

```kotlin
class Example {
    val constant = 42
    var mutable = 0

    fun describe(): String {
        return "constant=$constant, mutable=$mutable"
    }
}
```

### `this` 关键字

`this` 指代当前实例：

```kotlin
class Person(val name: String) {
    fun introduce() {
        println("Hi, I'm " + this.name)
    }
}
```

`this` 在无歧义时可省略。

## `init` 块

初始化代码块，在实例构造期间、所有父类构造函数执行完毕后运行：

```kotlin
class Counter {
    init {
        println("Counter created!")
    }
}
```

一个类可以有多个 `init` 块，按声明顺序依次执行。

`init` 块可访问所有构造参数和属性。

## 继承

### `open` — 可继承类

默认情况下类不可被继承。使用 `open` 关键字声明可继承类：

```kotlin
open class Animal(val species: String) {
    fun describe() {
        println("I am a " + species)
    }
}
```

### 继承语法

子类在类头使用 `: ParentClass(args)` 继承父类：

```kotlin
class Dog(val name: String) : Animal("dog") {
    fun bark() {
        println(name + " barks!")
    }
}
```

冒号 `:` 后跟父类名及构造函数参数。父类构造函数参数在子类构造函数参数处理完成后求值。

### 方法重写

父类方法默认不可被重写。使用 `open` 声明可重写方法，子类使用 `override` 重写：

```kotlin
open class Animal(val species: String) {
    open fun sound() {
        println(species + " makes a sound")
    }
}

class Dog(val name: String) : Animal("dog") {
    override fun sound() {
        println(name + " barks!")
    }
}
```

`override` 会验证父类中确实存在同名方法，若不存在则报错。

### `open` 属性的继承关系

`open` 和 `override` 修饰符的位置：

```kotlin
open class Base {
    open fun method() { }
    open val prop = 1
}

class Derived : Base() {
    override fun method() { }
    override val prop = 2
}
```

### `super` 关键字

`super` 用于访问父类成员：

```kotlin
open class Animal {
    open fun sound() {
        println("Animal sound")
    }
}

class Dog : Animal() {
    override fun sound() {
        super.sound()        // 调用父类 sound()
        println("Dog barks!")
    }
}
```

`super` 仅在类内部可用。

## 泛型类

```kotlin
class Box<T>(val value: T) {
    fun get(): T = value

    fun <U> map(transform: (T) -> U): Box<U> {
        return Box(transform(value))
    }
}

val intBox = Box(42)
val strBox = Box("hello")
val mapped = intBox.map { it.toString() }   // Box<String>
```

类型参数在类名后用 `<T>` 声明。实例化时从构造参数自动推断具体类型。

## 继承异常类

可以继承内置异常类型来创建自定义异常：

```kotlin
open class AppException(val code: Int) : Exception("App error code " + code) {
    fun getCode(): Int {
        return code
    }
}

try {
    throw AppException(404)
} catch (e: AppException) {
    println("Error code: " + e.getCode())
}
```

详见[异常处理](exceptions.md)。

## 成员可见性

当前版本中，所有类成员均为公开（public）。`private` 等可见性修饰符尚未实现。
