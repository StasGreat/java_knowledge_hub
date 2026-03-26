export type TopicItem = {
  id: string;
  title: string;
  section: string;
  sectionTranslationId: string;
  path: string;
};

export const topics: TopicItem[] = [
  {
    id: 'java-core-oop',
    title: 'OOP Basics',
    section: 'Java Core',
    sectionTranslationId: 'topics.section.javaCore',
    path: '/docs/java-core/oop',
  },
  {
    id: 'java-core-collections',
    title: 'Collections',
    section: 'Java Core',
    sectionTranslationId: 'topics.section.javaCore',
    path: '/docs/java-core/collections',
  },
  {
    id: 'java-core-exceptions',
    title: 'Exceptions',
    section: 'Java Core',
    sectionTranslationId: 'topics.section.javaCore',
    path: '/docs/java-core/exceptions',
  },
  {
    id: 'java-core-generics',
    title: 'Generics',
    section: 'Java Core',
    sectionTranslationId: 'topics.section.javaCore',
    path: '/docs/java-core/generics',
  },
  {
    id: 'java-core-stream-api',
    title: 'Stream API',
    section: 'Java Core',
    sectionTranslationId: 'topics.section.javaCore',
    path: '/docs/java-core/stream-api',
  },
  {
    id: 'backend-http-rest',
    title: 'HTTP and REST',
    section: 'Backend',
    sectionTranslationId: 'topics.section.backend',
    path: '/docs/backend/http-rest',
  },
  {
    id: 'spring-di-ioc',
    title: 'DI and IoC',
    section: 'Spring',
    sectionTranslationId: 'topics.section.spring',
    path: '/docs/spring/di-ioc',
  },
  {
    id: 'spring-jpa-basics',
    title: 'JPA Basics',
    section: 'Spring',
    sectionTranslationId: 'topics.section.spring',
    path: '/docs/spring/jpa-basics',
  },
  {
    id: 'database-sql-joins',
    title: 'SQL Joins',
    section: 'Database',
    sectionTranslationId: 'topics.section.database',
    path: '/docs/database/sql-joins',
  },
  {
    id: 'architecture-solid',
    title: 'SOLID',
    section: 'Architecture',
    sectionTranslationId: 'topics.section.architecture',
    path: '/docs/architecture/solid',
  },
];
