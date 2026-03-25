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

## Common interview topics

- entity lifecycle
- lazy vs eager loading
- `@OneToMany` and `@ManyToOne`
- transaction boundaries
