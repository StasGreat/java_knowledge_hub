import React from 'react';
import Layout from '@theme/Layout';
import ProgressDashboard from '@site/src/components/ProgressDashboard';

export default function ProgressPage(): React.JSX.Element {
  return (
    <Layout title="Progress" description="Track topic completion and quiz results">
      <main className="container margin-vert--xl">
        <div className="sectionHeading">
          <div className="eyebrow">Progress</div>
          <h1>Track your learning</h1>
          <p>Topics become completed when you mark them manually or pass the topic quiz with 90% or more.</p>
        </div>
        <ProgressDashboard />
      </main>
    </Layout>
  );
}
