<script setup lang="ts">
import { useRouter } from 'vue-router'
import worksImage1 from '@/assets/pflight.jpg'
const router = useRouter()
</script>

<template>
  <div class="detail-page">
    <button class="back-btn" @click="router.back()">← 戻る</button>

    <h1>ドローンのフライトコントローラー</h1>

    <img :src="worksImage1" alt="ドローンのフライトコントローラー" class="detail-image">

    <section>
      <h2>概要</h2>
      <p>STM32マイコンを使用して、センサーやモーターライブラリの作成から、全体の制御設計といった開発をしました。</p>
      <p>StateMachineやクラスの継承など、プログラミングの基礎を学びました。</p>
    </section>

    <section>
      <h2>使用部品</h2>
      <table class="parts-table">
        <thead>
          <tr>
            <th>カテゴリ</th>
            <th>部品名</th>
            <th>選定理由</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>マイコン</td>
            <td>STM32 F732RET6</td>
            <td>当時のSTM32マイコンの中で高性能かつ、学習に使用しているF446REのボードと互換性があるため</td>
          </tr>
          <tr>
            <td>IMU</td>
            <td>ICM42688p</td>
            <td>ドリフトの影響の小さい短時間の飛行で、ノイズの小ささが重要になるため</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>作成したプログラム</h2>
      <table class="parts-table">
        <thead>
          <tr>
            <th>プログラム名</th>
            <th>使用技術</th>
            <th>説明</th>
            <th>リンク</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>全体制御</td>
            <td>C++</td>
            <td>センサーからのデータをもとに、PID制御でモーターの出力を決定するプログラムを作成しました。</td>
            <td><a href="https://github.com/NOKOLat/PFLIGHT" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>IMU（ICM42688p）</td>
            <td>C++</td>
            <td>stm32向け実装がなかったため、独自に作成しました。C++であれば他のマイコンであっても使用できます</td>
            <td><a href="https://github.com/NOKOLat/STM32_ICM42688P" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>気圧センサー(DSP368)</td>
            <td>C++</td>
            <td>Arudino向けの公式ライブラリを移植しました。</td>
            <td><a href="https://github.com/NOKOLat/STM32_DPS368" target="_blank">詳細を見る</a></td>
          </tr>
        </tbody>
      </table>
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


</style>
