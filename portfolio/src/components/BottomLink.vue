<template>
  <section class="links">
    <h2>リンク</h2>
    <div class="links-grid">
      <a href="https://web.tuat.ac.jp/~birdman/" class="link-card">航空研究会 HP</a>
      <a href="https://github.com/NOKOLat" class="link-card">航空研究会 GitHub</a>
      <a href="https://github.com/aoi-netai" class="link-card">個人 GitHub</a>
      <a href="https://vrc-ta-hub.com/community/100/" class="link-card">組み込みエンジニア集会</a>
    </div>
  </section>
</template>

<style scoped>
.links {
  padding: 48px 32px;
  background: #f0f0f0;
}

.links h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  border-left: 4px solid #646cff;
  padding-left: 12px;
}

.links-grid {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.link-card {
  padding: 12px 24px;
  border: 1px solid #646cff;
  border-radius: 8px;
  color: #646cff;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}

.link-card:hover {
  background: #646cff;
  color: white;
}
</style>
