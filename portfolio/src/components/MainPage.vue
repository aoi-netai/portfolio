<script setup lang="ts">
import testImage from '@/assets/IMG_1919.jpg';
import introImage from '@/assets/test_image_02.png';
import affiliationImage from '@/assets/test_image_03.png';
import worksImage1 from '@/assets/pflight.jpg';
import worksImage2 from '@/assets/20260402_tuat_pointcloud.png';
import worksImage3 from '@/assets/2026_stm32_document.png';
</script>

<template>
  <div class="page">

    <div class="hero">
      <img :src="testImage" alt="" class="fullwidth-image" />
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1>あおい / aoi-netai</h1>
      </div>
    </div>

    <!-- 自己紹介 -->
    <section class="introduction">
      <img :src="introImage" alt="自己紹介画像" class="intro-image" />
      <div class="intro-text">
        <h1>自己紹介</h1>
        <p>初めまして。マイコンやros2などの開発をやっている一般人です!</p>
        <p>大学のサークルで電子工作をしたり、バイト先でFA系の業務をしています。</p>
        <p>最近はVRChatというプラットフォームで技術系の交流会（イベント）に参加したり、4月の中旬からイベントの主催をやることになりました!</p>
      </div>
    </section>

    <!-- 所属 -->
    <section class="affiliation">
      <img :src="affiliationImage" alt="所属画像" class="affiliation-image" />
      <div class="affiliation-text">
        <h1>所属先</h1>

        <h2>東京農工大学 2024年4月~</h2>
        <p>化学工学を専攻し、プロセス設計や粉体や流体の扱いを学んでいます</p>

        <h2>東京農工大学 航空研究会  2024年4月~</h2>
        <p>大学の所属サークルで、ドローンのフライトコントローラーや、ラジコン飛行機の自動操縦のプロジェクトを主導しています</p>

        <h2>株式会社Zrek 2025年11月~</h2>
        <p>アルバイトで働いていて、ROS2を使った工場の自動化に関するプログラムを担当しています。</p>

        <h2>組み込みエンジニア集会 2026年4月~</h2>
        <p>低レイヤーのエンジニア向けの技術交流会をVRChatで開催しています。</p>
        <p>必要な準備が整ったので、2026年4月16日から定期的に開催予定です。</p>
      </div>
    </section>

    <!-- 作ったもの -->
    <section class="works">
      <h1>取り組んでいるもの</h1>

      <div class="work-item">
        <img :src="worksImage1" alt="ドローンのフライトコントローラー" class="work-image" />
        <div class="work-text">
          <h2>ドローンのフライトコントローラー</h2>
          <p>STM32マイコンを使用して、センサーやモーターライブラリの作成から、全体の制御設計といった開発をしました。</p>
          <p>6軸IMUを使用した姿勢推定を採用したため、yaw軸の制御精度に問題がありますが通常飛行は十分にこなせます</p>
          <RouterLink to="/works/flight-controller" class="detail-link">詳細を見る →</RouterLink>
        </div>
      </div>

      <div class="work-item">
        <img :src="worksImage2" alt="Lidarを使った動体検知" class="work-image" />
        <div class="work-text">
          <h2>Lidarを使った、ラジコン飛行機の自動操縦</h2>
          <p>飛行ロボットコンテスト、自動操縦部門での優勝を目指して、Lidarを使った動体検知の開発をしています。</p>
          <p>30m先で検知ができる程度の精度を確保しています</p>
          <RouterLink to="/works/lidar" class="detail-link">詳細を見る →</RouterLink>
        </div>
      </div>

      <div class="work-item">
        <img :src="worksImage3" alt="STM32学習サイト" class="work-image" />
        <div class="work-text">
          <h2>STM32学習サイト</h2>
          <p>サークルの後輩育成のために作成しました</p>
          <p>2025年は純粋なhtmlのみで構成し、教育は成功しましたが教える側への負荷が大きかったため</p>
          <p>2026年度は、reactやcloudflare workerを使って、アカウントごとの進捗管理や、進捗報告の自動化を行いました</p>
          <RouterLink to="/works/stm32" class="detail-link">詳細を見る →</RouterLink>
          <RouterLink to="/works/stm32/programs" class="detail-link">プログラム一覧ページ →</RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.hero {
  position: relative;
}

.fullwidth-image {
  width: 100%;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 25, 60, 0.9);
}

.hero-text {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  gap: 16px;
}

.hero-text * {
  color: white;
}

.hero-text h1 {
  font-size: 3rem;
  margin: 0;
  letter-spacing: 0.05em;
  bold: true;
}

.hero-text p {
  font-size: 1.1rem;
  opacity: 0.85;
}

/* 自己紹介 */
.introduction {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  padding: 48px 32px;
  background: #f5f4ff;
}

.intro-image {
  padding: 50px;
  min-width: 200px;
  flex: 0 0 600px;
  max-width: 100%;
}

.intro-text {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 280px;
}

/* 所属 */
.affiliation {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  padding: 48px 32px;
  background: #eef0f7;
}

.affiliation-text {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 280px;
}

.affiliation-image {
  padding: 50px;
  min-width: 200px;
  flex: 0 0 600px;
  max-width: 100%;
}

/* 実績 */
.works {
  padding: 48px 32px;
  background: #f5f4ff;
}

.works h1 {
  margin-bottom: 32px;
}

.work-item {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  margin-bottom: 48px;
}

.work-image {
  flex: 0 0 300px;
  min-width: 200px;
  max-width: 100%;
}

.work-text {
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-link {
  align-self: flex-start;
  margin-top: 8px;
  padding: 8px 16px;
  border: 1px solid #646cff;
  border-radius: 6px;
  color: #646cff;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}

.detail-link:hover {
  background: #646cff;
  color: white;
}
</style>
