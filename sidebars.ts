import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Java Core',
      items: [
        'java-core/overview',
        'java-core/oop',
        'java-core/collections',
        'java-core/exceptions',
        'java-core/generics',
        'java-core/stream-api',
      ],
    },
    {
      type: 'category',
      label: 'Backend',
      items: ['backend/overview', 'backend/http-rest'],
    },
    {
      type: 'category',
      label: 'Spring',
      items: ['spring/overview', 'spring/di-ioc', 'spring/jpa-basics'],
    },
    {
      type: 'category',
      label: 'Database',
      items: ['database/overview', 'database/sql-joins'],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: ['architecture/overview', 'architecture/solid'],
    },
    {
      type: 'category',
      label: 'Quizzes',
      items: ['quizzes/topic-quizzes', 'quizzes/final-quiz'],
    },
    {
      type: 'category',
      label: 'Practice',
      items: ['practice/coding-tasks', 'practice/java-quiz'],
    },
    {
      type: 'category',
      label: 'Progress',
      items: ['progress/learning-path'],
    },
  ],
};

export default sidebars;
