<script setup lang="ts">
import { useRouter } from 'vue-router'
import worksImage3 from '@/assets/2026_stm32_document.png'
const router = useRouter()
</script>

<template>
  <div class="detail-page">
    <button class="back-btn" @click="router.back()">← 戻る</button>

    <h1>STM32学習サイト</h1>

    <img :src="worksImage3" alt="STM32学習サイト" class="detail-image">

    <section>
      <h2>概要</h2>
      <p>STM32を使用した製作を後輩に引き継ぐためのドキュメントです</p>
      <p>C++の基礎的な部分から始まり、モーターやセンサーなどのハードウェアを扱えるようにすることを目標にしています</p>
    </section>

    <section>
      <h2>2025年</h2>

      <p>2025年は純粋なHTMLのみで構成しました</p>
      <p>10人程度の新入生が講座に参加しました。</p>
      <p>そのうち4人が最後までクリアし、貴重な戦力として現在も活躍してくれています</p>
    </section>

    <section>
      <h2>2026年</h2>

      <p>2025年度の課題は、進捗管理が不十分で全員に教え切れていないことでした。</p>
      <p>そこで、claudeflare workerを使用して、データベースを使ったユーザーごとの進捗管理や進捗の自動報告機能を作成しました</p>

      <p>また、ドキュメントを増やすにあたってreactのコンポーネントを利用し、ドキュメントの保守性を向上させました</p>
      <p>現在運用中で、内容の修正や調整を行いつつ新入生を呼び込んでいます</p>

    </section>
  </div>
</template>

<style scoped>
.detail-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.back-btn {
  align-self: flex-start;
  background: none;
  border: 1px solid #646cff;
  color: #646cff;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
}

.back-btn:hover {
  background: #646cff;
  color: white;
}

h1 {
  font-size: 2rem;
  margin: 0;
}

.detail-image {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.parts-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.parts-table th,
.parts-table td {
  padding: 10px 16px;
  border: 1px solid #0f0f0f;
  text-align: left;
}

.parts-table thead tr {
  background: #0f0f0f;
}

.parts-table tbody tr:nth-child(even) {
  background: #0f0f0f;
}
</style>
