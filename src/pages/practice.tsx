import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const practiceSections = [
  {
    title: 'Explain in your own words',
    tasks: [
      'Explain the difference between abstraction and encapsulation in 4-5 sentences.',
      'Compare HashMap and TreeMap using ordering, performance, and use cases.',
      'Describe constructor injection and why it is usually preferred in Spring.',
    ],
  },
  {
    title: 'Code tasks',
    tasks: [
      'Implement a method that returns the first non-repeated character in a string.',
      'Group a list of users by department using Stream API.',
      'Write an SQL query that returns all users and the number of their orders.',
    ],
  },
  {
    title: 'Review tasks',
    tasks: [
      'Find one checked and one unchecked exception in your own sample project.',
      'Take one entity class and explain each JPA annotation on it.',
      'Look at one controller and name where validation and error handling are applied.',
    ],
  },
];

export default function PracticePage(): React.JSX.Element {
  return (
    <Layout title="Practice" description="Practice tasks for Java Knowledge Hub">
      <main className="container margin-vert--xl">
        <div className="sectionHeading">
          <div className="eyebrow">Practice</div>
          <h1>Small tasks after theory</h1>
          <p>
            Use this page for lightweight practice. For quizzes inside a topic, open the relevant topic page.
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
            Open final quiz
          </Link>
        </div>
      </main>
    </Layout>
  );
}
