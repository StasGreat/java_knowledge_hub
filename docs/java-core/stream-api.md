---
title: Stream API
sidebar_position: 6
---

# Stream API

## Definition

The Stream API provides a declarative way to process sequences of data.

## Example

```java
List<String> result = users.stream()
    .filter(User::isActive)
    .map(User::getName)
    .sorted()
    .toList();
```

## Common operations

- `filter`
- `map`
- `flatMap`
- `sorted`
- `collect`
- `reduce`

## Interview question

What is the difference between `map` and `flatMap`?
