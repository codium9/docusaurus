import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Home">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to My Site</h1>
        <Link className="button button--primary" to="/docs/intro">
          Get Started
        </Link>
      </main>
    </Layout>
  );
}
