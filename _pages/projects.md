---
layout: page
permalink: /projects/
title: research
description: Research in numerical relativity, compact-object mergers, relativistic jets, and multimessenger astrophysics.
nav: true
nav_order: 1
---

<p class="page-lede">
  I study how strong gravity, magnetic fields, and radiation shape compact-object mergers,
  relativistic jets, and the signals we can observe from them.
</p>

<div class="research-tags research-tags--page" aria-label="Research themes">
  <span>Numerical relativity</span>
  <span>General-relativistic MHD</span>
  <span>Neutrino transport</span>
  <span>Multimessenger astrophysics</span>
</div>

<nav class="section-jump" aria-label="Research project navigation">
  <a href="#binary-neutron-star-mergers">01 · Neutron-star mergers</a>
  <a href="#supermassive-black-hole-binaries">02 · Supermassive black holes</a>
  <a href="#asterx">03 · AsterX</a>
  <a href="#nux">04 · nuX</a>
  <a href="#bhclusterx">05 · BHClusterX</a>
</nav>

<figure class="science-hero">
  <img
    src="{{ '/assets/img/publications/smbh-jet-kinks.webp' | relative_url }}"
    alt="Three-dimensional rendering of circumbinary-disk rest-mass density and selected helical magnetic field lines in the bipolar jet"
    width="1800"
    height="1424"
    decoding="async"
    data-zoomable
  >
  <figcaption>
    <span class="media-kicker">Submitted to ApJL · 2026</span>
    <strong>Disk impacts and jet precession</strong>
    <span>Rest-mass density in the circumbinary disk around a small-mass-ratio supermassive black-hole binary, with selected magnetic field lines showing kink-like deformations in the bipolar jet.</span>
  </figcaption>
</figure>

<h2 class="section-heading" id="research-projects">Research projects</h2>

<p class="section-intro">
  Five connected projects span scientific software, compact-object simulations, and radiation
  transport. Use the movie controls to play, pause, or enter full screen; the movies contain no audio.
</p>

<div class="simulation-chapter" id="binary-neutron-star-mergers">
  <div class="simulation-chapter__heading">
    <span>01 · Neutron-star mergers</span>
    <div>
      <h3>Binary neutron star mergers</h3>
      <p>Across complementary simulations, I study how the equation of state, neutrino transport, magnetic fields, spin, and remnant lifetime shape merger ejecta, nucleosynthesis, and the conditions for jet formation. The movie shows a black-hole–disk incipient jet propagating through the dense polar outflow launched by the massive-neutron-star remnant before its delayed collapse.</p>
    </div>
  </div>

  <div class="simulation-grid">
    <article class="simulation-card simulation-card--wide" id="jet-environment-movie">
      <div class="video-shell video-shell--paper">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/publications/video-jet-environment-poster.webp' | relative_url }}" aria-label="Case C jet-environment interaction after a binary-neutron-star merger">
          <source src="{{ '/assets/video/simulations/jet-environment-case-c.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <span class="media-chip">Spritz · Case C</span>
      </div>
      <div class="simulation-card__copy">
        <h3>A jet pushing through its environment</h3>
        <p>Synchronized meridional views of rest-mass density, radial velocity, magnetic-field strength, and magnetization show the incipient black-hole–disk jet interacting with the polar outflow launched before collapse.</p>
        <a class="simulation-card__link" href="https://arxiv.org/abs/2505.09426" target="_blank" rel="noopener noreferrer">Read the paper <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  </div>
</div>

<div class="simulation-chapter" id="supermassive-black-hole-binaries">
  <div class="simulation-chapter__heading">
    <span>02 · Supermassive binaries</span>
    <div>
      <h3>Supermassive black hole binaries</h3>
      <p>Three-dimensional GRMHD simulations follow a precessing binary with mass ratio q = 1/7 embedded in a magnetized circumbinary disk. Repeated passages of the secondary through the inner accretion flow alternately load the two jet funnels, producing quasi-periodic outflows; the jet also precesses, reverses its magnetic handedness, and undergoes two weakening episodes.</p>
      <a class="simulation-chapter__link" href="https://arxiv.org/abs/2609.24837" target="_blank" rel="noopener noreferrer">Related preprint <span aria-hidden="true">↗</span></a>
    </div>
  </div>

  <div class="simulation-grid">
    <article class="simulation-card simulation-card--wide">
      <div class="video-shell video-shell--wide">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/publications/video-smbh-rho-poster.webp' | relative_url }}" aria-label="Density evolution in the orbital and meridional planes of a supermassive black-hole binary simulation">
          <source src="{{ '/assets/video/simulations/smbh-density-slices.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <span class="media-chip">Supermassive black hole binary · density</span>
      </div>
      <div class="simulation-card__copy">
        <h3>Disk–binary interaction</h3>
        <p>Equatorial and meridional density views reveal how the asymmetric binary reshapes the accretion flow.</p>
      </div>
    </article>

    <article class="simulation-card">
      <div class="video-shell video-shell--landscape">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/publications/video-smbh-jet-wide-poster.webp' | relative_url }}" aria-label="Three-dimensional circumbinary disk with magnetic field lines tracing the jet">
          <source src="{{ '/assets/video/simulations/smbh-jet-field-lines-wide.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <span class="media-chip">Supermassive black hole binary · jet</span>
      </div>
      <div class="simulation-card__copy">
        <h3>Global jet structure</h3>
        <p>A wide 3D view of the circumbinary disk and the evolving magnetic-field geometry associated with its jet.</p>
      </div>
    </article>

    <article class="simulation-card">
      <div class="video-shell video-shell--square">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/publications/video-smbh-jet-square-poster.webp' | relative_url }}" aria-label="Close three-dimensional view of the supermassive black-hole binary and its variable jet">
          <source src="{{ '/assets/video/simulations/smbh-jet-variability.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <span class="media-chip">Supermassive black hole binary · near zone</span>
      </div>
      <div class="simulation-card__copy">
        <h3>Near-zone variability</h3>
        <p>A closer view of the binary, surrounding density structure, and time-dependent magnetic geometry.</p>
      </div>
    </article>
  </div>
</div>

<div class="simulation-chapter" id="asterx">
  <div class="simulation-chapter__heading">
    <span>03 · AsterX</span>
    <div>
      <h3>AsterX — GPU-accelerated GRMHD code</h3>
      <p>AsterX is an open-source, modular, GPU-accelerated GRMHD code for dynamical spacetimes, built on CarpetX/AMReX within the Einstein Toolkit. It supports block-structured adaptive mesh refinement, high-resolution shock capturing, and tabulated equations of state; weak-scaling tests reached 4,096 Frontier nodes with 67–77% efficiency relative to eight nodes.</p>
      <a class="simulation-chapter__link" href="https://github.com/EinsteinToolkit/AsterX" target="_blank" rel="noopener noreferrer">AsterX repository <span aria-hidden="true">↗</span></a>
    </div>
  </div>

  <div class="simulation-grid">
    <article class="simulation-card">
      <div class="video-shell video-shell--square">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/publications/video-flowtracerx-poster.webp' | relative_url }}" aria-label="FlowTracerX density and tracer-particle simulation">
          <source src="{{ '/assets/video/simulations/flowtracerx-density-particles.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <span class="media-chip">AsterX · FlowTracerX · AMR</span>
      </div>
      <div class="simulation-card__copy">
        <h3>Kelvin–Helmholtz instability</h3>
        <p>The background shows the density field; passive tracer particles, colored by fluid velocity, follow the Kelvin–Helmholtz roll-up across the adaptive mesh.</p>
      </div>
    </article>

    <article class="simulation-card">
      <div class="video-shell video-shell--square">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/publications/video-bns-3d-poster.webp' | relative_url }}" aria-label="Three-dimensional magnetic-field evolution in an AsterX neutron-star merger remnant">
          <source src="{{ '/assets/video/simulations/asterx-bns-3d.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <span class="media-chip">AsterX · merger remnant · 3D</span>
      </div>
      <div class="simulation-card__copy">
        <h3>Magnetized post-merger remnant</h3>
        <p>Rest-mass-density isosurfaces and selected field-line tracers, colored by magnetic-field strength, visualize the turbulent post-merger remnant.</p>
      </div>
    </article>
  </div>
</div>

<div class="simulation-chapter" id="nux">
  <div class="simulation-chapter__heading">
    <span>04 · nuX</span>
    <div>
      <h3>nuX — GPU-accelerated M1 neutrino transport code</h3>
      <p>nuX evolves the zeroth and first angular moments of the neutrino radiation field using an M1 closure on GPUs and is designed to couple with AsterX. It supports multi-species neutrino transport and neutrino–matter source terms for cooling, heating, composition evolution, and radiation stress–energy feedback in neutron-star-merger and core-collapse simulations.</p>
      <a class="simulation-chapter__link" href="https://github.com/jaykalinani/nuX" target="_blank" rel="noopener noreferrer">nuX repository <span aria-hidden="true">↗</span></a>
    </div>
  </div>

  <div class="simulation-grid">
    <article class="simulation-card simulation-card--wide">
      <div class="video-shell video-shell--panorama video-shell--light">
        <img
          src="{{ '/assets/img/publications/nux-beam-bending.webp' | relative_url }}"
          alt="Side-by-side THC and nuX beam-bending solutions in curved spacetime"
          width="1800"
          height="847"
          loading="lazy"
          decoding="async"
          data-zoomable
        >
        <span class="media-chip">nuX · M1 transport</span>
      </div>
      <div class="simulation-card__copy">
        <h3>Curved-spacetime beam bending</h3>
        <p>At t = 20, the THC and nuX radiation-energy-density solutions both track the dashed reference envelope in this curved-spacetime beam-bending test.</p>
      </div>
    </article>
  </div>
</div>

<div class="simulation-chapter" id="bhclusterx">
  <div class="simulation-chapter__heading">
    <span>05 · BHClusterX</span>
    <div>
      <h3>BHClusterX — Bowen–York initial-data code for N black holes</h3>
      <p>BHClusterX constructs Bowen–York initial data for systems of N black holes within the Einstein Toolkit. It provides a foundation for simulations of relativistic black-hole clusters, including hierarchical mergers in which remnants of earlier coalescences merge again.</p>
      <a class="simulation-chapter__link" href="https://github.com/jaykalinani/BHClusterX" target="_blank" rel="noopener noreferrer">BHClusterX repository <span aria-hidden="true">↗</span></a>
    </div>
  </div>

  <div class="simulation-grid">
    <article class="simulation-card simulation-card--wide">
      <div class="video-shell video-shell--landscape">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/publications/video-bhclusterx-quartet-poster.webp' | relative_url }}" aria-label="Four-black-hole BHClusterX evolution of the conformal factor in the orbital plane">
          <source src="{{ '/assets/video/simulations/bhclusterx-black-hole-quartet.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <span class="media-chip">BHClusterX · Bowen–York · N = 4</span>
      </div>
      <div class="simulation-card__copy">
        <h3>A moving black-hole quartet</h3>
        <p>The conformal factor ψ visualizes the evolving geometry as four initially separated black holes move inward and merge to form a single, more massive black hole.</p>
      </div>
    </article>
  </div>
</div>
