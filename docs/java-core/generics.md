---
title: Generics
sidebar_position: 5
---

# Generics

## Definition

Generics let you parameterize types so the compiler can provide stronger type safety.

## Example

```java
List<String> names = new ArrayList<>();
names.add("Alex");
```

## Why it matters

Without generics, collections would return `Object` and require explicit casting.
Generics reduce runtime errors and improve readability.

## Interview question

Why cannot you create `new T()` directly inside a generic class?

Because the real type parameter is erased at runtime.
