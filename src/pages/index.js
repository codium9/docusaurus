import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="GitBook">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>👋😊 Welcome</h1>
        <p>Bonjour a toi visiteur 🤖</p>
        <p>Si tu est arrivé ici par hazard, sache que ce site est la sauvegarde 💾 de mon cerveau fatigué...</p>
        <p>j'y note quelques astuce, m'évitant ainsi de m'encombrer la tête 😅</p>
        <p>Si cela peut servir à d'autres, profites 😉</p>
      </main>
    </Layout>
  );
}
