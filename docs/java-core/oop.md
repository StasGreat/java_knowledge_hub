---
title: OOP Basics
sidebar_position: 2
---

# OOP Basics

## Definition

OOP is a programming paradigm based on objects that combine state and behavior.

## Four pillars

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

## Example

```java
class Animal {
    void speak() {
        System.out.println("sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("bark");
    }
}
```

## Interview question

What is the difference between abstraction and encapsulation?

<details>
<summary>Answer</summary>

Abstraction hides unnecessary complexity and shows only essential behavior.
Encapsulation hides internal state and controls access to it.

</details>

## Common mistake

Candidates often list the four pillars but cannot explain them with a practical example.
