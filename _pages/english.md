---
layout: page
permalink: /en/
title: English
nav: false
nav_order: 5
description:
---

<style>
.post-title {
  display: none !important;
}
.cv-name {
  display: block;
  margin: 0 0 1rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
}
.cv-section {
  margin-bottom: 2rem;
}
.cv-section h3 {
  color: var(--global-theme-color);
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.cv-section h4 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.info-card {
  background: var(--global-card-bg-color);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--global-divider-color);
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
  color: var(--global-text-color);
  line-height: 1.5;
}

.timeline-item {
  margin-bottom: 1.2rem;
  padding-left: 1rem;
  border-left: 2px solid var(--global-divider-color);
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
  color: var(--global-text-color-light);
}
.timeline-item .title {
  font-weight: 600;
}
.timeline-item .institution,
.timeline-item .description {
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  margin-top: 0.3rem;
  padding-left: calc(160px + 1rem + 0.5rem + 0.5rem);
}
.timeline-item .institution {
  font-style: italic;
}
.timeline-item .description {
  color: var(--global-text-color);
}

.profile-photo {
  float: right;
  margin: 0 0 2rem 2rem;
  width: 200px;
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
.profile-and-info .info-card {
  margin-right: 220px;
  margin-top: 0;
}
@media (max-width: 768px) {
  .cv-name {
    font-size: 1.6rem;
  }
  .profile-photo {
    float: none;
    margin: 0 auto 1.5rem auto;
    display: block;
    text-align: center;
    width: 150px;
  }
  .profile-and-info .info-card {
    margin-right: 0;
  }
  .profile-and-info {
    min-height: auto;
  }
  .timeline-item .header {
    flex-wrap: wrap;
    row-gap: 0.2rem;
  }
  .timeline-item .period {
    min-width: auto;
    width: 100%;
    margin-right: 0;
  }
  .timeline-item .separator {
    display: none;
  }
  .timeline-item .institution,
  .timeline-item .description {
    padding-left: 0;
  }
}
.research-section {
  margin-bottom: 2rem;
}
.research-version {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}
.research-summary {
  font-size: 1.05rem;
}
.keywords {
  margin-top: 1rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--global-divider-color);
}
.keywords strong {
  color: var(--global-text-color);
  margin-bottom: 0.4rem;
  display: block;
}
.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.55rem;
  align-items: center;
}
.keyword-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.62rem;
  border-radius: 999px;
  border: 1px solid var(--global-divider-color);
  background-color: var(--global-card-bg-color);
  color: var(--global-text-color);
  line-height: 1.35;
  font-size: 0.86rem;
  white-space: nowrap;
}
.keyword-tag::before {
  content: "#";
  opacity: 0.55;
  margin-right: 0.28rem;
}
.cv-link {
  color: var(--global-theme-color) !important;
  text-decoration: underline;
  text-underline-offset: 0.12em;
}
.cv-social {
  text-align: left !important;
}
.cv-social .contact-icons {
  font-size: 2em !important;
  justify-content: flex-start !important;
}
.cv-social .contact-icons a img {
  height: 1em !important;
  width: auto !important;
  margin-bottom: 0 !important;
}
.cv-social .contact-icons a svg {
  width: 1.75em !important;
  height: 2em !important;
  margin-bottom: 0 !important;
}
.cv-social .contact-icons a svg image {
  width: 1.75em !important;
  height: 1.75em !important;
}
</style>

<div class="profile-and-info">
  <div class="profile-photo">
    <img src="{{ '/assets/img/ito_2606_2.JPG' | relative_url }}" alt="Junsei Ito">
  </div>

  <div class="cv-section">
    <h1 class="cv-name">Junsei Ito</h1>
    <div class="info-card">
    <div class="info-item">
      <div class="info-label">Affiliation</div>
      <div class="info-content">
        Waseda University, Faculty of Science and Engineering<br>
        Graduate School of Advanced Science and Engineering<br>
        <a class="cv-link" href="https://www.eb.waseda.ac.jp/index.html">Department of Electrical Engineering and Bioscience</a>, Master's student (second year)<br>
        Systems Control Laboratory (<a class="cv-link" href="https://wasalab.w.waseda.jp/index.html">Yasuaki Wasa Laboratory</a>)<br>
        JST ACT-X Researcher
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
    <div class="info-item">
      <div class="info-label">Links</div>
      <div class="info-content">
        <div class="social cv-social">
          <div class="contact-icons">{% include social.liquid %}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

<div class="cv-section research-section">
  <h3>Vision</h3>
  <div class="research-version">ver. 2026/04/02</div>

  <p class="research-summary"><strong>Exploring the principles of intelligence and control under structural constraints in physical systems.</strong></p>

  <p>I work on problems at the intersection of control theory, information science, and physics, grounded in systems control theory. I view the structural constraints inherent in physical systems, such as observation, information, and actuation constraints, not merely as technical obstacles but as fundamental conditions that shape what estimation, learning, and control can achieve.</p>

  <p>From this perspective, I seek to integrate the universal laws and interaction structures provided by physics with the data-driven learning and estimation capabilities provided by information science, within the framework of systems control theory. I am particularly interested in principles of intelligence and control that remain effective under structural constraints. I am also interested in cybernetics and emergence: how adaptive, ordered behavior and intelligence arise through local interactions and information network structures, and how they can be described and designed.</p>

  <div class="keywords">
    <strong>Keywords:</strong>
    <div class="keywords-list">
      <span class="keyword-tag">Systems Control Theory</span>
      <span class="keyword-tag">Data-Driven Control</span>
      <span class="keyword-tag">Physical AI</span>
      <span class="keyword-tag">Partial Observation</span>
      <span class="keyword-tag">Information Geometry</span>
      <span class="keyword-tag">Information Thermodynamics</span>
      <span class="keyword-tag">Physics-Informed Neural Networks (PINNs)</span>
      <span class="keyword-tag">Hamiltonian Neural Networks</span>
      <span class="keyword-tag">Cybernetics</span>
      <span class="keyword-tag">Emergence</span>
    </div>
  </div>
</div>

<div class="cv-section">
  <h3>Biography</h3>
  <div class="timeline">
    <div class="timeline-item">
      <div class="header">
        <span class="period">Oct 2025 - Present</span>
        <span class="separator">|</span>
        <span class="title">Japan Science and Technology Agency (JST), ACT-X Researcher</span>
      </div>
    </div>
    <div class="timeline-item">
      <div class="header">
        <span class="period">Apr 2025 - Present</span>
        <span class="separator">|</span>
        <span class="title">Waseda University, Graduate School of Advanced Science and Engineering</span>
      </div>
      <div class="institution">Master's Program in Electrical Engineering and Bioscience</div>
      <div class="description">Master's thesis: TBD</div>
      <div class="description">Supervisor: Assoc. Prof. Yasuaki Wasa</div>
    </div>
    <div class="timeline-item">
      <div class="header">
        <span class="period">Apr 2021 - Mar 2025</span>
        <span class="separator">|</span>
        <span class="title">Waseda University, School of Advanced Science and Engineering</span>
      </div>
      <div class="institution">Bachelor of Engineering</div>
      <div class="description">Bachelor's thesis: "Data-Driven Adaptive PID Gain Optimization Using Physics-Based Deep Learning and Automatic Differentiation"</div>
      <div class="description">Supervisor: Assoc. Prof. Yasuaki Wasa</div>
    </div>
    <div class="timeline-item">
      <div class="header">
        <span class="period">Apr 2018 - Mar 2021</span>
        <span class="separator">|</span>
        <span class="title">
          <a class="cv-link" href="https://nika.myswan.ed.jp/" target="_blank" rel="noopener">Sendai Nika High School</a>
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
        <a class="cv-link" href="https://www.jst.go.jp/">JST</a>
        <a class="cv-link" href="https://www.jst.go.jp/kisoken/act-x/index.html">ACT-X</a>
        "Development of Sim2Real Transfer Methods under Partial Observation" (Principal Investigator)
      </div>
      <div class="info-content">
        Japan Science and Technology Agency, Strategic Basic Research Programs ACT-X<br>
        Research Area: <a class="cv-link" href="https://www.jst.go.jp/kisoken/act-x/research_area/bunya2023-1.html">Mathematical and Information Science Innovation for Next-Generation AI</a><br>
        Period: October 2025 - March 2028 (planned)<br>
        Budget: 4,500,000 JPY + monthly salary<br>
        Related links:
        <a class="cv-link" href="https://www.waseda.jp/inst/research/news/82130">Waseda University press release</a>,
        <a class="cv-link" href="https://research-er.jp/projects/view/1309578">Japan Research</a>
      </div>
    </div>
  </div>
</div>

<div class="cv-section">
  <h3>Professional Memberships</h3>
  <ul>
    <li><strong><a class="cv-link" href="https://www.sice.jp/">The Society of Instrument and Control Engineers (SICE)</a></strong></li>
    <li><strong><a class="cv-link" href="https://www.ai-gakkai.or.jp/">Japanese Society for Artificial Intelligence (JSAI)</a></strong></li>
  </ul>
</div>

<div class="cv-section">
  <h3>Committee Service</h3>
  <div class="timeline">
    <div class="timeline-item">
      <div class="header">
        <span class="period">Jan 2026 - Present</span>
        <span class="separator">|</span>
        <span class="title">Student Committee Member, SICE Control Division <a class="cv-link" href="https://cphs.sice-ctrl.jp/">Technical Committee on Autonomous Cyber-Physical Human Systems</a></span>
      </div>
    </div>
  </div>
</div>

<div class="cv-section">
  <h3>Experience</h3>
  <h4>Research Activities</h4>
  <ul>
    <li><strong>Osaka University QIQB Quantum Software Study Group - Excellence Award and Special Selection</strong> (June 2023 - March 2024)<br>
      Selected for special group work as one of the top 7 students among 93 participants while being the youngest participant.</li>
    <li><strong>Short-term research stay at Osaka University, <a class="cv-link" href="https://researchmap.jp/kosuke-mitarai">Assoc. Prof. Kosuke Mitarai</a>'s laboratory</strong> (March 2024)<br>
      Research on pulse optimization for superconducting quantum computers using JAX, and quantum gate operation optimization using automatic differentiation.</li>
  </ul>

  <h4>Industry Experience</h4>
  <ul>
    <li><strong><a class="cv-link" href="https://qunasys.com/">QunaSys Inc.</a></strong> (March 2024 - October 2025)<br>
      Quantum computing software development.</li>
  </ul>

  <h4>Teaching Activities</h4>
  <ul>
    <li><strong>Teaching Assistant (TA)</strong><br>
      - Electrical Engineering and Bioscience Laboratory B (2024, 2025)<br>
      - Systems Analysis (2024)</li>
  </ul>
</div>
