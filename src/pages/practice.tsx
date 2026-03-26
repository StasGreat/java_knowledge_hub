import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';

export default function PracticePage(): React.JSX.Element {
  const practiceSections = [
    {
      title: translate({
        id: 'practicePage.explain.title',
        message: 'Explain in your own words',
      }),
      tasks: [
        translate({
          id: 'practicePage.explain.task1',
          message: 'Explain the difference between abstraction and encapsulation in 4-5 sentences.',
        }),
        translate({
          id: 'practicePage.explain.task2',
          message: 'Compare HashMap and TreeMap using ordering, performance, and use cases.',
        }),
        translate({
          id: 'practicePage.explain.task3',
          message: 'Describe constructor injection and why it is usually preferred in Spring.',
        }),
      ],
    },
    {
      title: translate({
        id: 'practicePage.code.title',
        message: 'Code tasks',
      }),
      tasks: [
        translate({
          id: 'practicePage.code.task1',
          message: 'Implement a method that returns the first non-repeated character in a string.',
        }),
        translate({
          id: 'practicePage.code.task2',
          message: 'Group a list of users by department using Stream API.',
        }),
        translate({
          id: 'practicePage.code.task3',
          message: 'Write an SQL query that returns all users and the number of their orders.',
        }),
      ],
    },
    {
      title: translate({
        id: 'practicePage.review.title',
        message: 'Review tasks',
      }),
      tasks: [
        translate({
          id: 'practicePage.review.task1',
          message: 'Find one checked and one unchecked exception in your own sample project.',
        }),
        translate({
          id: 'practicePage.review.task2',
          message: 'Take one entity class and explain each JPA annotation on it.',
        }),
        translate({
          id: 'practicePage.review.task3',
          message: 'Look at one controller and name where validation and error handling are applied.',
        }),
      ],
    },
  ];

  return (
    <Layout
      title={translate({
        id: 'practicePage.meta.title',
        message: 'Practice',
      })}
      description={translate({
        id: 'practicePage.meta.description',
        message: 'Practice tasks for Java Knowledge Hub',
      })}
    >
      <main className="container margin-vert--xl">
        <div className="sectionHeading">
          <div className="eyebrow">
            <Translate id="practicePage.eyebrow">Practice</Translate>
          </div>
          <h1>
            <Translate id="practicePage.title">Small tasks after theory</Translate>
          </h1>
          <p>
            <Translate id="practicePage.description">
              Use this page for lightweight practice. For quizzes inside a topic, open the relevant topic page.
            </Translate>
          </p>
        </div>

        <div className="practiceGrid">
          {practiceSections.map((section) => (
            <section key={section.title} className="studyCard">
              <h2>{section.title}</h2>
              <ul>
                {section.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="sectionBlock">
          <Link className="button button--primary" to="/docs/quizzes/final-quiz">
            <Translate id="practicePage.finalQuiz">Open final quiz</Translate>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
