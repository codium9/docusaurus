import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="GitBook">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>👋😊 Welcome</h1>
        <Link className="button button--primary" to="/docs/welcome">
          Get Started
        </Link>
      </main>
    </Layout>
  );
}
