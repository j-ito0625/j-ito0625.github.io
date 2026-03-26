---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 3
_styles: ".post-title { font-weight: bold !important; }"
---

<!-- _pages/publications.md -->

<div class="publications">

<h2>Preprint / Submitted Works</h2>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">Junsei Ito</span>, Yasuaki Wasa</div>
    <h3>Partial Observation Amplifies Model Mismatch in MAP Estimation via Information-Curvature Margins</h3>
    <div class="details">IEEE Control Systems Letters, submitted, 2026</div>
  </div>
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">Junsei Ito</span>, Yasuaki Wasa</div>
    <h3>Data-Driven Adaptive PID Control Based on Physics-Informed Neural Networks</h3>
    <div class="details">arXiv preprint arXiv:2510.04591, October 2025</div>
    <a href="https://arxiv.org/abs/2510.04591" target="_blank" style="margin-right: 1rem;">
      <img src="/assets/img/arxiv-logo.png" alt="arXiv" style="height: 1.5em; vertical-align: middle;">
    </a>
    <button class="abstract-toggle" onclick="toggleAbstract(this)">Show Abstract</button>
    <button class="bibtex-toggle" onclick="toggleBibtex(this)">Show BibTeX</button>
    <div class="abstract-content">
    This article proposes a data-driven PID controller design based on the principle of adaptive gain optimization, leveraging Physics-Informed Neural Networks (PINNs) generated for predictive modeling purposes. The proposed control design method utilizes gradients of the PID gain optimization, achieved through the automatic differentiation of PINNs, to apply model predictive control using a cost function based on tracking error and control inputs. By optimizing PINNs-based PID gains, the method achieves adaptive gain tuning that ensures stability while accounting for system nonlinearities. The proposed method features a systematic framework for integrating PINNs-based models of dynamical control systems into closed-loop control systems, enabling direct application to PID control design. A series of numerical experiments is conducted to demonstrate the effectiveness of the proposed method from the control perspectives based on both time and frequency domains.
    </div>
    <div class="bibtex-content"><button class="copy-bibtex-btn" onclick="copyBibtex(this)"><span>📋</span> Copy</button>@article{ito2025adaptive,
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
<h2>Journal Articles</h2>

<!-- 国際学会 | International Conferences -->
<h2>Peer-Reviewed Conference Proceedings</h2>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">Junsei Ito</span>, Yasuaki Wasa</div>
    <!-- <h3>Designable Phase Transition-Driven Coverage Control</h3> -->
    <h3>Phase-Transition-Driven Distributed Coverage Control</h3>
    <div class="details">23rd IFACWorld Congress, submitted, Korea, 23–28th, Aug., 2026</div>
  </div>
</div>
<!-- 国内学会 | Domestic Conferences -->
<h2>Domestic Conferences</h2>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">伊藤潤成</span>, 和佐泰明</div>
    <!-- <h3>Designable Phase Transition-Driven Coverage Control</h3> -->
    <h3>フローマッチングによる移動ロボットの制御系設計</h3>
    <div class="details"> 2026年度人工知能学会全国大会（第40回）論文集, under preparation, 群馬, 8--12th, June., 2026</div>
  </div>
</div>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">伊藤潤成</span>, 和佐泰明</div>
    <!-- <h3>Designable Phase Transition-Driven Coverage Control</h3> -->
    <h3>相転移現象に基づく分散被覆制御</h3>
    <div class="details">SICE 第13回 制御部門マルチシンポジウム予稿集, 1PS-43, 富山, 4th, Mar., 2026</div>
  </div>
</div>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">伊藤潤成</span>, 和佐泰明</div>
    <h3>群れの相転移現象に基づく動的環境適応のための自律分散マルチエージェント制御</h3>
    <div class="details">第28回情報論的学習理論ワークショップ, 2b-R-37, 沖縄, 2025年11月12-15日</div>
    <button class="abstract-toggle" onclick="toggleAbstract(this)">Show Abstract</button>
    <button class="bibtex-toggle" onclick="toggleBibtex(this)">Show BibTeX</button>
    <div class="abstract-content">
    Vicsekモデルの相転移現象に着想を得た，動的環境下でのマルチエージェント環境モニタリング手法を提案する．エージェント間の局所的相互作用と環境情報の活用により，探索と被覆の動作モードを自発的に切り替える分散制御の実現を目指す．群れの秩序・無秩序状態の相転移を利用することで，明示的な切り替え機構なしに動的環境への柔軟な適応を可能にする．シミュレーションによる基礎的な挙動解析について報告する．
    </div>
    <div class="bibtex-content"><button class="copy-bibtex-btn" onclick="copyBibtex(this)"><span>📋</span> Copy</button>@inproceedings{ito2025adaptive,
  title={群れの相転移現象に基づく動的環境適応のための自律分散マルチエージェント制御},
  author={伊藤潤成 and 和佐泰明},
  booktitle={第28回情報論的学習理論ワークショップ},
  year={2025},
  month={11月},
  day={12-15},
  address={沖縄}
}</div>
  </div>
</div>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">伊藤潤成</span>, 和佐泰明</div>
    <h3>物理法則に基づく深層学習と自動微分を活用した適応的PIDゲイン最適化</h3>
    <div class="details">SICE 第12回 制御部門マルチシンポジウム予稿集, 2M7-4, 大阪, 2025年3月4日</div>
    <button class="abstract-toggle" onclick="toggleAbstract(this)">Show Abstract</button>
    <button class="bibtex-toggle" onclick="toggleBibtex(this)">Show BibTeX</button>
    <div class="abstract-content">
    本研究では，Physics-Informed Neural Networks (PINNs)による物理法則に基づく予測モデルと自動微分を活用した最適化ベースのPIDゲイン調整手法を提案する．提案手法では，状態方程式を制約条件として組み込んだPINNを用いて予測ホライズン内での状態予測を行い，追従誤差と制御入力に基づくコスト関数を定義する．このコスト関数に対して自動微分によって勾配を計算し，PIDゲインを最適化することで，システムの非線形性を考慮した適応的なゲイン調整を実現する．2自由度マニピュレータを対象とした数値実験により，非線形システムの動作領域に応じた適切な勾配法に基づくゲイン調整が可能となり，位置追従性能の向上と入力の急激な変化の抑制を実現できることを確認した．本研究は，深層学習と自動微分という現代的な技術を活用することで，PID制御器の最適化の新たな可能性を切り拓くものである．
    </div>
    <div class="bibtex-content"><button class="copy-bibtex-btn" onclick="copyBibtex(this)"><span>📋</span> Copy</button>@inproceedings{ito2025adaptive,
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
<h2>Others</h2>
<div class="publication-list">
  <div class="publication-item">
    <div class="authors"><span class="highlight-author">伊藤潤成</span></div>
    <h3>物理法則に基づく深層学習と自動微分を活用したデータ駆動型適応的PIDゲイン最適化</h3>
    <div class="details">早稲田大学　先進理工学部　電気・情報生命工学科 学士論文, 2025年3月</div>
    <button class="bibtex-toggle" onclick="toggleBibtex(this)">Show BibTeX</button>
    <div class="bibtex-content"><button class="copy-bibtex-btn" onclick="copyBibtex(this)"><span>📋</span> Copy</button>@bachelorsthesis{ito2025bachelor,
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

<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>
