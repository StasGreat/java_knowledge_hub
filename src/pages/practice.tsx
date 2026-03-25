import React from 'react';
import Layout from '@theme/Layout';
import QuizCard from '@site/src/components/QuizCard';

export default function PracticePage(): React.JSX.Element {
  return (
    <Layout title="Practice" description="Practice questions and mini tests">
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1>Practice</h1>
        <p>Use this page for quick self-checks before interviews.</p>

        <QuizCard
          question="What does SOLID stand for?"
          options={[
            'Five database rules',
            'Five object-oriented design principles',
            'A Java framework module',
            'A testing strategy',
          ]}
          correctIndex={1}
          explanation="SOLID is a set of five design principles for maintainable object-oriented code."
          storageKey="practice-solid"
        />

        <QuizCard
          question="Which HTTP method is typically used to update an existing resource completely?"
          options={['GET', 'POST', 'PUT', 'TRACE']}
          correctIndex={2}
          explanation="PUT is commonly used for full replacement or update of an existing resource."
          storageKey="practice-http-put"
        />
      </main>
    </Layout>
  );
}
