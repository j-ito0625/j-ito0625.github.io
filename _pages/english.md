---
layout: page
permalink: /en/
title: English
nav: true
nav_order: 5
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

html[data-theme="dark"] .info-content {
  color: white;
}

html[data-theme="dark"] .info-card {
  background: transparent;
  box-shadow: none;
  border: none;
  padding: 0;
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
  padding-left: calc(160px + 1rem + 0.5rem + 0.5rem);
}
.timeline-item .institution {
  font-style: italic;
}
.timeline-item .description {
  color: #333;
}

html[data-theme="dark"] .timeline-item .institution,
html[data-theme="dark"] .timeline-item .description {
  color: white;
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
  margin: 3.5rem 0 1rem 2rem;
  width: 180px;
  clear: right;
}
.profile-photo img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.profile-and-info {
  position: relative;
  min-height: 300px;
}
.cv-section .info-card {
  margin-right: 200px;
  margin-top: 0;
}
@media (max-width: 768px) {
  .profile-photo {
    float: none;
    margin: 0 auto 1.5rem auto;
    display: block;
    text-align: center;
    width: 150px;
  }
  .cv-section .info-card {
    margin-right: 0;
  }
  .profile-and-info {
    min-height: auto;
  }
}
.research-section {
  margin-bottom: 2rem;
}

html[data-theme="dark"] a[style*="color: blue"] {
  color: var(--global-theme-color) !important;
}
</style>

<div class="profile-and-info">
  <div class="profile-photo">
    <img src="{{ '/assets/img/ito.jpg' | relative_url }}" alt="Junsei Ito">
  </div>

  <div class="cv-section">
    <h1 class="post-title" style="display: block !important; font-weight: 600;">Junsei Ito</h1>
    <div class="info-card">
    <div class="info-item">
      <div class="info-label">Affiliation</div>
      <div class="info-content">
        Waseda University, Faculty of Science and Engineering<br>
        Graduate School of Advanced Science and Engineering<br>
        <a href="https://www.eb.waseda.ac.jp/index.html" style="color: blue;">Department of Electrical Engineering and Bioscience</a>, Master's Student (1st Year)<br>
        <a href="https://wasalab.w.waseda.jp/index.html" style="color: blue;">Systems Control Laboratory (Wasa Lab)</a>
      </div>
    </div>
    <div class="info-item">
      <div class="info-label">Office</div>
      <div class="info-content">Building 62W, 2nd Floor, Room 11</div>
    </div>
    <div class="info-item">
      <div class="info-label">Address</div>
      <div class="info-content">3-4-1 Okubo, Shinjuku-ku, Tokyo 169-8555, Japan</div>
    </div>
    <div class="info-item">
      <div class="info-label">E-mail</div>
      <div class="info-content">junseiito0625 [at] gmail.com</div>
    </div>
    </div>
  </div>
</div>

<div class="research-section">
  <p>I am engaged in interdisciplinary research combining <span style="font-weight: bold; color: black;">Control Theory</span> × <span style="font-weight: bold; color: #0B346E;">Information Science</span> × <span style="font-weight: bold; color: #B9121B;">Physics</span>, centered on systems control theory. For the essential constraints of physical systems such as partial observability and uncertainty, I explore new solutions by integrating the universal laws provided by <span style="font-weight: bold; color: #B9121B;">Physics</span> with the data-driven learning and estimation capabilities enabled by <span style="font-weight: bold; color: #0B346E;">Information Science</span> within the framework of control theory.</p>

  <div class="keywords">
    <strong>Keywords (including recent interests):</strong>
    <span>Systems Control Theory, Physics-Informed Neural Networks, Diffusion Models, Physical AI, Sim2Real, Active Matter, Information Thermodynamics</span>
  </div>
</div>

<div class="cv-section">
  <h3>Education</h3>
  <div class="timeline">
    <div class="timeline-item">
      <div class="header">
        <span class="period">Apr 2025 - Present</span>
        <span class="separator">|</span>
        <span class="title">Waseda University, Graduate School of Advanced Science and Engineering</span>
      </div>
      <div class="institution">Master's Program in Electrical Engineering and Bioscience</div>
      <div class="description">Supervisor: Prof. Yasuaki Wasa</div>
    </div>
    <div class="timeline-item">
      <div class="header">
        <span class="period">Apr 2021 - Mar 2025</span>
        <span class="separator">|</span>
        <span class="title">Waseda University, School of Advanced Science and Engineering</span>
      </div>
      <div class="institution">Bachelor of Engineering</div>
      <div class="description">Bachelor's Thesis: "Data-Driven Adaptive PID Gain Optimization Using Physics-Based Deep Learning and Automatic Differentiation"</div>
      <div class="description">Supervisor: Prof. Yasuaki Wasa</div>
    </div>
    <div class="timeline-item">
      <div class="header">
        <span class="period">Apr 2018 - Mar 2021</span>
        <span class="separator">|</span>
        <span class="title">
          <a href="https://nika.myswan.ed.jp/" target="_blank" rel="noopener" style="color: blue;">Sendai Nika High School</a>
        </span>
      </div>
    </div>
  </div>
</div>

<div class="cv-section">
  <h3>Grants</h3>
  <div class="info-card">
    <div class="info-item">
      <div class="info-label">
        <a href="https://www.jst.go.jp/" style="color: blue;">JST</a>
        <a href="https://www.jst.go.jp/kisoken/act-x/index.html" style="color: blue;">ACT-X</a>
        "Development of Sim2Real Transfer Methods under Partial Observation" (Principal Investigator)
      </div>
      <div class="info-content">
        Japan Science and Technology Agency, Strategic Basic Research Programs ACT-X<br>
        Research Area: <a href="https://www.jst.go.jp/kisoken/act-x/research_area/bunya2023-1.html" style="color: blue;">Mathematical and Information Science Innovation for Next-Generation AI</a><br>
        Period: October 2025 - March 2028 (planned)<br>
        Budget: 4,500,000 JPY (direct costs)
      </div>
    </div>
  </div>
</div>

<div class="cv-section">
  <h3>Professional Memberships</h3>
  <ul>
    <li><strong><a href="https://www.sice.jp/" style="color: blue;">The Society of Instrument and Control Engineers (SICE)</a></strong></li>
  </ul>
</div>

<!-- <div class="cv-section">
  <h3>Research</h3>
  <div class="research-list">
    <h4>Research Fields</h4>
    <ul>
      <li>Integration of Control Theory and Deep Learning</li>
      <li>Physics-Informed Neural Networks (PINNs)</li>
      <li>Data-Driven Control Systems</li>
      <li>Optimization Methods using Automatic Differentiation</li>
    </ul>

    <h4>Current Research Topics</h4>
    <ul>
      <li>Nonlinear Control System Design utilizing PINNs</li>
      <li>Adaptive PID Gain Adjustment using Deep Learning</li>
      <li>Neural Network Learning Methods considering Physical Laws</li>
    </ul>
  </div>
</div> -->

<div class="cv-section">
  <h3>Experience</h3>
  <h4>Research Activities</h4>
  <ul>
    <li><strong>Osaka University QIQB Quantum Software Study Group - Excellence Award & Special Selection</strong> (June 2023 - March 2024)<br>
      Selected among top 7 students out of 93 participants for special group work, being the youngest participant (3rd-year undergraduate)</li>
    <li><strong>Short-term Research Stay at Osaka University, <a href="https://researchmap.jp/kosuke-mitarai" style="color: blue;">Prof. Kosuke Mitarai</a>'s Laboratory</strong> (March 2024)<br>
      Research on pulse optimization for superconducting quantum computers using JAX, quantum gate operation optimization using automatic differentiation</li>
  </ul>

  <!-- <h4>Industry Experience</h4>
  <ul>
    <li><strong><a href="https://qunasys.com/" style="color: blue;">QunaSys Inc.</a></strong> (March 2024 - Present)<br>
      Quantum computing software development</li>
    <li><strong>SmartTrade Inc.</strong> (November 2023 - Present)<br>
      Time-series prediction model development for financial market data</li>
  </ul> -->

  <h4>Teaching Activities</h4>
  <ul>
    <li><strong>Teaching Assistant (TA)</strong><br>
      - Electrical Engineering and Bioscience Laboratory B (2024, 2025)<br>
      - Systems Analysis (2024)</li>
  </ul>
</div>
