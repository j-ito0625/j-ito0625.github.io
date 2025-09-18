---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
description:
---

<style>
.post-title {
  display: none !important;
}
.cv-section {
  margin-bottom: 2rem;
}
.cv-section h3 {
  color: var(--global-theme-color);
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
.info-table {
  margin-bottom: 1.5rem;
}
.info-table td {
  padding: 0.3rem 0;
  vertical-align: top;
}
.info-table td:first-child {
  font-weight: 600;
  width: 120px;
  padding-right: 1rem;
}
.info-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e0e0e0;
}
.info-item {
  margin-bottom: 1rem;
}
.info-item:last-child {
  margin-bottom: 0;
}
.info-label {
  font-weight: 600;
  color: var(--global-theme-color);
  margin-bottom: 0.3rem;
}
.info-content {
  color: #333;
  line-height: 1.5;
}
.timeline-item {
  margin-bottom: 1.2rem;
  padding-left: 1rem;
  border-left: 2px solid #e0e0e0;
}
.timeline-item .header {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.3rem;
  flex-wrap: nowrap;
  position: relative;
}
.timeline-item .period {
  color: var(--global-theme-color);
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  margin-right: 0.5rem;
  min-width: 160px;
  display: inline-block;
}
.timeline-item .separator {
  margin: 0 0.5rem;
  color: #999;
}
.timeline-item .title {
  font-weight: 600;
}
.timeline-item .institution,
.timeline-item .description {
  color: #666;
  font-size: 0.95rem;
  margin-top: 0.3rem;
  padding-left: calc(160px + 1rem + 0.5rem + 0.5rem); /* period width + margins + separator */
}
.timeline-item .institution {
  font-style: italic;
}
.timeline-item .description {
  color: #333;
}
.research-list {
  margin-top: 0.5rem;
}
.research-list h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}
.research-list ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}
.research-list li {
  margin-bottom: 0.3rem;
}
.profile-photo {
  float: right;
  margin: 0 0 2rem 2rem;
  width: 200px;
}
.profile-photo img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
@media (max-width: 768px) {
  .profile-photo {
    float: none;
    margin: 0 auto 2rem auto;
    display: block;
    text-align: center;
  }
}
</style>

<div class="profile-photo">
  <img src="{{ '/assets/img/ito.jpg' | relative_url }}" alt="伊藤 潤成">
</div>

<div class="cv-section">
  <h1 class="post-title" style="display: block !important; font-weight: 600;">伊藤 潤成 | Junsei Ito</h1>
  <table class="info-table">
    <tr>
      <td>所属</td>
      <td>
        早稲田大学 理工学術院<br>
        大学院 先進理工学研究科 <a href="https://www.eb.waseda.ac.jp/index.html" style="color: blue;">電気・情報生命専攻</a>　修士1年<br>
        システム制御研究室(<a href="https://wasalab.w.waseda.jp/index.html" style="color: blue;">和佐泰明研究室</a>)    </td>
    </tr>
    <tr>
      <td>居室</td>
      <td>62号館W棟 2階 11室</td>
    </tr>
    <tr>
      <td>住所</td>
      <td>〒169-8555 東京都新宿区大久保 3-4-1 早稲田大学 62号館2階11室</td>
    </tr>
    <tr>
      <td>E-mail</td>
      <td>junseiito0625 [at] gmail.com</td>
    </tr>
  </table>
</div>

<div class="cv-section">
  <h3>略歴</h3>
  <div class="timeline">
    <div class="timeline-item">
      <div class="header">
        <span class="period">2025年4月 - 現在</span>
        <span class="separator">|</span>
        <span class="title">早稲田大学 理工学術院 大学院 先進理工学研究科 電気・情報生命専攻</span>
      </div>
      <div class="institution">修士課程</div>
      <div class="description">修士論文：TBD</div>
      <div class="description">指導教員：和佐 泰明 准教授</div>
    </div>
    <div class="timeline-item">
      <div class="header">
        <span class="period">2021年4月 - 2025年3月</span>
        <span class="separator">|</span>
        <span class="title">早稲田大学 理工学術院 先進理工学部 電気・情報生命工学科</span>
      </div>
      <div class="institution">学士 (工学)</div>
      <div class="description">学士論文：「物理法則に基づく深層学習と自動微分を活用したデータ駆動型適応的PIDゲイン最適化」</div>
      <div class="description">指導教員：和佐 泰明 准教授</div>
    </div>
    <div class="timeline-item">
      <div class="header">
        <span class="period">2018年4月 - 2021年3月</span>
        <span class="separator">|</span>
        <span class="title">
          <a href="https://nika.myswan.ed.jp/" target="_blank" rel="noopener" style="color: blue;">宮城県仙台二華高等学校</a>
        </span>
      </div>
    </div>
  </div>
</div>

<div class="cv-section">
  <h3>外部研究費 | Grants</h3>
  <div class="info-card">
    <div class="info-item">
      <div class="info-label">
        <a href="https://www.jst.go.jp/" style="color: blue;">JST</a>
        <a href="https://www.jst.go.jp/kisoken/act-x/index.html" style="color: blue;">ACT-X</a>
        「部分観測下におけるSim2Real転移手法の開発」(研究代表)
      </div>
      <div class="info-content">
        科学技術振興機構 戦略的創造研究推進事業 ACT-X<br>
        研究領域：<a href="https://www.jst.go.jp/kisoken/act-x/research_area/bunya2023-1.html" style="color: blue;">[次世代AI・数理情報] 次世代AIを築く数理・情報科学の革新</a><br>
        研究期間：2025年10月 - 2028年3月（予定）
      </div>
    </div>
  </div>
</div>

<div class="cv-section">
  <h3>所属学会</h3>
  <ul>
    <li><strong><a href="https://www.sice.jp/" style="color: blue;">計測自動制御学会 (SICE)</a></strong></li>
  </ul>
</div>

<div class="cv-section">
  <h3>その他</h3>
  <h4>研究活動</h4>
  <ul>
    <li><strong>大阪大学 QIQB 量子ソフトウェア勉強会 優秀成績・特別選抜</strong> (2023年6月 - 2024年3月)</li>
    <li><strong>大阪大学 <a href="https://researchmap.jp/kosuke-mitarai" style="color: blue;">御手洗光祐</a> 准教授研究室 短期研究滞在</strong> (2024年3月)<br>    JAXを用いた超電導量子コンピュータのパルス最適化研究，自動微分による量子ゲート操作最適化</li>
  </ul>

  <h4>企業での開発経験</h4>
  <ul>
    <li><strong><a href="https://qunasys.com/" style="color: blue;">株式会社QunaSys</a></strong> (2024年3月 - 現在)<br>
      量子計算ソフトウェア開発</li>
    <li><strong>株式会社SmartTrade </strong> (2023年11月 - 現在)<br>
      金融市場データ時系列予測モデル開発</li>
  </ul>

  <h4>教育活動</h4>
  <ul>
    <li><strong>ティーチングアシスタント (TA)</strong><br>
      - 電気・情報生命工学実験B (2024年, 2025年)<br>
      - システム解析 (2024年)</li>
  </ul>
</div>


