---
title: JPA Basics
sidebar_position: 3
---


# JPA Basics

## Definition

JPA is a Java specification for working with relational data through objects.

## Example

```java
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String email;
}
```

## Practice

1. Explain `@Entity`, `@Id`, and `@GeneratedValue`.
2. Compare eager and lazy loading in simple words.
