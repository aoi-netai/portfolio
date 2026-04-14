<script setup lang="ts">
import { useRouter } from 'vue-router'
import worksImage2 from '@/assets/20260402_tuat_pointcloud.png'
const router = useRouter()
</script>

<template>
  <div class="detail-page">
    <button class="back-btn" @click="router.back()">← 戻る</button>

    <h1>ラジコン飛行機の自動操縦</h1>

    <img :src="worksImage2" alt="Lidarを使った動体検知" class="detail-image">

    <section>
      <h2>概要</h2>
      <p>Livox MID-70を購入し、機体に搭載したセンサーからの姿勢角情報とLidarからの3D座標を統合して自動操縦を開発しています</p>
    </section>

    <section>
      <h2>技術詳細</h2>
      <p>30m先で飛行するラジコン飛行機の検知ができる程度の精度を確保しています。</p>
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
          <tr>
            <td> Lidar </td>
            <td> Livox MID-70 </td>
            <td>30m先で飛行するラジコン飛行機の検知ができる程度の精度を確保するために選定</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>作成したプログラム</h2>

      <p>git submoduleを使用し、独立したモジュールごとに開発を行っています</p>
      <p>claudeを導入したため、実機がなくても開発・テストができるようにデータセットの作成やモック実装にも取り組んでいます</p>
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
            <td>センサーからのデータをもとに、PID制御でサーボの出力を決定するプログラムを作成しました。</td>
            <td><a href="https://github.com/NOKOLat/PFLIGHT26" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>Lidar</td>
            <td>C++</td>
            <td>現在動体検知、移動速度の推定を作成中です。</td>
            <td><a href="https://github.com/NOKOLat/2026_Hikorobo_Lidar" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>LidarDataset</td>
            <td>C++</td>
            <td>リモート開発用のデータセットと出力プログラムです。</td>
            <td><a href="https://github.com/NOKOLat/Lidar_PointCloud_Sample" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>SbusGenerator</td>
            <td>Python</td>
            <td>リモート開発用のSbus信号（操縦装置の信号）生成プログラムです。</td>
            <td><a href="https://github.com/aoi-netai/SBUS_Generator" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>PID</td>
            <td>C++</td>
            <td>1自由度のPID制御ライブラリです。</td>
            <td><a href="https://github.com/NOKOLat/1DoF_PID" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>地磁気センサー（BMM350）</td>
            <td>C++</td>
            <td>公式ライブラリのSTM32実装を作成しました。</td>
            <td><a href="https://github.com/NOKOLat/STM32_BMM350" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>気圧センサー（DPS368）</td>
            <td>C++</td>
            <td>Arduino向けの公式ライブラリをSTM32に移植しました。</td>
            <td><a href="https://github.com/NOKOLat/STM32_DPS368" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>IMU（ICM42688P）</td>
            <td>C++</td>
            <td>STM32向け実装がなかったため、独自に作成しました。C++であれば他のマイコンでも使用できます。</td>
            <td><a href="https://github.com/NOKOLat/STM32_ICM42688P" target="_blank">詳細を見る</a></td>
          </tr>
          <tr>
            <td>モーター・サーボドライバ</td>
            <td>C++</td>
            <td>STM32向けのモーターおよびサーボの制御ドライバです。</td>
            <td><a href="https://github.com/NOKOLat/STM32_Motor-Servo_Driver" target="_blank">詳細を見る</a></td>
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
