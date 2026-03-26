import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const finalQuizPath = '/docs/quizzes/final-quiz';
const githubRepoUrl = 'https://github.com/StasGreat/java_knowledge_hub';

const config: Config = {
  title: 'Java Knowledge Hub',
  tagline: 'Theory, quizzes, practice, and progress tracking for Java learning',
  favicon: 'img/favicon.ico',

  url: 'https://StasGreat.github.io',
  baseUrl: '/java_knowledge_hub/',

  organizationName: 'StasGreat',
  projectName: 'java_knowledge_hub',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uk'],
    localeConfigs: {
      en: {htmlLang: 'en'},
      ru: {htmlLang: 'ru'},
      uk: {htmlLang: 'uk'},
    },
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Java Knowledge Hub',
      logo: {
        alt: 'Java Knowledge Hub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          to: '/practice',
          label: 'Practice',
          position: 'left',
        },
        {
          to: '/progress',
          label: 'Progress',
          position: 'left',
        },
        {
          to: finalQuizPath,
          label: 'Final Quiz',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: githubRepoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright:
        `Copyright (c) ${new Date().getFullYear()} Java Knowledge Hub` +
        ` <a href="${githubRepoUrl}" target="_blank" rel="noopener noreferrer">GitHub` +
        `<svg width="13.5" height="13.5" aria-label="(opens in new tab)" class="iconExternalLink_nPIU">` +
        `<use href="#theme-svg-external-link"></use></svg></a>`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
