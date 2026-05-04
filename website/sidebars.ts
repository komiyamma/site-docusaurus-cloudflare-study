import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
const fs = require('fs');
const path = require('path');

function generateProjectSidebar(folder: string) {
  const docsPath = path.join(__dirname, 'docs', folder);

  if (!fs.existsSync(docsPath)) {
    console.warn(`Warning: Docs directory not found: ${docsPath}`);
    return [];
  }

  const files = fs
    .readdirSync(docsPath)
    .filter((file: string) => file.endsWith('.md') || file.endsWith('.mdx'))
    .sort((a, b) => {
      const aIsIndex = a.includes('_index.');
      const bIsIndex = b.includes('_index.');

      if (aIsIndex && !bIsIndex) return -1;
      if (!aIsIndex && bIsIndex) return 1;

      return a.localeCompare(b);
    });

  return files.map((file: string) => {
    const id = `${folder}/${file.replace(/\.mdx?$/, '')}`;
    return {
      type: 'doc' as const,
      id,
    };
  });
}


const cloudflareSidebars = [
  ['cloudflareIsWhatTsSidebar', 'cloudflare_is_what_ts'],
  ['cloudflareWebCloudTsSidebar', 'cloudflare_web_cloud_ts'],
  ['cloudflareDashboardTsSidebar', 'cloudflare_dashboard_ts'],
  ['cloudflareDevenvTsSidebar', 'cloudflare_devenv_ts'],
  ['cloudflareWorkerFirstTsSidebar', 'cloudflare_worker_first_ts'],
  ['cloudflareLocalDebugTsSidebar', 'cloudflare_local_debug_ts'],
  ['cloudflareStaticPageTsSidebar', 'cloudflare_static_page_ts'],
  ['cloudflareTypescriptTsSidebar', 'cloudflare_typescript_ts'],
  ['cloudflareWorkerApiTsSidebar', 'cloudflare_worker_api_ts'],
  ['cloudflareReactBaseTsSidebar', 'cloudflare_react_base_ts'],
  ['cloudflareOwnDomainTsSidebar', 'cloudflare_own_domain_ts'],
  ['cloudflareCdnCacheTsSidebar', 'cloudflare_cdn_cache_ts'],
  ['cloudflareSecretsGuardTsSidebar', 'cloudflare_secrets_guard_ts'],
  ['cloudflareStorageMapTsSidebar', 'cloudflare_storage_map_ts'],
  ['cloudflareKvTsSidebar', 'cloudflare_kv_ts'],
  ['cloudflareD1TsSidebar', 'cloudflare_d1_ts'],
  ['cloudflareR2TsSidebar', 'cloudflare_r2_ts'],
  ['cloudflareDurableObjectTsSidebar', 'cloudflare_durable_object_ts'],
  ['cloudflareQueuesTsSidebar', 'cloudflare_queues_ts'],
  ['cloudflareCronTsSidebar', 'cloudflare_cron_ts'],
  ['cloudflareLogsTsSidebar', 'cloudflare_logs_ts'],
  ['cloudflareWorkerAiTsSidebar', 'cloudflare_worker_ai_ts'],
  ['cloudflareAiFunctionsTsSidebar', 'cloudflare_ai_functions_ts'],
  ['cloudflareOverallFinishTsSidebar', 'cloudflare_overall_finish_ts'],
] as const;

const sidebars: SidebarsConfig = Object.fromEntries(
  cloudflareSidebars.map(([sidebarId, folder]) => [sidebarId, generateProjectSidebar(folder)]),
);

export default sidebars;
