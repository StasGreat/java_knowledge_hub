---
title: DI and IoC
sidebar_position: 2
---

# DI and IoC

## IoC

Inversion of Control means the framework controls object creation and lifecycle.

## DI

Dependency Injection is a way to provide required dependencies to an object.

## Spring example

```java
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
```

## Why constructor injection is preferred

- dependencies are explicit
- easier to test
- supports immutable fields
