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
    alt="Three-dimensional rendering of a circumbinary accretion disk and its distorted bipolar jet"
    width="1800"
    height="1424"
    decoding="async"
    data-zoomable
  >
  <figcaption>
    <span class="media-kicker">Submitted to ApJL · 2026</span>
    <strong>Black-hole–disk collisions and jet precession</strong>
    <span>A circumbinary accretion flow around a small mass-ratio supermassive black-hole binary, with field lines tracing the distorted bipolar jet.</span>
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
      <p>Finite-temperature equations of state, neutrino transport, and magnetic fields reveal how composition, spin, and remnant structure shape outflows, jet conditions, kilonova ejecta, and r-process nucleosynthesis. The movie follows a later black-hole–disk jet as it propagates through the polar environment launched before delayed collapse.</p>
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
        <p>Synchronized views of density, radial velocity, magnetic-field strength, and magnetization follow the incipient jet as it encounters the pre-collapse outflow.</p>
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
      <p>Three-dimensional GRMHD simulations follow gas dynamics and accretion around an unequal-mass binary embedded in a magnetized circumbinary disk. They connect repeated black-hole–disk encounters, asymmetric accretion, and jet precession with quasi-periodic outflows and changing electromagnetic signatures.</p>
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
        <p>A wide 3D view of the circumbinary disk and the evolving magnetic field lines threading its jet.</p>
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
      <p>AsterX is an open-source general-relativistic magnetohydrodynamics code for dynamical spacetimes, built on CarpetX/AMReX within the Einstein Toolkit. It supports adaptive mesh refinement, high-resolution shock capturing, tabulated equations of state, and production simulations on as many as 4,096 Frontier nodes.</p>
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
        <p>Density and velocity-colored passive tracer particles follow the roll-up of a shearing layer across the adaptive mesh.</p>
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
        <p>Density isosurfaces and magnetic field lines expose the turbulent structure left after two neutron stars merge.</p>
      </div>
    </article>
  </div>
</div>

<div class="simulation-chapter" id="nux">
  <div class="simulation-chapter__heading">
    <span>04 · nuX</span>
    <div>
      <h3>nuX — GPU-accelerated M1 neutrino transport code</h3>
      <p>nuX evolves the first two angular moments of the neutrino radiation field on GPUs and is designed to couple tightly with AsterX. It targets multimessenger GRMHD simulations with realistic neutrino cooling, heating, and composition evolution in neutron-star merger remnants and collapsars.</p>
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
        <p>THC and nuX solutions are compared with the reference beam envelope in a curved-spacetime transport test.</p>
      </div>
    </article>
  </div>
</div>

<div class="simulation-chapter" id="bhclusterx">
  <div class="simulation-chapter__heading">
    <span>05 · BHClusterX</span>
    <div>
      <h3>BHClusterX — Bowen–York initial-data code for N black holes</h3>
      <p>BHClusterX constructs Bowen–York initial data for systems of N black holes within the Einstein Toolkit. It provides a foundation for simulations of relativistic black-hole clusters and other many-body strong-gravity configurations.</p>
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
        <p>The conformal factor ψ follows four black holes as their initially separated punctures move inward and form a compact central configuration.</p>
      </div>
    </article>
  </div>
</div>
