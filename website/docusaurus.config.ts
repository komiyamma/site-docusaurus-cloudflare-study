import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as fs from 'fs';
import * as path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cloudflareの学習教材',
  tagline: 'Cloudflare学習教材（24章アウトライン）',
  favicon: 'img/cloudflare_icon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cloudflare-study.komiyamma.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'komiyamma', // Usually your GitHub org/user name.
  projectName: 'site-docusaurus-cloudflare_study', // Usually your repo name.

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },

  markdown: {
    format: 'detect',  // .md は CommonMark、.mdx は MDX として処理
    mermaid: true,
    /*
    hooks: {
      onBrokenMarkdownImages: 'ignore',
    },
    */
    // 外部の .memo ファイルからページの description を読み込む
    parseFrontMatter: async (params) => {
      // デフォルトのパーサーを使用
      const result = await params.defaultParseFrontMatter(params);

      // すでに description があれば何もしない
      if (result.frontMatter.description) {
        return result;
      }

      // 対応する .memo ファイルのパスを計算
      // 以前: const memoPath = params.filePath.replace(/\.mdx?$/, '.memo');
      // 変更: .md ファイルがあるディレクトリの memo サブフォルダ内を探す
      const fileDir = path.dirname(params.filePath);
      const fileName = path.basename(params.filePath).replace(/\.mdx?$/, '.memo');
      const memoPath = path.join(fileDir, 'memo', fileName);

      // .memo ファイルが存在すれば description として読み込む
      if (fs.existsSync(memoPath)) {
        const memoContent = fs.readFileSync(memoPath, 'utf-8').trim().replace(/[\r\n]+/g, ' ');
        if (memoContent) {
          result.frontMatter.description = memoContent;
        }
      }

      return result;
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["ja"],
        indexBlog: false,
        indexPages: false,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.

        },
        blog: false, // Blog機能は無効化 (フォルダ削除済み)
        /*
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Cloudflare学習',
      logo: {
        alt: 'Cloudflare',
        src: 'img/cloudflare_icon.svg',
        srcDark: 'img/cloudflare_icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareIsWhatTsSidebar',
          position: 'left',
          label: 'Cloudflareとは',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareWebCloudTsSidebar',
          position: 'left',
          label: 'Web/Cloud',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareDashboardTsSidebar',
          position: 'left',
          label: '管理画面',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareDevenvTsSidebar',
          position: 'left',
          label: '開発環境',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareWorkerFirstTsSidebar',
          position: 'left',
          label: 'Worker入門',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareLocalDebugTsSidebar',
          position: 'left',
          label: 'ローカル/デバッグ',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareStaticPageTsSidebar',
          position: 'left',
          label: '静的公開',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareTypescriptTsSidebar',
          position: 'left',
          label: 'TypeScript',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareWorkerApiTsSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareReactBaseTsSidebar',
          position: 'left',
          label: 'React連携',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareOwnDomainTsSidebar',
          position: 'left',
          label: '独自ドメイン',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareCdnCacheTsSidebar',
          position: 'left',
          label: 'CDN/キャッシュ',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareSecretsGuardTsSidebar',
          position: 'left',
          label: '守る基本',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareStorageMapTsSidebar',
          position: 'left',
          label: '保存先',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareKvTsSidebar',
          position: 'left',
          label: 'KV',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareD1TsSidebar',
          position: 'left',
          label: 'D1',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareR2TsSidebar',
          position: 'left',
          label: 'R2/Images',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareDurableObjectTsSidebar',
          position: 'left',
          label: 'Durable Objects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareQueuesTsSidebar',
          position: 'left',
          label: 'Queues',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareCronTsSidebar',
          position: 'left',
          label: 'Cron/Workflows',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareLogsTsSidebar',
          position: 'left',
          label: '運用/Logs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareWorkerAiTsSidebar',
          position: 'left',
          label: 'Workers AI',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareAiFunctionsTsSidebar',
          position: 'left',
          label: 'AI応用',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudflareOverallFinishTsSidebar',
          position: 'left',
          label: '総仕上げ',
        },
        {
          href: 'https://komiyamma.net',
          label: 'komiyamma.net',
          position: 'right',
          className: 'navbar-link-site-home',
          target: '_self',
        },
        {
          href: 'https://github.com/komiyamma/site-docusaurus-cloudflare_study',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} komiyamma, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
