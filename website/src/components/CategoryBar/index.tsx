import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

type CategoryItem = {
  label: string;
  sidebarId: string;
  path: string;
};

export const categories: CategoryItem[] = [
  {label: 'Cloudflareとは', sidebarId: 'cloudflareIsWhatTsSidebar', path: '/docs/cloudflare_is_what_ts/cloudflare_is_what_ts_index'},
  {label: 'Web/Cloud', sidebarId: 'cloudflareWebCloudTsSidebar', path: '/docs/cloudflare_web_cloud_ts/cloudflare_web_cloud_ts_index'},
  {label: '管理画面', sidebarId: 'cloudflareDashboardTsSidebar', path: '/docs/cloudflare_dashboard_ts/cloudflare_dashboard_ts_index'},
  {label: '開発環境', sidebarId: 'cloudflareDevenvTsSidebar', path: '/docs/cloudflare_devenv_ts/cloudflare_devenv_ts_index'},
  {label: 'Worker入門', sidebarId: 'cloudflareWorkerFirstTsSidebar', path: '/docs/cloudflare_worker_first_ts/cloudflare_worker_first_ts_index'},
  {label: 'ローカル/デバッグ', sidebarId: 'cloudflareLocalDebugTsSidebar', path: '/docs/cloudflare_local_debug_ts/cloudflare_local_debug_ts_index'},
  {label: '静的公開', sidebarId: 'cloudflareStaticPageTsSidebar', path: '/docs/cloudflare_static_page_ts/cloudflare_static_page_ts_index'},
  {label: 'TypeScript', sidebarId: 'cloudflareTypescriptTsSidebar', path: '/docs/cloudflare_typescript_ts/cloudflare_typescript_ts_index'},
  {label: 'API', sidebarId: 'cloudflareWorkerApiTsSidebar', path: '/docs/cloudflare_worker_api_ts/cloudflare_worker_api_ts_index'},
  {label: 'React連携', sidebarId: 'cloudflareReactBaseTsSidebar', path: '/docs/cloudflare_react_base_ts/cloudflare_react_base_ts_index'},
  {label: '独自ドメイン', sidebarId: 'cloudflareOwnDomainTsSidebar', path: '/docs/cloudflare_own_domain_ts/cloudflare_own_domain_ts_index'},
  {label: 'CDN/キャッシュ', sidebarId: 'cloudflareCdnCacheTsSidebar', path: '/docs/cloudflare_cdn_cache_ts/cloudflare_cdn_cache_ts_index'},
  {label: '守る基本', sidebarId: 'cloudflareSecretsGuardTsSidebar', path: '/docs/cloudflare_secrets_guard_ts/cloudflare_secrets_guard_ts_index'},
  {label: '保存先', sidebarId: 'cloudflareStorageMapTsSidebar', path: '/docs/cloudflare_storage_map_ts/cloudflare_storage_map_ts_index'},
  {label: 'KV', sidebarId: 'cloudflareKvTsSidebar', path: '/docs/cloudflare_kv_ts/cloudflare_kv_ts_index'},
  {label: 'D1', sidebarId: 'cloudflareD1TsSidebar', path: '/docs/cloudflare_d1_ts/cloudflare_d1_ts_index'},
  {label: 'R2/Images', sidebarId: 'cloudflareR2TsSidebar', path: '/docs/cloudflare_r2_ts/cloudflare_r2_ts_index'},
  {label: 'Durable Objects', sidebarId: 'cloudflareDurableObjectTsSidebar', path: '/docs/cloudflare_durable_object_ts/cloudflare_durable_object_ts_index'},
  {label: 'Queues', sidebarId: 'cloudflareQueuesTsSidebar', path: '/docs/cloudflare_queues_ts/cloudflare_queues_ts_index'},
  {label: 'Cron/Workflows', sidebarId: 'cloudflareCronTsSidebar', path: '/docs/cloudflare_cron_ts/cloudflare_cron_ts_index'},
  {label: '運用/Logs', sidebarId: 'cloudflareLogsTsSidebar', path: '/docs/cloudflare_logs_ts/cloudflare_logs_ts_index'},
  {label: 'Workers AI', sidebarId: 'cloudflareWorkerAiTsSidebar', path: '/docs/cloudflare_worker_ai_ts/cloudflare_worker_ai_ts_index'},
  {label: 'AI応用', sidebarId: 'cloudflareAiFunctionsTsSidebar', path: '/docs/cloudflare_ai_functions_ts/cloudflare_ai_functions_ts_index'},
  {label: '総仕上げ', sidebarId: 'cloudflareOverallFinishTsSidebar', path: '/docs/cloudflare_overall_finish_ts/cloudflare_overall_finish_ts_index'},
];

function getActiveFolder(pathname: string): string | null {
  const match = pathname.match(/^\/docs\/([^/]+)\//);
  return match ? match[1] : null;
}

export default function CategoryBar(): React.ReactNode {
  const {pathname} = useLocation();
  const activeFolder = getActiveFolder(pathname);

  return (
    <div className={styles.categoryBar}>
      <div className={styles.categoryBarInner}>
        {categories.map((cat) => {
          const folderMatch = cat.path.match(/^\/docs\/([^/]+)\//);
          const catFolder = folderMatch ? folderMatch[1] : '';
          const isActive = activeFolder === catFolder;

          return (
            <Link
              key={cat.sidebarId}
              to={cat.path}
              className={`${styles.categoryLink} ${isActive ? styles.categoryLinkActive : ''}`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
