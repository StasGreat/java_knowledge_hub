---
title: Java Knowledge Hub
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import QuizCard from '@site/src/components/QuizCard';

# Java Knowledge Hub

This project is a structured base for Java Backend interview preparation.

## How to use it

- keep one topic per page
- add definitions, explanations, code examples, and interview answers
- use `.mdx` when you need interactive components
- use the practice section for quick checks before interviews

## Recommended topic structure

1. Definition
2. Why it matters
3. Short explanation
4. Code example
5. Interview question
6. Common mistakes
7. Practice task
8. Quiz

## Example block

<Tabs>
  <TabItem value="definition" label="Definition" default>

A Java interface defines a contract that classes can implement.

  </TabItem>
  <TabItem value="example" label="Code Example">

```java
public interface PaymentService {
    void pay(BigDecimal amount);
}
```

  </TabItem>
</Tabs>

<QuizCard
  question="Which keyword is used to inherit from a class in Java?"
  options={["implements", "extends", "inherits", "super"]}
  correctIndex={1}
  explanation="A class inherits from another class with extends. implements is used for interfaces."
/>
