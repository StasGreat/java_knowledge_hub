---
title: Exceptions
sidebar_position: 4
---

# Exceptions

## Definition

An exception is an object that represents an error or unexpected condition during program execution.

## Main categories

- checked exceptions
- unchecked exceptions (`RuntimeException` and its children)
- errors

## Example

```java
try {
    Integer value = Integer.parseInt(input);
} catch (NumberFormatException ex) {
    System.out.println("Invalid number");
}
```

## Interview question

What is the difference between checked and unchecked exceptions?

<details>
<summary>Answer</summary>

Checked exceptions must be handled or declared.
Unchecked exceptions usually represent programming errors and do not require explicit handling by the compiler.

</details>
