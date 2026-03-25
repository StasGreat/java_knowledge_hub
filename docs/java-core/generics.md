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

## Practice

1. Explain why `List<String>` is safer than raw `List`.
2. Explain type erasure in one short paragraph.
