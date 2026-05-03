import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const CategorySvg = require('@site/static/img/category.svg').default;

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cloudflareとは',
    Svg: CategorySvg,
    description: (
      <>
        Cloudflareの基本理念、グローバルネットワークの仕組み、そして提供される主要なサービス群の概要について学びます。
      </>
    ),
    link: '/docs/cloudflare_is_what_ts/cloudflare_is_what_ts_index',
  },
  {
    title: 'Web/Cloud基礎',
    Svg: CategorySvg,
    description: (
      <>
        Webの仕組み（HTTP/DNS）やクラウドコンピューティングの基本、サーバーレスの概念を整理します。
      </>
    ),
    link: '/docs/cloudflare_web_cloud_ts/cloudflare_web_cloud_ts_index',
  },
  {
    title: '開発環境',
    Svg: CategorySvg,
    description: (
      <>
        Wranglerのインストールから、ローカル開発環境の構築、基本的な開発フローの習得を目指します。
      </>
    ),
    link: '/docs/cloudflare_devenv_ts/cloudflare_devenv_ts_index',
  },
  {
    title: 'Worker入門',
    Svg: CategorySvg,
    description: (
      <>
        最初のWorkersを作成し、デプロイ、ルーティング、基本的なリクエスト処理の実装方法を学びます。
      </>
    ),
    link: '/docs/cloudflare_worker_first_ts/cloudflare_worker_first_ts_index',
  },
  {
    title: 'Worker API',
    Svg: CategorySvg,
    description: (
      <>
        Fetch API、Cache API、HTMLRewriterなど、Workersで利用可能な強力なAPIの活用法を学びます。
      </>
    ),
    link: '/docs/cloudflare_worker_api_ts/cloudflare_worker_api_ts_index',
  },
  {
    title: 'React連携',
    Svg: CategorySvg,
    description: (
      <>
        Cloudflare Pagesを用いたReactアプリの公開や、Workersとのシームレスな統合について学びます。
      </>
    ),
    link: '/docs/cloudflare_react_base_ts/cloudflare_react_base_ts_index',
  },
  {
    title: 'CDN/キャッシュ',
    Svg: CategorySvg,
    description: (
      <>
        エッジでのキャッシュ制御、Page Rules、ドメイン設定など、パフォーマンス最適化の技術を学びます。
      </>
    ),
    link: '/docs/cloudflare_cdn_cache_ts/cloudflare_cdn_cache_ts_index',
  },
  {
    title: 'ストレージ/DB',
    Svg: CategorySvg,
    description: (
      <>
        KV、D1、R2など、用途に合わせた最適なデータ保存先の選択と、その操作方法を習得します。
      </>
    ),
    link: '/docs/cloudflare_storage_map_ts/cloudflare_storage_map_ts_index',
  },
  {
    title: 'Workers AI',
    Svg: CategorySvg,
    description: (
      <>
        エッジで推論を実行するWorkers AIの基本、モデルの選択、AI機能の組み込み方法を学びます。
      </>
    ),
    link: '/docs/cloudflare_worker_ai_ts/cloudflare_worker_ai_ts_index',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
