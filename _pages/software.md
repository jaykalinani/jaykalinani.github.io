---
layout: page
permalink: /software/
title: software
description: Research software for numerical relativity, general-relativistic magnetohydrodynamics, and neutrino transport.
nav: true
nav_order: 2
---

<p class="page-lede">
  I develop GPU-accelerated research software for numerical relativity,
  general-relativistic magnetohydrodynamics (GRMHD), and neutrino transport.
  Many of these projects are open source and part of the Einstein Toolkit.
</p>

<h2 class="section-heading">Lead developer &amp; maintainer</h2>

<div class="software-list">
  <article class="software-entry software-entry--featured">
    <header>
      <h3>AsterX</h3>
      <p>Lead developer &amp; maintainer · 2022–present</p>
    </header>
    <p>A GPU-accelerated GRMHD code for evolving magnetized relativistic fluids in dynamical spacetimes, demonstrated on 4,096 nodes of the Frontier supercomputer.</p>
    <a href="https://github.com/EinsteinToolkit/AsterX" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>
  </article>

  <article class="software-entry software-entry--featured">
    <header>
      <h3>nuX</h3>
      <p>Lead developer &amp; maintainer · 2024–present</p>
    </header>
    <p>A GPU-accelerated neutrino-transport code for dynamical spacetimes, including two-moment (M1) and ray-by-ray M0 schemes coupled to AsterX.</p>
    <a href="https://github.com/jaykalinani/nuX" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>
  </article>

  <article class="software-entry">
    <header>
      <h3>BHClusterX</h3>
      <p>Lead developer &amp; maintainer · 2026–present · Private repository</p>
    </header>
    <p>A code for constructing Bowen–York puncture initial data for systems of multiple black holes.</p>
    <a href="mailto:{{ site.email }}?subject=BHClusterX%20repository%20access">Request access</a>
  </article>

  <article class="software-entry">
    <header>
      <h3>FlowTracerX</h3>
      <p>Lead developer &amp; maintainer · 2026–present</p>
    </header>
    <p>A GPU-accelerated passive-particle tracer for following fluid trajectories in AsterX simulations.</p>
    <a href="https://github.com/jaykalinani/FlowTracerX" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>
  </article>

  <article class="software-entry">
    <header>
      <h3>ParticleAHFinderX</h3>
      <p>Lead developer &amp; maintainer · 2026–present · Private repository</p>
    </header>
    <p>A GPU-accelerated, particle-based apparent-horizon finder for numerical-relativity simulations.</p>
    <a href="mailto:{{ site.email }}?subject=ParticleAHFinderX%20repository%20access">Request access</a>
  </article>

  <article class="software-entry">
    <header>
      <h3>AsterAI</h3>
      <p>Lead developer &amp; maintainer · 2025–present</p>
    </header>
    <p>An experimental toolkit that uses large language models to review C and C++ scientific code.</p>
    <a href="https://github.com/jaykalinani/AsterAI" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>
  </article>
</div>

<h2 class="section-heading">Developer &amp; contributor</h2>

<div class="software-list">
  <article class="software-entry">
    <header>
      <h3>Spritz</h3>
      <p>Developer · 2020–present</p>
    </header>
    <p>A fully general-relativistic magnetohydrodynamics code for dynamical spacetimes, with finite-temperature equations of state and approximate neutrino cooling and heating.</p>
    <a href="https://zenodo.org/records/4350072" target="_blank" rel="noopener noreferrer">Project record <span aria-hidden="true">↗</span></a>
  </article>

  <article class="software-entry">
    <header>
      <h3>SpacetimeX</h3>
      <p>Developer · 2022–present</p>
    </header>
    <p>CarpetX-based modules for preparing initial data, evolving the spacetime metric, and analyzing numerical-relativity simulations.</p>
    <a href="https://github.com/EinsteinToolkit/SpacetimeX" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>
  </article>

  <article class="software-entry">
    <header>
      <h3>CarpetX</h3>
      <p>Contributor · 2022–present</p>
    </header>
    <p>A Cactus driver for the Einstein Toolkit that provides block-structured adaptive mesh refinement through AMReX.</p>
    <a href="https://github.com/EinsteinToolkit/CarpetX" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>
  </article>

  <article class="software-entry">
    <header>
      <h3>RePrimAnd</h3>
      <p>Contributor · 2021</p>
    </header>
    <p>A library for recovering primitive fluid variables from the conserved variables evolved in GRMHD simulations, with equation-of-state support.</p>
    <a href="https://wokast.github.io/RePrimAnd/index.html" target="_blank" rel="noopener noreferrer">Documentation <span aria-hidden="true">↗</span></a>
  </article>
</div>
