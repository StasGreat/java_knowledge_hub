import type { Config } from '@docusaurus/types';
import type { Preset } from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Java Knowledge Hub',
  tagline: 'Learning hub for Java theory, quizzes, and practice',
  favicon: 'img/favicon.ico',

  url: 'https://StasGreat.github.io',
  baseUrl: '/java_knowledge_hub/',

  organizationName: 'StasGreat',
  projectName: 'java_knowledge_hub',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/StasGreat/java_knowledge_hub/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'Java Knowledge Hub',
      logo: {
        alt: 'Java Knowledge Hub Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Learn', position: 'left' },
        { to: '/practice', label: 'Practice', position: 'left' },
        { to: '/progress', label: 'Progress', position: 'left' },
        { to: '/docs/quizzes/final-quiz', label: 'Final Quiz', position: 'left' },
        {
          href: 'https://github.com/StasGreat/java_knowledge_hub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Study',
          items: [
            { label: 'Learn', to: '/docs/intro' },
            { label: 'Practice', to: '/practice' },
            { label: 'Progress', to: '/progress' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Java Knowledge Hub`,
    },
    prism: {
      additionalLanguages: ['java', 'sql', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
