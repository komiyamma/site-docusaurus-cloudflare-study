import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

type HomepageFeaturesProps = {
  CategorySvg: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    title: '第1章 Cloudflareとは',
    description: (
      <>
        Cloudflareの基本理念、グローバルネットワークの仕組み、そして提供される主要なサービス群の概要について学びます。
      </>
    ),
    link: '/docs/cloudflare_is_what_ts/cloudflare_is_what_ts_index',
  },
  {
    title: '第2章 Web/Cloud基礎',
    description: (
      <>
        Webの仕組み（HTTP/DNS）やクラウドコンピューティングの基本、サーバーレスの概念を整理します。
      </>
    ),
    link: '/docs/cloudflare_web_cloud_ts/cloudflare_web_cloud_ts_index',
  },
  {
    title: '第3章 管理画面',
    description: (
      <>
        アカウント、Zone、Workers、R2、AI、Zero Trustなど、Cloudflareダッシュボードの全体像をつかみます。
      </>
    ),
    link: '/docs/cloudflare_dashboard_ts/cloudflare_dashboard_ts_index',
  },
  {
    title: '第4章 開発環境',
    description: (
      <>
        Wranglerのインストールから、ローカル開発環境の構築、基本的な開発フローの習得を目指します。
      </>
    ),
    link: '/docs/cloudflare_devenv_ts/cloudflare_devenv_ts_index',
  },
  {
    title: '第5章 Worker入門',
    description: (
      <>
        最初のWorkersを作成し、デプロイ、ルーティング、基本的なリクエスト処理の実装方法を学びます。
      </>
    ),
    link: '/docs/cloudflare_worker_first_ts/cloudflare_worker_first_ts_index',
  },
  {
    title: '第6章 ローカル/デバッグ',
    description: (
      <>
        wrangler dev、ログ、エラー確認、bindingsやenvの感覚など、本番前に確認する基本を学びます。
      </>
    ),
    link: '/docs/cloudflare_local_debug_ts/cloudflare_local_debug_ts_index',
  },
  {
    title: '第7章 静的サイト公開',
    description: (
      <>
        HTML/CSS/JavaScriptの小さなサイトをCloudflareで公開し、静的ファイル配信の流れを体験します。
      </>
    ),
    link: '/docs/cloudflare_static_page_ts/cloudflare_static_page_ts_index',
  },
  {
    title: '第8章 TypeScript',
    description: (
      <>
        Cloudflare開発で使う型、関数、引数、返り値、オブジェクト、JSONまわりを実例で学びます。
      </>
    ),
    link: '/docs/cloudflare_typescript_ts/cloudflare_typescript_ts_index',
  },
  {
    title: '第9章 Worker API',
    description: (
      <>
        Fetch API、Cache API、HTMLRewriterなど、Workersで利用可能な強力なAPIの活用法を学びます。
      </>
    ),
    link: '/docs/cloudflare_worker_api_ts/cloudflare_worker_api_ts_index',
  },
  {
    title: '第10章 React連携',
    description: (
      <>
        Cloudflare Pagesを用いたReactアプリの公開や、Workersとのシームレスな統合について学びます。
      </>
    ),
    link: '/docs/cloudflare_react_base_ts/cloudflare_react_base_ts_index',
  },
  {
    title: '第11章 独自ドメイン',
    description: (
      <>
        Custom Domains、Routes、SSL/TLSの基本を整理し、作ったアプリを本番らしく公開する方法を学びます。
      </>
    ),
    link: '/docs/cloudflare_own_domain_ts/cloudflare_own_domain_ts_index',
  },
  {
    title: '第12章 CDN/キャッシュ',
    description: (
      <>
        エッジでのキャッシュ制御、Page Rules、ドメイン設定など、パフォーマンス最適化の技術を学びます。
      </>
    ),
    link: '/docs/cloudflare_cdn_cache_ts/cloudflare_cdn_cache_ts_index',
  },
  {
    title: '第13章 守る基本',
    description: (
      <>
        secrets、environment variables、Turnstile、Rate Limitingを通して、安全に公開する初歩を学びます。
      </>
    ),
    link: '/docs/cloudflare_secrets_guard_ts/cloudflare_secrets_guard_ts_index',
  },
  {
    title: '第14章 保存先の地図',
    description: (
      <>
        KV、D1、R2など、用途に合わせた最適なデータ保存先の選択と、その操作方法を習得します。
      </>
    ),
    link: '/docs/cloudflare_storage_map_ts/cloudflare_storage_map_ts_index',
  },
  {
    title: '第15章 KV',
    description: (
      <>
        Workers KVを使って、設定値、簡単なメモ、キャッシュのような軽いデータ保存を体験します。
      </>
    ),
    link: '/docs/cloudflare_kv_ts/cloudflare_kv_ts_index',
  },
  {
    title: '第16章 D1',
    description: (
      <>
        D1でテーブル作成、追加、一覧、更新、削除を学び、SQLデータベースの基本に触れます。
      </>
    ),
    link: '/docs/cloudflare_d1_ts/cloudflare_d1_ts_index',
  },
  {
    title: '第17章 R2/Images',
    description: (
      <>
        R2でファイル保存を学び、Cloudflare Imagesで画像の最適化や変換の考え方に触れます。
      </>
    ),
    link: '/docs/cloudflare_r2_ts/cloudflare_r2_ts_index',
  },
  {
    title: '第18章 Durable Objects',
    description: (
      <>
        チャットや共同編集のような、状態を持つアプリの考え方とDurable Objectsの基本を学びます。
      </>
    ),
    link: '/docs/cloudflare_durable_object_ts/cloudflare_durable_object_ts_index',
  },
  {
    title: '第19章 Queues',
    description: (
      <>
        メール送信、画像処理、通知、集計など、あとで実行する処理を分ける設計を学びます。
      </>
    ),
    link: '/docs/cloudflare_queues_ts/cloudflare_queues_ts_index',
  },
  {
    title: '第20章 Cron/Workflows',
    description: (
      <>
        Cron TriggersとWorkflowsで、定期実行やリトライ込みの長い処理を扱う入口を学びます。
      </>
    ),
    link: '/docs/cloudflare_cron_ts/cloudflare_cron_ts_index',
  },
  {
    title: '第21章 運用/Logs',
    description: (
      <>
        Workers Logs、Observability、エラー確認を通して、動いているアプリを見る力を身につけます。
      </>
    ),
    link: '/docs/cloudflare_logs_ts/cloudflare_logs_ts_index',
  },
  {
    title: '第22章 Workers AI',
    description: (
      <>
        エッジで推論を実行するWorkers AIの基本、モデルの選択、AI機能の組み込み方法を学びます。
      </>
    ),
    link: '/docs/cloudflare_worker_ai_ts/cloudflare_worker_ai_ts_index',
  },
  {
    title: '第23章 AI応用',
    description: (
      <>
        AI Gateway、Vectorize、AI Search、Browser Renderingを組み合わせ、AI機能を実用へ進めます。
      </>
    ),
    link: '/docs/cloudflare_ai_functions_ts/cloudflare_ai_functions_ts_index',
  },
  {
    title: '第24章 総仕上げ',
    description: (
      <>
        React、Workers API、保存機能、AI機能を組み合わせた小さな作品制作と発展ロードマップです。
      </>
    ),
    link: '/docs/cloudflare_overall_finish_ts/cloudflare_overall_finish_ts_index',
  },
];

function Feature({
  title,
  description,
  link,
  CategorySvg,
}: FeatureItem & HomepageFeaturesProps) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <CategorySvg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({
  CategorySvg,
}: HomepageFeaturesProps): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} CategorySvg={CategorySvg} />
          ))}
        </div>
      </div>
    </section>
  );
}
