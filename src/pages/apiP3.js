import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function APIFpsServicePage() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.TryIt_securitySchemeValues = JSON.stringify({
        'ApiKeyAuth': 'API_KEY_HERE'
      })
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>PhotonIQ Performance Proxy API Reference | Macrometa Docs</title>
        <meta name="description" content="PhotonIQ Performance Proxy API" />
        <meta name="og:description" content="PhotonIQ Performance Proxy API" />
        {/* Loading styles for elements this way so it doesn't interfere with other styles */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@stoplight/elements/styles.min.css"
        />
      </Head>
      <BrowserOnly
        fallback={
          <div className="flex min-h-screen w-full items-center justify-center">
            <div
              className="h-10 w-10 animate-spin rounded-full border-l border-t-2 border-primary"
              aria-label="Loading..."
            ></div>
          </div>
        }
      >
        {() => {
          // eslint-disable-next-line no-undef
          const { API } = require('@stoplight/elements');
          return (
            <>
              {}
              <API
                apiDescriptionUrl={`${siteConfig.baseUrl}openapi/p3-spec.json`}
                router="hash"
                basePath="/"
                layout="sidebar"
                hideSchemas={true}
                hideMocking
                hideInternal
              />
            </>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
