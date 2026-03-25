---
title: SQL Joins
sidebar_position: 2
---

# SQL Joins

## Why joins matter

Joins combine rows from multiple tables based on a related column.

## Main join types

- `INNER JOIN`
- `LEFT JOIN`
- `RIGHT JOIN`
- `FULL JOIN`

## Example

```sql
SELECT u.id, u.name, o.id AS order_id
FROM users u
LEFT JOIN orders o ON o.user_id = u.id;
```

## Interview question

What is the difference between `INNER JOIN` and `LEFT JOIN`?
