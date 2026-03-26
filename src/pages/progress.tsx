import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import ProgressDashboard from '@site/src/components/ProgressDashboard';

export default function ProgressPage(): React.JSX.Element {
  return (
    <Layout
      title={translate({
        id: 'progressPage.meta.title',
        message: 'Progress',
      })}
      description={translate({
        id: 'progressPage.meta.description',
        message: 'Track topic completion and quiz results',
      })}
    >
      <main className="container margin-vert--xl">
        <div className="sectionHeading">
          <div className="eyebrow">
            <Translate id="progressPage.eyebrow">Progress</Translate>
          </div>
          <h1>
            <Translate id="progressPage.title">Track your learning</Translate>
          </h1>
          <p>
            <Translate id="progressPage.description">
              Topics become completed when you mark them manually or pass the topic quiz with 90% or more.
            </Translate>
          </p>
        </div>
        <ProgressDashboard />
      </main>
    </Layout>
  );
}
