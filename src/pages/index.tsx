import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Java Knowledge Hub" description="Interactive Java backend interview preparation">
      <header className="hero hero--primary jkhHero">
        <div className="container">
          <h1 className="hero__title">Java Knowledge Hub</h1>
          <p className="hero__subtitle">
            Structured and interactive preparation for Java Backend interviews.
          </p>
          <div className="jkhHeroActions">
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Open topics
            </Link>
            <Link className="button button--outline button--lg" to="/practice">
              Practice
            </Link>
          </div>
        </div>
      </header>
      <main className="container margin-vert--xl">
        <section className="row">
          <div className="col col--4">
            <div className="jkhCard">
              <h3>Structured knowledge</h3>
              <p>Keep definitions, examples, and interview answers in one place.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="jkhCard">
              <h3>Interactive practice</h3>
              <p>Use quick quizzes and small tasks to check yourself before interviews.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="jkhCard">
              <h3>Easy publishing</h3>
              <p>Run locally with npm and publish automatically to GitHub Pages.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
