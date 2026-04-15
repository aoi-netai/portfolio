<script setup lang="ts">
import { useRouter } from 'vue-router'
import worksImage3 from '@/assets/2026_stm32_document.png'

const router = useRouter()

const programs = [
  {
    name: '全体制御',
    tech: 'C++',
    description: 'センサーからのデータをもとに、PID制御でモーターの出力を決定するプログラムです。',
    link: 'https://github.com/NOKOLat/PFLIGHT26',
  },
  {
    name: 'Lidar',
    tech: 'C++',
    description: '現在動体検知と移動速度の推定を作成中のモジュールです。',
    link: 'https://github.com/NOKOLat/2026_Hikorobo_Lidar',
  },
  {
    name: 'LidarDataset',
    tech: 'C++',
    description: 'リモート開発用のデータセットと出力プログラムです。',
    link: 'https://github.com/NOKOLat/Lidar_PointCloud_Sample',
  },
  {
    name: 'SbusGenerator',
    tech: 'Python',
    description: 'リモート開発用のSbus信号生成プログラムです。',
    link: 'https://github.com/aoi-netai/SBUS_Generator',
  },
  {
    name: 'PID',
    tech: 'C++',
    description: '1自由度のPID制御ライブラリです。',
    link: 'https://github.com/NOKOLat/1DoF_PID',
  },
  {
    name: '地磁気センサー（BMM350）',
    tech: 'C++',
    description: '公式ライブラリのSTM32実装を作成しました。',
    link: 'https://github.com/NOKOLat/STM32_BMM350',
  },
  {
    name: '気圧センサー（DPS368）',
    tech: 'C++',
    description: 'Arduino向けの公式ライブラリをSTM32に移植しました。',
    link: 'https://github.com/NOKOLat/STM32_DPS368',
  },
  {
    name: 'IMU（ICM42688P）',
    tech: 'C++',
    description: 'STM32向け実装がなかったため、独自に作成しました。',
    link: 'https://github.com/NOKOLat/STM32_ICM42688P',
  },
  {
    name: 'モーター・サーボドライバ',
    tech: 'C++',
    description: 'STM32向けのモーターおよびサーボの制御ドライバです。',
    link: 'https://github.com/NOKOLat/STM32_Motor-Servo_Driver',
  },
]
</script>

<template>
  <div class="detail-page">
    <button class="back-btn" @click="router.back()">← 戻る</button>

    <h1>STM32学習サイト プログラム一覧</h1>

    <img :src="worksImage3" alt="STM32学習サイト" class="detail-image" />

    <section>
      <h2>概要</h2>
      <p>学習サイトで作成したプログラムを、用途ごとに一覧で確認できるように整理したページです。</p>
    </section>

    <section>
      <h2>一覧</h2>
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
          <tr v-for="program in programs" :key="program.name">
            <td>{{ program.name }}</td>
            <td>{{ program.tech }}</td>
            <td>{{ program.description }}</td>
            <td><a :href="program.link" target="_blank" rel="noreferrer">詳細を見る</a></td>
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