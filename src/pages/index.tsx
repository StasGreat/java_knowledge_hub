import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  {
    title: 'Theory first',
    description:
      'Each topic is organized as definitions, explanation, code example, small quiz, and practice task.',
  },
  {
    title: 'Built-in checks',
    description:
      'Topic quizzes save the best score in the browser. A score of 90% or more marks the topic as completed automatically.',
  },
  {
    title: 'Visible progress',
    description:
      'Use manual completion marks or quiz results to track what is done, in progress, or still untouched.',
  },
];

const studyBlocks = [
  {
    title: 'Learn',
    text: 'Read theory, definitions, and examples in Java Core, Spring, Backend, Database, and Architecture.',
    to: '/docs/intro',
    cta: 'Open learning path',
  },
  {
    title: 'Practice',
    text: 'Solve small coding and explanation tasks after each topic or use the dedicated practice page.',
    to: '/practice',
    cta: 'Open practice',
  },
  {
    title: 'Measure',
    text: 'Use topic quizzes and the final quiz to check retention and readiness across all sections.',
    to: '/docs/quizzes/final-quiz',
    cta: 'Open final quiz',
  },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Java Knowledge Hub" description="Learning hub for Java theory, quizzes, and practice">
      <header className="landingHero">
        <div className="container landingHeroGrid">
          <div>
            <div className="eyebrow">Learning hub</div>
            <h1>Java Knowledge Hub</h1>
            <p className="landingLead">
              A structured knowledge base for learning Java backend fundamentals with theory, topic quizzes,
              practice tasks, and progress tracking.
            </p>
            <div className="landingActions">
              <Link className="button button--primary button--lg" to="/docs/intro">
                Start learning
              </Link>
              <Link className="button button--secondary button--lg" to="/progress">
                View progress
              </Link>
            </div>
          </div>
          <div className="landingPanel">
            <div className="landingPanelCard">
              <div className="landingPanelItem">
                <strong>1. Read the topic</strong>
                <span>Theory, key ideas, code examples</span>
              </div>
              <div className="landingPanelItem">
                <strong>2. Pass the topic quiz</strong>
                <span>90%+ marks the topic as completed automatically</span>
              </div>
              <div className="landingPanelItem">
                <strong>3. Solve the practice tasks</strong>
                <span>Explain, compare, and implement</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container margin-vert--xl">
        <section className="featureGrid">
          {features.map((item) => (
            <article className="infoCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="sectionBlock">
          <div className="sectionHeading">
            <div className="eyebrow">Study flow</div>
            <h2>Learn, practice, then measure</h2>
          </div>
          <div className="studyGrid">
            {studyBlocks.map((block) => (
              <article className="studyCard" key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
                <Link className="button button--outline button--sm" to={block.to}>
                  {block.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
