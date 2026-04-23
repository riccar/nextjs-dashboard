import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    // Shared profile for dashboard data fetches.
    // See https://nextjs.org/docs/app/api-reference/functions/cacheLife
    //   stale:      how long the client can use cached data without checking
    //               the server. The client-side router displays cached content
    //               immediately without any network request during this window
    //               (sent via the `x-nextjs-stale-time` response header).
    //   revalidate: how often the server regenerates cached content in the
    //               background. After this age, the next request serves the
    //               cached version immediately, regenerates in the background,
    //               and updates the cache with fresh content (ISR-like).
    //   expire:     maximum time before the server must regenerate cached
    //               content. After this period with no traffic, the server
    //               regenerates content synchronously on the next request.
    dashboardData: {
      stale: 60 * 5, // 5 minutes
      revalidate: 60, // 1 minute
      expire: 60 * 60, // 1 hour
    },
  },
};

export default nextConfig;
