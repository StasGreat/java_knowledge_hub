---
title: Java Quiz
sidebar_position: 2
---

import QuizCard from '@site/src/components/QuizCard';

# Java Quiz

<QuizCard
  question="Which collection does not allow duplicate elements?"
  options={["List", "Set", "Map", "ArrayList"]}
  correctIndex={1}
  explanation="Set is designed to store unique elements."
  storageKey="quiz-set-unique"
/>

<QuizCard
  question="Which keyword is used to override a parent method?"
  options={["extends", "implements", "@Override", "super"]}
  correctIndex={2}
  explanation="@Override is the annotation used when a subclass overrides a parent method."
  storageKey="quiz-override"
/>
