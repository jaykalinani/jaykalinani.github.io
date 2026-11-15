---
layout: page
permalink: /projects/
title: research
description: I study how strong gravity, magnetic fields, and radiation shape compact-object mergers, relativistic jets, and the signals we can observe from them.
nav: true
nav_order: 1
---

<section class="simulation-chapter" id="binary-neutron-star-mergers">
  <header class="simulation-chapter__heading">
    <h2>Binary neutron star mergers</h2>
    <p>I study how neutron-star matter, neutrinos, magnetic fields, and spin control the material thrown out by a merger and whether a relativistic jet can escape.</p>
  </header>

  <figure class="simulation-card simulation-card--wide" id="jet-environment-movie">
    <div class="video-shell video-shell--paper">
      <video controls playsinline preload="metadata" width="1280" height="854" poster="{{ '/assets/img/publications/video-jet-environment-poster.webp' | relative_url }}" aria-label="Case C jet-environment interaction after a binary-neutron-star merger">
        <source src="{{ '/assets/video/simulations/jet-environment-case-c.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support embedded video.
      </video>
    </div>
    <figcaption class="simulation-card__copy">
      <span class="media-meta">Binary neutron star merger</span>
      <h3>A jet propagating through merger ejecta</h3>
      <p>Four physical views track a black-hole–driven jet as it shocks and moves through material expelled before the remnant collapsed.</p>
      <a class="simulation-card__link" href="https://arxiv.org/abs/2505.09426" target="_blank" rel="noopener noreferrer">Read the paper <span aria-hidden="true">↗</span></a>
    </figcaption>
  </figure>
</section>

<section class="simulation-chapter" id="supermassive-black-hole-binaries">
  <header class="simulation-chapter__heading">
    <h2>Supermassive black hole binaries</h2>
    <p>I simulate precessing, unequal-mass black-hole binaries inside magnetized disks to connect activity near the binary with changes seen farther along the jet.</p>
    <a class="simulation-chapter__link" href="https://arxiv.org/abs/2609.24837" target="_blank" rel="noopener noreferrer">Read the preprint <span aria-hidden="true">↗</span></a>
  </header>

  <figure class="simulation-card simulation-card--wide">
    <div class="video-shell video-shell--wide">
      <video controls playsinline preload="metadata" width="1280" height="568" poster="{{ '/assets/img/publications/video-smbh-rho-poster.webp' | relative_url }}" aria-label="Density evolution in the orbital and meridional planes of a supermassive black-hole binary simulation">
        <source src="{{ '/assets/video/simulations/smbh-density-slices.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support embedded video.
      </video>
    </div>
    <figcaption class="simulation-card__copy">
      <span class="media-meta">Supermassive black hole binary</span>
      <h3>Disk–binary interaction</h3>
      <p>Density in two cross-sections follows streams of gas crossing the central cavity and feeding the two black holes.</p>
    </figcaption>
  </figure>

  <details class="simulation-more">
    <summary>More simulations</summary>
    <div class="simulation-grid simulation-grid--secondary">
      <figure class="simulation-card">
        <div class="video-shell video-shell--landscape">
          <video controls playsinline preload="metadata" width="1200" height="938" poster="{{ '/assets/img/publications/video-smbh-jet-wide-poster.webp' | relative_url }}" aria-label="Three-dimensional circumbinary disk with magnetic field lines tracing the jet">
            <source src="{{ '/assets/video/simulations/smbh-jet-field-lines-wide.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support embedded video.
          </video>
        </div>
        <figcaption class="simulation-card__copy">
          <span class="media-meta">Three-dimensional jet view</span>
          <h3>Global jet structure</h3>
          <p>Density surfaces and magnetic-field lines show disturbances launched near the binary travelling into the large-scale jet.</p>
        </figcaption>
      </figure>

      <figure class="simulation-card">
        <div class="video-shell video-shell--square">
          <video controls playsinline preload="metadata" width="960" height="960" poster="{{ '/assets/img/publications/video-smbh-jet-square-poster.webp' | relative_url }}" aria-label="Close three-dimensional view of the supermassive black-hole binary and its variable jet">
            <source src="{{ '/assets/video/simulations/smbh-jet-variability.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support embedded video.
          </video>
        </div>
        <figcaption class="simulation-card__copy">
          <span class="media-meta">Near the binary</span>
          <h3>Near-zone variability</h3>
          <p>As the smaller black hole crosses the inner disk, it pushes magnetized gas toward the jet and perturbs the outflow.</p>
        </figcaption>
      </figure>
    </div>
  </details>
</section>

<section class="simulation-chapter" id="asterx">
  <header class="simulation-chapter__heading">
    <h2>AsterX</h2>
    <p>AsterX is open-source, GPU-accelerated software that evolves magnetized matter and spacetime together.</p>
    <a class="simulation-chapter__link" href="https://github.com/EinsteinToolkit/AsterX" target="_blank" rel="noopener noreferrer">View AsterX on GitHub <span aria-hidden="true">↗</span></a>
  </header>

  <figure class="simulation-card simulation-card--medium">
    <div class="video-shell video-shell--square">
      <video controls playsinline preload="metadata" width="1200" height="1134" poster="{{ '/assets/img/publications/video-flowtracerx-poster.webp' | relative_url }}" aria-label="FlowTracerX density and tracer-particle simulation">
        <source src="{{ '/assets/video/simulations/flowtracerx-density-particles.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support embedded video.
      </video>
    </div>
    <figcaption class="simulation-card__copy">
      <span class="media-meta">AsterX · tracer particles</span>
      <h3>Kelvin–Helmholtz instability</h3>
      <p>Tracer particles follow vortices that form when a velocity difference rolls the fluid interface into the Kelvin–Helmholtz instability.</p>
    </figcaption>
  </figure>

  <details class="simulation-more">
    <summary>More simulations</summary>
    <figure class="simulation-card simulation-card--medium">
      <div class="video-shell video-shell--square">
        <video controls playsinline preload="metadata" width="1080" height="1080" poster="{{ '/assets/img/publications/video-bns-3d-poster.webp' | relative_url }}" aria-label="Three-dimensional magnetic-field evolution in an AsterX neutron-star merger remnant">
          <source src="{{ '/assets/video/simulations/asterx-bns-3d.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
      </div>
      <figcaption class="simulation-card__copy">
        <span class="media-meta">AsterX · merger remnant</span>
        <h3>Magnetized post-merger remnant</h3>
        <p>Density surfaces and magnetic-field lines reveal the turbulent, magnetized remnant formed after the stars merge.</p>
      </figcaption>
    </figure>
  </details>
</section>

<section class="simulation-chapter" id="nux">
  <header class="simulation-chapter__heading">
    <h2>nuX</h2>
    <p>nuX follows neutrinos as they move through and exchange energy with matter in mergers and collapsing stars. It runs on GPUs and is designed to work directly with AsterX.</p>
    <a class="simulation-chapter__link" href="https://github.com/jaykalinani/nuX" target="_blank" rel="noopener noreferrer">View nuX on GitHub <span aria-hidden="true">↗</span></a>
  </header>

  <figure class="simulation-card simulation-card--wide">
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
    </div>
    <figcaption class="simulation-card__copy">
      <span class="media-meta">nuX · beam bending</span>
      <h3>Radiation in curved spacetime</h3>
      <p>Both methods recover the expected curved path of a narrow radiation beam in a fixed gravitational field.</p>
    </figcaption>
  </figure>
</section>

<section class="simulation-chapter" id="bhclusterx">
  <header class="simulation-chapter__heading">
    <h2>BHClusterX</h2>
    <p>BHClusterX prepares simulations containing any number of black holes. This enables studies of hierarchical mergers, in which earlier merger remnants form new binaries and merge again.</p>
    <a class="simulation-chapter__link" href="https://github.com/jaykalinani/BHClusterX" target="_blank" rel="noopener noreferrer">View BHClusterX on GitHub <span aria-hidden="true">↗</span></a>
  </header>

  <figure class="simulation-card simulation-card--wide">
    <div class="video-shell video-shell--landscape">
      <video controls playsinline preload="metadata" width="1600" height="1252" poster="{{ '/assets/img/publications/video-bhclusterx-quartet-poster.webp' | relative_url }}" aria-label="Four-black-hole BHClusterX evolution of the conformal factor in the orbital plane">
        <source src="{{ '/assets/video/simulations/bhclusterx-black-hole-quartet.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support embedded video.
      </video>
    </div>
    <figcaption class="simulation-card__copy">
      <span class="media-meta">BHClusterX · four black holes</span>
      <h3>A moving black-hole quartet</h3>
      <p>The conformal factor ψ shows how spacetime changes as four black holes move inward and merge into a single, more massive remnant.</p>
    </figcaption>
  </figure>
</section>
