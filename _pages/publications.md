---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<div class="publications">

<h2>プレプリント | Preprint </h2>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">Junsei Ito</span>, Yasuaki Wasa</div>
    <h3>Data-Driven Adaptive PID Control Based on Physics-Informed Neural Networks</h3>
    <div class="journal">arXiv preprint arXiv:2510.04591</div>
    <div class="details">October 2025</div>
    <a href="https://arxiv.org/abs/2510.04591" target="_blank" style="margin-right: 1rem;">arXiv</a>
    <button class="bibtex-toggle" onclick="toggleBibtex(this)">Show BibTeX</button>
    <div class="bibtex-content">@article{ito2025adaptive,
  title={Data-Driven Adaptive PID Control Based on Physics-Informed Neural Networks},
  author={Junsei Ito and Yasuaki Wasa},
  journal={arXiv preprint arXiv:2510.04591},
  year={2025},
  month={October},
  url={https://arxiv.org/abs/2510.04591}
}</div>
  </div>
</div>
<!-- 学術論文誌 | Journal Articles -->
<h2>学術論文誌 | Journal Articles</h2>

<!-- 国際学会 | International Conferences -->
<h2>国際学会 | International Conferences</h2>

<!-- 国内学会 | Domestic Conferences -->
<h2>国内学会 | Domestic Conferences</h2>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">伊藤潤成</span>, 和佐泰明</div>
    <h3>物理法則に基づく深層学習と自動微分を活用した適応的PIDゲイン最適化</h3>
    <div class="journal">SICE 第12回 制御部門マルチシンポジウム予稿集</div>
    <div class="details">2M7-4, 大阪, 2025年3月4日</div>
    <button class="bibtex-toggle" onclick="toggleBibtex(this)">Show BibTeX</button>
    <div class="bibtex-content">@inproceedings{ito2025adaptive,
  title={物理法則に基づく深層学習と自動微分を活用した適応的PIDゲイン最適化},
  author={伊藤潤成 and 和佐泰明},
  booktitle={SICE 第12回 制御部門マルチシンポジウム予稿集},
  pages={2M7-4},
  year={2025},
  month={3月},
  day={4},
  address={大阪}
}</div>
  </div>
</div>

<!-- その他 | Others -->
<h2>その他 | Others</h2>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">伊藤潤成</span></div>
    <h3>物理法則に基づく深層学習と自動微分を活用したデータ駆動型適応的PIDゲイン最適化</h3>
    <div class="journal">早稲田大学　先進理工学部　電気・情報生命工学科 学士論文</div>
    <div class="details">2025年3月</div>
    <button class="bibtex-toggle" onclick="toggleBibtex(this)">Show BibTeX</button>
    <div class="bibtex-content">@bachelorsthesis{ito2025bachelor,
  title={物理法則に基づく深層学習と自動微分を活用したデータ駆動型適応的PIDゲイン最適化},
  author={伊藤潤成},
  school={早稲田大学},
  year={2025},
  month={3月},
  type={卒業論文}
}</div>
  </div>
</div>

</div>

<style>
.publication-item {
  margin-bottom: 2rem;
  padding: 1rem;
  border-left: 3px solid var(--global-theme-color);
  background: #f8f9fa;
}

.publication-item h3 {
  margin: 0 0 0.5rem 0;
  color: blue;
  font-weight: bold;
  font-size: 1.1rem;
}

.publication-item .authors {
  margin-bottom: 0.5rem;
}

.publication-item .authors .highlight-author {
  font-weight: bold;
}

.publication-item .journal {
  font-style: italic;
  margin-bottom: 0.5rem;
}

.publication-item .details {
  color: #666;
  margin-bottom: 1rem;
}

.bibtex-toggle {
  background: var(--global-theme-color);
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9rem;
}

.bibtex-toggle:hover {
  opacity: 0.8;
}

.bibtex-content {
  display: none;
  margin-top: 1rem;
  padding: 1rem;
  background: #2d3748;
  color: #e2e8f0;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  overflow-x: auto;
}

.bibtex-content.show {
  display: block;
}

.post-title {
  font-weight: bold !important;
  margin-top: 0.1em !important;
  margin-bottom: 1em !important;
}

.publications h2 {
  color: var(--global-theme-color);
  border-bottom: 2px solid var(--global-theme-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

<script>
function toggleBibtex(button) {
  const content = button.nextElementSibling;
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    button.textContent = 'Show BibTeX';
  } else {
    content.classList.add('show');
    button.textContent = 'Hide BibTeX';
  }
}
</script>
