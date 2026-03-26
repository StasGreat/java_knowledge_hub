import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';

export default function Home(): React.JSX.Element {
  const features = [
    {
      title: translate({
        id: 'homepage.features.theory.title',
        message: 'Theory first',
      }),
      description: translate({
        id: 'homepage.features.theory.description',
        message:
          'Each topic is organized as definitions, explanation, code example, small quiz, and practice task.',
      }),
    },
    {
      title: translate({
        id: 'homepage.features.checks.title',
        message: 'Built-in checks',
      }),
      description: translate({
        id: 'homepage.features.checks.description',
        message:
          'Topic quizzes save the best score in the browser. A score of 90% or more marks the topic as completed automatically.',
      }),
    },
    {
      title: translate({
        id: 'homepage.features.progress.title',
        message: 'Visible progress',
      }),
      description: translate({
        id: 'homepage.features.progress.description',
        message:
          'Use manual completion marks or quiz results to track what is done, in progress, or still untouched.',
      }),
    },
  ];

  const studyBlocks = [
    {
      title: translate({
        id: 'homepage.study.learn.title',
        message: 'Learn',
      }),
      text: translate({
        id: 'homepage.study.learn.text',
        message: 'Read theory, definitions, and examples in Java Core, Spring, Backend, Database, and Architecture.',
      }),
      to: '/docs/intro',
      cta: translate({
        id: 'homepage.study.learn.cta',
        message: 'Open learning path',
      }),
    },
    {
      title: translate({
        id: 'homepage.study.practice.title',
        message: 'Practice',
      }),
      text: translate({
        id: 'homepage.study.practice.text',
        message: 'Solve small coding and explanation tasks after each topic or use the dedicated practice page.',
      }),
      to: '/practice',
      cta: translate({
        id: 'homepage.study.practice.cta',
        message: 'Open practice',
      }),
    },
    {
      title: translate({
        id: 'homepage.study.measure.title',
        message: 'Measure',
      }),
      text: translate({
        id: 'homepage.study.measure.text',
        message: 'Use topic quizzes and the final quiz to check retention and readiness across all sections.',
      }),
      to: '/docs/quizzes/final-quiz',
      cta: translate({
        id: 'homepage.study.measure.cta',
        message: 'Open final quiz',
      }),
    },
  ];

  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Java Knowledge Hub',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Learning hub for Java theory, quizzes, practice, and progress tracking',
      })}
    >
      <header className="landingHero">
        <div className="container landingHeroGrid">
          <div>
            <div className="eyebrow">
              <Translate id="homepage.eyebrow">Learning hub</Translate>
            </div>
            <h1>
              <Translate id="homepage.hero.title">Java Knowledge Hub</Translate>
            </h1>
            <p className="landingLead">
              <Translate id="homepage.hero.lead">
                A structured knowledge base for learning Java backend fundamentals with theory, topic quizzes,
                practice tasks, and progress tracking.
              </Translate>
            </p>
            <div className="landingActions">
              <Link className="button button--primary button--lg" to="/docs/intro">
                <Translate id="homepage.hero.start">Start learning</Translate>
              </Link>
              <Link className="button button--outline button--lg" to="/progress">
                <Translate id="homepage.hero.progress">View progress</Translate>
              </Link>
            </div>
          </div>
          <div className="landingPanel">
            <div className="landingPanelCard">
              <div className="landingPanelItem">
                <strong>
                  <Translate id="homepage.panel.step1.title">1. Read the topic</Translate>
                </strong>
                <span>
                  <Translate id="homepage.panel.step1.text">Theory, key ideas, code examples</Translate>
                </span>
              </div>
              <div className="landingPanelItem">
                <strong>
                  <Translate id="homepage.panel.step2.title">2. Pass the topic quiz</Translate>
                </strong>
                <span>
                  <Translate id="homepage.panel.step2.text">
                    90%+ marks the topic as completed automatically
                  </Translate>
                </span>
              </div>
              <div className="landingPanelItem">
                <strong>
                  <Translate id="homepage.panel.step3.title">3. Solve the practice tasks</Translate>
                </strong>
                <span>
                  <Translate id="homepage.panel.step3.text">Explain, compare, and implement</Translate>
                </span>
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
            <div className="eyebrow">
              <Translate id="homepage.study.eyebrow">Study flow</Translate>
            </div>
            <h2>
              <Translate id="homepage.study.title">Learn, practice, then measure</Translate>
            </h2>
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
